import styled from 'styled-components';

const StyledInput = styled.input`
    padding:12px;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    &:focus {
        border-color: #808080;
        outline: none;
    }

    @media only screen and (max-width: 768px) {
        width: 70vw;
    }
`

export default StyledInput;