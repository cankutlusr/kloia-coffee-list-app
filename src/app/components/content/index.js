import { StyledItemContainer, StyledItemDescription, StyledItemHeader, StyledItemIngredients } from "./styles/index";

const Content = ({header, description, ingredients, ...rest}) => {
    return (
        <StyledItemContainer {...rest}>
            <StyledItemHeader>{header}</StyledItemHeader>
            <StyledItemDescription>{description}</StyledItemDescription>
            <StyledItemIngredients>{ingredients}</StyledItemIngredients>
        </StyledItemContainer>
    )
}

export default Content;