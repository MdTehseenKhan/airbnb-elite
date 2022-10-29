import Image from "next/image"
import { HeartIcon, StarIcon } from "../assets/icons"

const InfoCard = ({ img, location, title, description, star, price, total, long, lat }) => {
	return (<div className="py-5 border-b first:border-t">
		<div className="flex flex-col md:flex-row items-center rounded-lg py-7 px-3 pr-4 cursor-pointer hover:shadow-md">
			<div className="relative w-full h-52 md:w-80 flex-shrink-0">
				<Image src={img} alt={location} layout="fill" objectFit="cover" className="rounded-lg hover:opacity-80" />
			</div>
			<div className="flex flex-col flex-grow md:pl-5 pt-5 md:pt-0">
				<div className="flex justify-between">
					<p>{location}</p>
					<HeartIcon className="h-7 cursor-pointer fill-none stroke-1 stroke-black hover:stroke-none hover:fill-red-500"/>
				</div>

				<h4 className="text-xl font-[cereal-bold]">{title}</h4>

				<div className="border-b w-10 pt-2" />

				<p className="pt-2 text-sm font-[cereal] text-gray-500 flex-grow">
					{description}
				</p>
				
				<div className="flex justify-between items-end pt-5">
					<p className="flex justify-center">
						<StarIcon className="h-5 text-yellow-500"/>
						<span>{star}</span>
					</p>
					<div className="text-right">
						<p className="text-lg lg:text-2xl font-[cereal-bold] pb-2">
							{price}
						</p>
						<p className="font-[cereal]">
							{total}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>)
}
export default InfoCard





