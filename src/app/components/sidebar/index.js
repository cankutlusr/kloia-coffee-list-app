
import Menu from "../../components/menu";
import Search from "../../shared/input";
import StyledSidebar from "./styles/index";

const Sidebar = ({...props}) => {
    return (
        <StyledSidebar {...props}>
            {
                <>
                    <Search/>
                    <Menu/>
                </>
            }
        </StyledSidebar>
    )
}

export default Sidebar;