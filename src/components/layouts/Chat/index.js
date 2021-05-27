import React from 'react'

import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';

import { Container } from './styles';

import { useSelector } from 'react-redux';
import { useDocument, useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../../firebase';

function Chat() {
    const roomId = useSelector(state => state.counter.roomId);

    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );

    const [roomMessages] = useCollection(
        roomId &&
        db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
    );

    const channelName = roomDetails?.data().name;

    return (
        <Container>
            {roomDetails && roomMessages && (
                <>
                    <ChatHeader 
                        channelName={channelName}
                    />
                    <ChatMessages 
                        roomId={roomId} 
                        roomMessages={roomMessages}
                        channelName={channelName}
                    />
                </>
            )}
        </Container>
    )
}


export default Chat;
