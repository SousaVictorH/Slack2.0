import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: .9;
        background-color: var(--tertiary);
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

export const Channel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

    text-align: center;

    > span {
        font-weight: 400;
        font-size: 16px;
    }
`;
