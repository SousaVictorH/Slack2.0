import React from 'react';

import { Container, BorderOutline } from './styles';

function LeftChatHeader ({
    channelName
}) {
    return(
        <Container>
            <h4><strong>#{channelName}</strong></h4>
            <BorderOutline />
        </Container>
    );
}

export default LeftChatHeader;
