import React,{useEffect} from 'react'
import PageLayout from "../../shared/page-layout/index";
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import {useCoffees} from '../../context/coffees' 

const Coffees = (props) => {
    const {coffees,filteredCoffees,setFilteredCoffees,filteredSearchCoffees,setFilteredSearchCoffees,setActiveCategoryName} = useCoffees();
    useEffect(() => {
        if(props.match.params.category && props.match.params.category !== "all coffees"){
            const filtered = filteredCoffees.filter(coffee => coffee.category === props.match.params.category)
            setFilteredCoffees(filtered)
            setFilteredSearchCoffees(filtered);
            setActiveCategoryName(props.match.params.category)
        }
        else{
            setFilteredCoffees(coffees)
            setFilteredSearchCoffees(coffees);
            setActiveCategoryName('all coffees');
        }
    },[])

    useEffect(() => {
        if(props.match.params.category && props.match.params.category !== "all coffees"){
            const filtered = coffees.filter(coffee => coffee.category === props.match.params.category)
            setFilteredCoffees(filtered)
            setFilteredSearchCoffees(filtered);
            setActiveCategoryName(props.match.params.category)
        }
        else{
            setFilteredSearchCoffees(coffees);
            setFilteredCoffees(coffees);
            setActiveCategoryName('all coffees');
        }
    },[props.match.params.category])

    return (
        <PageLayout 
            sidebar={<Sidebar/>} 
            content={
                <>
                {filteredCoffees?.map((coffee,index) => <Content key={index} header={coffee.title} description={coffee.description} ingredients={`Ingredients: ${coffee.ingredients.join(", ")}`}  /> )}
                {filteredCoffees.length === 0 && <div>No Coffee Found :`(`</div>}
                </>
            }
        />
    )
}

export default Coffees;