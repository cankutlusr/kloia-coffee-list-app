import React,{useEffect} from 'react'
import Menu from "../../components/menu";
import Search from "../../shared/input";
import StyledSidebar from "./styles/index";
import {useCoffees} from '../../context/coffees' 

const Sidebar = ({...props}) => {
    const {categories,filteredCoffees,setFilteredCoffees,filteredSearchCoffees,setFilteredSearchCoffees,activeCategoryName} = useCoffees();

    useEffect(() => {
        setFilteredSearchCoffees(filteredCoffees);
    },[])

    const handleSearch = (text) => {
        if(text?.length > 0){
            const filtered = filteredCoffees.filter(coffee => {
                return (
                    coffee.title.toLowerCase().includes(text.toLowerCase()) ||
                    coffee.description.toLowerCase().includes(text.toLowerCase()) || 
                    coffee.ingredients.some((ingredient) => ingredient.toLowerCase().includes(text.toLowerCase()))
                );
              });

            setFilteredCoffees(filtered)
        }
        else if(text?.length === 0){
            setFilteredCoffees(filteredSearchCoffees)
        }
    }
    return (
        <StyledSidebar {...props}>
            {
                <>
                    <Search placeholder="Search" onChange={e => handleSearch(e.target.value)}/>
                    <Menu items={categories} activeCategoryName={activeCategoryName}/>
                </>
            }
        </StyledSidebar>
    )
}

export default Sidebar;