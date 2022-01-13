import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropdownUL = styled.ul`
    position: absolute;
    top: 8rem;
    left: -0rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    background: #222;
`;

export const DropdownLink = styled(Link)`
    font-size: 1.2rem;
    padding: 1rem;
    color: #fff;
    letter-spacing: .1rem;
    &:hover{
        color: red;
    }
`;

export const NavSpanDropdown = styled.span`
    font-size: 1.2rem;
    padding: 1rem;
    color: #fff;
    letter-spacing: .1rem;
    &:hover{
        color: red;
    }
`;