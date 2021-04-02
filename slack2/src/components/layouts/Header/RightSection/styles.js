import styled from 'styled-components';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

export const Container = styled.div`
    display: flex;
    flex: .3;
    justify-content: flex-end;
    padding-right: 15px;
`;

export const HelpOutline = styled(HelpOutlineIcon)`
    color: var(--white);
`;
