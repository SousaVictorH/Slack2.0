import styled from 'styled-components';

import { Avatar as _Avatar } from '@material-ui/core';

import AccessTimeIcon from '@material-ui/icons/AccessTime';

export const Container = styled.div`
    display: flex;
    flex: .3;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
`;

export const Avatar = styled(_Avatar)`
    display: flex;
`;

export const AccessTime = styled(AccessTimeIcon)`
    color: var(--white);
    cursor: pointer;

    transition: all .3s;

    :hover {
        opacity: .8;
    }
`;