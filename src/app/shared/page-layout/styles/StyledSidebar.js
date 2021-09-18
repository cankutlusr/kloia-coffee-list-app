import styled from 'styled-components';

const StyledSidebar = styled.div`
    height:100vh;
    width: 30vw;
    display: flex;
    justify-content: center;
    padding-top: 3vw;
    padding-right: 0.2vw;
    padding-left: 0.5vw;
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width: 768px) {
        padding-top: 5vw;
        height:auto;
        width: auto;
    }
`

export default StyledSidebar;