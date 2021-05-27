import styled from 'styled-components';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export const Container = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
`;

export const InfoOutline = styled(InfoOutlinedIcon)`
    margin-right: 5px !important;
    font-size: 18px;
`;
