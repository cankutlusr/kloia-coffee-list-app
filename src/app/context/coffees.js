import React,{useState,useContext}  from 'react'
import db from '../../db/coffeeDB'
const CoffeesContext = React.createContext()

export const CoffeesProvider = ({children}) => {
    const [coffees] = useState(db.coffees)
    const [filteredCoffees,setFilteredCoffees] = useState([])
    const [filteredSearchCoffees,setFilteredSearchCoffees] = useState([])
    const [categories] = useState(db.categories)
    const [activeCategoryName,setActiveCategoryName] = useState('')
    const values = {coffees,categories,filteredCoffees,setFilteredCoffees,filteredSearchCoffees,setFilteredSearchCoffees,activeCategoryName,setActiveCategoryName}
    return <CoffeesContext.Provider value={values}>{children}</CoffeesContext.Provider>
}

export const useCoffees = () => useContext(CoffeesContext)