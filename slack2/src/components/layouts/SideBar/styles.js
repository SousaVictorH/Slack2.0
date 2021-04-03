import styled from 'styled-components';

export const Container = styled.div`
    color: var(--white);
    background-color: var(--slack-color);

    flex: .3;
    border-top: 1px solid var(--secondary);
    margin-top: 62px;
    max-width: 260px;

    > hr {
        margin: 10px 0;
        border: 1px solid var(--secondary);
    }
`;
