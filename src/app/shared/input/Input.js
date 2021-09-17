import { StyledInput } from "./styles";

const Input = ({children, ...rest}) => <StyledInput {...rest}>{children}</StyledInput>

export default Input;