import React, { useRef, useEffect } from 'react';

import ChatInput from './ChatInput';
import Message from './Message';

import { Container, ChatBottom } from './styles';

function ChatMessages ({
    channelName,
    roomId,
    roomMessages
}) {
    const chatRef = useRef(null);

    useEffect(() => {
        scrollBottom();
    }, [roomId]);

    const scrollBottom = () => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return(
        <Container>
            {roomMessages?.docs.map(doc => {
                const { 
                    message, 
                    timestamp, 
                    user, 
                    userImage
                } = doc.data();

                return(
                    <Message 
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                );
            })}

            <ChatBottom ref={chatRef} />

            <ChatInput 
                scrollBottom={scrollBottom}
                channelName={channelName}
                channelId={roomId}
            />
        </Container>
    );
}

export default ChatMessages;
