import { StyledNavLink } from "./styles";

const NavLink = ({children, ...props}) => <StyledNavLink {...props}>{children}</StyledNavLink>

export default NavLink;