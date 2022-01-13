import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: clamp(2rem, 16vw, 14rem);
    font-family: 'montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: clamp(.1rem, 2vw, .5rem);
    text-align: center;
`;