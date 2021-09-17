import { StyledItemContainer, StyledItemDescription, StyledItemHeader, StyledItemIngredients } from "./styles";

const Content = ({header, description, ingredients, ...rest}) => {
    return (
        <StyledItemContainer {...rest}>
            <StyledItemHeader>{title}</StyledItemHeader>
            <StyledItemDescription>{description}</StyledItemDescription>
            <StyledItemIngredients>{ingredients}</StyledItemIngredients>
        </StyledItemContainer>
    )
}

export default Content;