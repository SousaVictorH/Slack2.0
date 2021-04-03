import React from 'react'

import { Container, Channel } from './styles';
import { db } from '../../../../firebase';

function SideBarOption({
    Icon,
    title,
    addChannelOption,
    id
}) {

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name!');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    };

    const selectChannel = () => {

    };

    return (
        <Container onClick={addChannelOption ? addChannel : selectChannel}>
            { Icon && <Icon fontSize='small' style={{padding: 10}}/> }
            { Icon ? (
                <h3>{title}</h3>
            ) : (
                <Channel>
                    <span>#</span> {title}
                </Channel>
            ) }
        </Container>
    )
}

export default SideBarOption;
