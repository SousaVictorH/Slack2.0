import styled from 'styled-components';

import SearchIcon from '@material-ui/icons/Search';

export const Container = styled.div`
    display: flex;
    flex: .4;

    margin-left: 50px;

    border-radius: 6px;
    border: 1px solid var(--gray);
    background-color: var(--primary);

    text-align: center;
    padding: 0 50px;

    color: var(--gray);
`;

export const Search = styled(SearchIcon)`
    color: var(--gray);
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: var(--white);
    width: 90%:
`;
