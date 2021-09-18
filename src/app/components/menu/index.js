import NavLink from "../../shared/navlink";
import { useHistory } from "react-router"
import { StyledMenu } from "./styles";

const Menu = ({items, ...props}) => {
    const history = useHistory();
    return (
        <StyledMenu {...props}>
            {items?.map((item, index) => (<NavLink key={index} active={item.toLowerCase() === props.activeCategoryName} onClick={() => history.push('/c/' + item.toLowerCase())} label={item} />))}
        </StyledMenu>
    )
}

export default Menu;