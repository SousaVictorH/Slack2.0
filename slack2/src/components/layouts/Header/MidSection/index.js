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
            <Input placeholder="teste" />
        </Container>
    );
}

export default MidSection;
