
import { createContext, useContext } from "react"

const Context = createContext()

export const useC = () => useContext(Context)

export Provider = ({ children }) => {
	
	return (<Context.Provider value={{}}>
		{children}
	</Context.Provider>)
}