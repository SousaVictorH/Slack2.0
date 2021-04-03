import styled from 'styled-components';

import Person from '@material-ui/icons/Person';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
    }
`;

export const MessageInfo = styled.div`
    margin-left: 10px;

    > h4 > span {
        color: var(--gray);
        font-weight: 300;
        margin-left: 8px;
        font-size: 10px;
    }
`;

export const AlternativeContainer = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 8px;

    align-items: center;
    justify-content: center;

    background-color: var(--light-gray);
`;

export const AlternativeUserImage = styled(Person)`
    color: var(--white);
`;
