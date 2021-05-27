import styled from 'styled-components';

import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';

export const Container = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
`;

export const BorderOutline = styled(StarBorderOutlined)`
    margin-left: 20px;
    font-size: 18px;
`;
