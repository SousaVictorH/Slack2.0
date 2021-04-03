import React from 'react';

import SideBar from '../SideBar';
import Chat from '../Chat';

import { Container } from './styles';

function AppBody() {
    return(
        <Container>
            <SideBar />
            <Chat />
        </Container>
    );
}

export default AppBody;