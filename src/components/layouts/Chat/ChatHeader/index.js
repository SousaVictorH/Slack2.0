import React from 'react';

import { Container } from './styles';

import LeftChatHeader from './LeftChatHeader';
import RightChatHeader from './RightChatHeader';

function ChatHeader ({
    channelName
}) {
    return(
        <Container>
            <LeftChatHeader channelName={channelName} />
            <RightChatHeader />
        </Container>
    );
}

export default ChatHeader;
