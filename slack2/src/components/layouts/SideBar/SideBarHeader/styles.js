import styled from 'styled-components';

import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

import Create from '@material-ui/icons/Create';

export const Container = styled.div`
    display: flex;
    border-bottom: 1px solid var(--secondary);
    padding: 13px;
`;

export const SideBarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
`;

export const FiberManualRecordIcon = styled(FiberManualRecord)`
    color: var(--green);
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
`;

export const CreateIcon = styled(Create)`
    padding: 8px;
    color: var(--secondary);
    font-size: 18px;
    background-color: var(--white);
    border-radius: 50%;
`;
