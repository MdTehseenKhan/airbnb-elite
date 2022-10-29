import Image from "next/image"

const Jumbotron = ({ img, title, description, buttonText }) => (
	<div className="relative cursor-pointer">
		<div className="relative h-96 min-w-[300px]">
			<Image src={img} alt={title} layout="fill" objectFit="cover" objectPosition="center" className="rounded-2xl"/>
		</div>
		<div className="absolute top-16 md:top-32 left-12">
			<h3 className="text-3xl md:text-4xl mb-3 w-64 font-[cereal-bold]">{title}</h3>
			<p className="font-[cereal-light]">{description}</p>
			<button className="text-sm text-white font-[cereal-medium] bg-gray-900 hover:bg-gray-800 px-4 py-2 mt-5 rounded-lg">{buttonText}</button>
		</div>
	</div>
)
export default Jumbotron