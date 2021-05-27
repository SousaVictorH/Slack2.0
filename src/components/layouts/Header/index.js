import React from 'react';

import {
    Container,
} from './styles';

import LeftSection from './LeftSection';
import MidSection from './MidSection';
import RightSection from './RightSection';

function Header() {
    return(
        <Container>
            <LeftSection />
            <MidSection />
            <RightSection />
        </Container>
    );
}

export default Header;
