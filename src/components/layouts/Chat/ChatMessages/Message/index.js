import React from 'react';

import { Container, MessageInfo, AlternativeContainer, AlternativeUserImage } from './styles';

function Message({
    message,
    timestamp,
    user,
    userImage
}) {
    return(
        <Container>
            {userImage ? 
            <img src={userImage} alt=""/> :
            <AlternativeContainer>
                <AlternativeUserImage />
            </AlternativeContainer>}
            <MessageInfo>
                <h4>
                    {user}
                    <span>
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>
                    {message}
                </p>
            </MessageInfo>
        </Container>
    );
}

export default Message;
