import React from 'react';

import {
    Container,
    Search,
    Input
} from './styles';

function MidSection() {
    return(
        <Container>
            <Search />
            <Input placeholder="Search something" />
        </Container>
    );
}

export default MidSection;
