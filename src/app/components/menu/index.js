import NavLink from "../../shared/navlink";
import { useHistory } from "react-router"
import { StyledMenu } from "./styles";

const Menu = ({items, active, ...props}) => {
    const history = useHistory();
    return (
        <StyledMenu {...props}>
            {items?.map((item, index) => (<NavLink key={index} active={active} onClick={() => history.push('/c/' + item)} label={item} />))}
        </StyledMenu>
    )
}

export default Menu;