
import Image from "next/image"
import { BannerImage } from "../assets/images"

const Banner = () => {
	return (
		<div className="relative w-full h-80 sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[7000x]">
			<Image src={BannerImage} alt="banner" layout="fill" objectFit="cover" />
			<div className="absolute top-1/2 -translate-y-1/2 w-full text-center font-[cereal-medium]">
				<p className="text-sm md:text-lg mb-3">Not sure where to go? Perfect!</p>
				<button className="text-sm md:text-lg px-5 py-2 text-purple-500 bg-white rounded-full border shadow-md hover:shadow-xl active:scale-105">I'm flexible</button>
			</div>
	</div>)
}
export default Banner