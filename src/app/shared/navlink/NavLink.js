import { StyledNavLink } from "./styles";

const NavLink = ({children, ...rest}) => <StyledNavLink {...rest}>{children}</StyledNavLink>

export default NavLink;