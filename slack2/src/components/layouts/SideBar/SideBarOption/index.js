import React from 'react'

import { Container, Channel } from './styles';
import { db } from '../../../../firebase';

import { enterRoom } from '../../../../features/appSlice';

import { useDispatch } from 'react-redux';

function SideBarOption({
    Icon,
    title,
    addChannelOption,
    id
}) {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name!');

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            });
        }
    };

    const selectChannel = () => {
        if (id) {
            dispatch(
                enterRoom({
                roomId: id,
            }));
        }
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
