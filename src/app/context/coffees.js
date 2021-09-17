import React,{useState,useContext}  from 'react'
import db from '../../db/coffeeDB'
const CoffeesContext = React.createContext()

export const CoffeesProvider = ({children}) => {
    const [coffees] = useState(db.coffees)
    console.log(db.coffees);
    const [categories] = useState(db.categories)
    console.log(db.categories);
    const values = {coffees,categories}
    return <CoffeesContext.Provider value={values}>{children}</CoffeesContext.Provider>
}

export const useCoffees = () => useContext(CoffeesContext)