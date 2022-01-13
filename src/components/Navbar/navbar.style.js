import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavToggler = styled.div`
    position: absolute;
    display: block;
    color: ${({ navbar }) => (navbar ? "#fff" : "#000")};
    top: 3rem;
    left: 2rem;
    font-size: 1.8rem;
    transition: .25 ease-out;
    z-index: 2000;
    &:hover {
        cursor: pointer;
        color: red;
    }
    @media screen and (min-width: 717px){
        display: none;
    }
`;

export const Nav = styled.nav`
    position: fixed;
    top: ${({ navbar }) => (navbar ? "0" : "-100vh")};
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 //   background: #222;
    background: #fff;
    transition: .4s ease-out;
    @media screen and (min-width: 516px){
        top: 0;
        height: 8rem;
    }
`;

export const NavUL = styled.ul`
    height: 100%;
    width: 100%;
    max-width: 116rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5vh 3rem; 
    @media screen and (min-width: 516px){
        margin-top: 0;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem; 
    }
`;

export const SideSection = styled.div`
    height: 100%;
    width: 36rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (min-width: 516px){
        margin-top: 0;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem; 
    }
`;

export const NavLink = styled(Link)`
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    color: #222;
    padding: 1rem 2rem;
    &:hover{
        color: #999;
    }
    &.active{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background: #222;
    }
    @media screen and (min-width: 516px){
        padding: 0 1rem;
    }
`;

export const NavSpan = styled.span`
    position: relative;
    font-size: 1.2rem;
    letter-spacing: .1rem;
    text-transform: uppercase;
    color: #222;
    padding: 1rem 2rem;
    &:hover{
        cursor: pointer;
        color: #999;
    }
    &.active{
        height: 100%;
        color: #fff;
        background: #222;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 516px){
        padding: 0 1rem;
    }
`;

export const LogoWrapper = styled.div`
    height: 78%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /*
    border-radius: .4rem;
    padding: 0 1rem;
    box-shadow: 0px .4rem .8rem rgba(149, 157, 165, 0.2);
    */
    padding: 0 1rem;
    border-radius: .4rem;
    transition: none.25 ease-out;
    &:hover{
        cursor: pointer;
        color: #999;        
    }
    &:active{
        background: #222;
        color: #fff;
    }
`;

export const Logo = styled(Link)`
    text-transform: uppercase;
    font-size: clamp(2rem, 3vw, 2.4rem);
    font-family: 'altaregular';
    letter-spacing: .5rem;
    color: #222;
`;

export const LogoCrown = styled.img`
    height: 2rem;
`;

export const SideIcons = styled.div`
    position: relative;
    color: #222;
    font-size: 1.4rem;
    &:hover{
        cursor: pointer;
    }
`;

