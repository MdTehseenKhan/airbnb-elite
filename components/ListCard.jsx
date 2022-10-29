import Image from "next/image"

const ListCard = ({ img, title, subtitle }) => (
	<div className="flex p-2 space-x-4 rounded-lg hover:bg-gray-200 hover:scale-105">
		<div className="relative h-16 w-16">
			<Image src={img} alt={title} className="rounded-lg" layout="fill" objectFit="cover"/>
    </div>
		<div className="flex flex-col justify-center">
			<p className="font-[cereal-medium]">{title}</p>
			<p className="text-gray-500 font-[cereal-light]">{subtitle}</p>
		</div>
	</div>
)
export default ListCard