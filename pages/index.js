import { PageTitle, Banner, ListCard, Card, Jumbotron } from "../components"
import { exploreData, cardData, jumbotronData } from "../constants"
import { JumbotronImage } from "../assets/images"

const siteName = "Airbnb elite"

export default function Home() {
  return (<>
		<PageTitle>${siteName} | Home</PageTitle>
    <div>
			{/* Banner */}
      <Banner />
			
			<main className="max-w-7xl mx-auto px-8">
				{/* Explore */}
				<section className="pt-6">
					<h2 className="text-2xl md:text-4xl font-[cereal-bold] pb-5">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
						{ exploreData?.map(({ img, location, distance}, i) => (
							<ListCard
								key={`${i}-${location}`}
								img={img}
								title={location}
								subtitle={distance}
							/>
						))}
					</div>
				</section>
				
				{/* Live Anywhere */}
				<section className="pt-6">
					<h2 className="text-2xl md:text-4xl font-[cereal-bold] pb-5">Explore Nearby</h2>
					<div className="flex space-x-4 p-3 -ml-3 overflow-scroll scrollbar-hide">
						{ cardData?.map(({ img, title}, i) => (
							<Card
								key={`${i}-${title}`}
								img={img}
								title={title}
							/>
						))}
					</div>
				</section>
				
				{/* Jumbotron */}
				<section className="py-16">
					<Jumbotron
						img={JumbotronImage}
						title="The Greatest Outdoors"
						description={`Wishlist created by ${siteName}`}
						buttonText="Get Inspired"
						/>
				</section>
			</main>
    </div>
	</>)
}










