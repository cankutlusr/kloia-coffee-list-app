import styled from 'styled-components';

const StyledNavLink = styled.div`
    color:${(props) => props.active ? '#0371bc' : '#000'};
    font-weight:${(props) => props.active ? 'bold' : 'normal'};
    cursor:pointer;
    margin-top:12px;

    &:hover {
        color: #DCDCDC;
    };
    
    @media only screen and (max-width: 768px) {
       padding-left: 4vw;
    }
`

export default StyledNavLink;