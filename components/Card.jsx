import Image from "next/image"

const Card = ({ img, title }) => (
	<div className="cursor-pointer hover:scale-105 transform duration-300 ease-out">
		<div className="relative h-80 w-80">
			<Image src={img} alt={title} layout="fill" className="rounded-xl" />
		</div>
		<h3 className="md:text-2xl font-[cereal-medium] mt-3">{title}</h3>
	</div>
)
export default Card