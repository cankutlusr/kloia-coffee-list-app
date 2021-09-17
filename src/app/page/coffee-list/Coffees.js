
import PageLayout from "../../shared/page-layout/index";
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"

const Coffees = () => {
    return (
        <PageLayout 
            sidebar={<Sidebar/>} 
            content={<Content/>}
        />
    )
}

export default Coffees;