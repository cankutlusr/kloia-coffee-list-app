import styled from 'styled-components';

const StyledContent = styled.div`
    margin-right: auto;
    margin-left: auto;
    @media only screen and (max-width: 768px) {
        border-left: none;
        border-top: 1px solid #808080
    }

    @media only screen and (min-width: 768px) {
        width: 100vw;
        border-left: 1px solid #808080;
        border-top: none;
    }
`

export default StyledContent;