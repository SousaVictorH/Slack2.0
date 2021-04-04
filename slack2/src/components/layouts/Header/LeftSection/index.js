import React from 'react';

import {
    Container,
    Avatar,
    AccessTime
} from './styles';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../../firebase';

function LeftSection() {
    const [user] = useAuthState(auth);

    const handleClick = () => {
        auth.signOut();
    };

    return(
        <Container>
            <Avatar 
                src={user?.photoURL} 
                alt={user?.displayName}
                onClick={handleClick}
            />
            <AccessTime />
        </Container>
    );
}

export default LeftSection;
