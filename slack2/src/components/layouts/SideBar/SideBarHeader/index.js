import React from 'react'

import {
    Container,
    SideBarInfo,
    FiberManualRecordIcon,
    CreateIcon
} from './styles';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase';

function SideBarHeader() {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <SideBarInfo>
                <h2>CC's Group</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </SideBarInfo>
            <CreateIcon />
        </Container>
    )
}

export default SideBarHeader;
