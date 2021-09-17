import { StyledContainer, StyledSidebar, StyledContent } from "./styles"

const PageLayout = ({ sidebar, content }) => {
    return (
        <StyledContainer>
            <StyledSidebar>{sidebar}</StyledSidebar>
            <StyledContent>{content}</StyledContent>
        </StyledContainer>
    )
}

export default PageLayout;