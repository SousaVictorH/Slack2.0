import React, { useState } from 'react';

import { Container } from './styles';
import { Button } from '@material-ui/core';

import firebase from 'firebase';
import { db } from '../../../../../firebase';

function ChatInput ({
    channelName,
    channelId,
    scrollBottom
}) {
    const [input, setInput] = useState('');

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Vh',
            userImage: ''
        });

        scrollBottom();

        setInput('');
    };

    return(
        <Container>
            <form>
                <input
                    type="text"
                    placeholder={`Message #${channelName}`}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </Container>
    );
}

export default ChatInput;
