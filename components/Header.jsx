
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import { useState } from "react"
import { Logo } from "../assets/images"
import {
	SearchIcon,
	GlobeIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon
} from "../assets/icons"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range"
import { format } from "date-fns"



const Header = () => {
	const router = useRouter()
	const [searchText, setSearchText] = useState("")
  const [placeholder, setPlaceholder] = useState("Start search here...")
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	const [noOfGuest, setNoOfGuest] = useState(1)

	const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
	}
	const changeDateRange = (ranges) => {
		setStartDate(ranges?.selection?.startDate)
		setEndDate(ranges?.selection?.endDate)
	}

	const resetInput = () => {
		setSearchText("")
	}
	const search = (e) => {
		e.preventDefault()
		if(!searchText) return
		setSearchText("")
		router.push({
			pathname: "/search",
			query: {
				location: searchText,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				noOfGuest,
			}
		})
		const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
		const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
		const range = `${formattedStartDate} - ${formattedEndDate}`
		setPlaceholder(`${searchText} | ${range} | ${noOfGuest}`)
	}


 return (<header className="w-full sticky top-0 shadow-md z-50">
	<div className="bg-white flex justify-between items-center px-5 py-4 md:px-10 md:py-5">
		{/* Logo */}
		<Link href="/">
			<div className="relative w-10 h-10 mr-5">
				<Image src={Logo} alt="logo" layout="fill" objectFit="contain"/>
			</div>
		</Link>

    {/* Searchbar */}
		<form onSubmit={search} className="flex grow md:grow-0 items-center border p-2 md:ml-28 rounded-full bg-white border-2">
	  	<input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="grow md:grow-0 md:w-72 py-1 pl-5 outline-none text-sm text-gray-600 placeholder-gray-400" placeholder={placeholder}  />
      <SearchIcon onClick={search} className="w-8 h-8 hover:scale-105 p-2 text-white bg-[#fd5861] hover:bg-red-400 rounded-full cursor-pointer" />
		</form>


		{/* User */}
		<div className="hidden md:flex items-center justify-end space-x-4 text-gray-500">
	  	<button className="hidden md:inline">Become a host</button>
			<GlobeIcon className="h-6"/>
      <div className="flex space-x-2 rounded-full px-3 py-2 border-2">
				<MenuIcon className="h-6" />
				<UserCircleIcon className="h-6" />
			</div>
		</div>
	</div>
	 
	{/* DateRangePicker */}
	{searchText && <div className="fixed w-full bg-white flex flex-col md:items-center shadow-md">
		<div className="overflow-x-auto scrollbar-hide">
			<DateRangePicker
				ranges={[selectionRange]}
				minDate={new Date()}
				rangeColors={["#fd5861"]}
				onChange={changeDateRange}
				className="px-5"
			/>
		</div>
		<div className="w-full sm:w-[540px] sm:mx-auto mb-2 px-3">
			<div className="flex justify-between items-center border-b px-1 pb-1 mb-2">
				<h2 className="text-2xl font-[cereal-medium]">Number of Guests</h2>
				<div className="flex">
					<UsersIcon className="h-5"/>
					<input type="number" min={1} value={noOfGuest} onChange={(e) => setNoOfGuest(e.target.value)} className="w-10 pl-2 outline-none text-red-400" />
				</div>
			</div>
			<div>
				<button onClick={resetInput} className="w-1/2 py-1 rounded-lg text-gray-500">Cancel</button>
				<button onClick={search} className="w-1/2 py-1 rounded-lg text-[#fd5861]">Search</button>
			</div>
		</div>
	</div>}
</header>);
}
export default Header




