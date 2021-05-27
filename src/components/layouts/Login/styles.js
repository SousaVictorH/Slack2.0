import styled from 'styled-components';

export const Container = styled.div`
    background-color: --ghost-white;
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: var(--white);
    border-radius: 10px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, .12),
     0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > h1 {
        
    }

    > p {

    }

    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: var(--green);
        color: white;
    }
`;
