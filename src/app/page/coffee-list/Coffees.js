
import PageLayout from "../../shared-components/page-layout";
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