import React from 'react'

import {
    Container,
    SideBarInfo,
    FiberManualRecordIcon,
    CreateIcon
} from './styles';

function SideBarHeader() {
    return (
        <Container>
            <SideBarInfo>
                <h2>Channel 1 info</h2>
                <h3>
                    <FiberManualRecordIcon />
                    Sonny Sangha
                </h3>
            </SideBarInfo>
            <CreateIcon />
        </Container>
    )
}

export default SideBarHeader;
