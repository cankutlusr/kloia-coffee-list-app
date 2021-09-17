import { StyledNavLink } from "./styles";

const NavLink = ({label, ...props}) => <StyledNavLink {...props}>{label}</StyledNavLink>

export default NavLink;