import { useRouter } from "next/router"
import { format } from "date-fns"
import { InfoCard } from "../components"

const filters = [
	"Cancellation Flexibility",
	"Type of Place",
	"Price",
	"Rooms and Beds",
	"More filters"
]

export default function Search({ searchResults }) {
	const router = useRouter()
	const { location, startDate, endDate, noOfGuest } = router.query
	const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
	const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
	const range = `${formattedStartDate} - ${formattedEndDate}`

	return (<>
		<main className="flex flex-col">
			<section className="flex-grow pt-14 px-6">
				<p className="text-sm">300+ Stays - {range} - for {noOfGuest} guests</p>
				<h1 className="text-3xl font-[cereal-bold] mt-2 mb-6">Stays in {location}</h1>
				<div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
					{filters?.map((filter, i) => (
						<button key={`${i}-${filter}`} className="filter">{filter}</button>
					))}
				</div>
			</section>
			<section className="p-5 mb-7">
				<div className="flex flex-col">
					{
						searchResults?.map(({ img, location, title, description, star, price, total, long, lat },i) => (
							<InfoCard 
								key={`${i}-${title}`}
								img={img}
								location={location}
								title={title}
								description={description}
								star={star}
								price={price}
								total={total}
								long={long}
								lat={lat}
							/>
						))
					}
				</div>
				<aside className="hidden">
					
				</aside>
			</section>
		</main>
	</>)
}
export async function getServerSideProps() {
	
	const res = await fetch("https://api.npoint.io/67c0d23fe84216b15670")
  const searchResults = await res.json()

	return {
		props: {
			searchResults
		}
	}
}







