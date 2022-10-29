
import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
	return (<>
		<Head>
      <meta name="description" content="AirBNB is a vacation rental and room rental service that allows users to rent out their houses or rooms to travellers, that can search for accommodations by location to find a place to rent." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	</>)
}
export default Layout