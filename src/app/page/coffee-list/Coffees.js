import React,{useEffect} from 'react'
import PageLayout from "../../shared/page-layout/index";
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import {useCoffees} from '../../context/coffees' 
import CoffeeLogo from '../../../assets/images/coffee.png'

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

    const container = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      };

    const image = {
        height:300,
        width: 300,
    };

    const h1 = {
        marginLeft: 20,
        fontSize: 200,
        fontFamily: 'Exo'
    }
    return (
        <PageLayout 
            sidebar={<Sidebar/>} 
            content={
                <>
                {filteredCoffees?.map((coffee,index) => <Content key={index} header={coffee.title} description={coffee.description} ingredients={`Ingredients: ${coffee.ingredients.join(", ")}`}  /> )}
                {filteredCoffees.length === 0 && <div style={container}><h1 style={h1}>No Coffee Found!</h1><img style={image} src={CoffeeLogo} /></div>}
                </>
            }
        />
    )
}

export default Coffees;