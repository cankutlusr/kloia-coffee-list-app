import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-right: 10vw;
    padding-left: 10vw;
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export default StyledContainer;