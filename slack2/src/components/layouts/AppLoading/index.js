import React from 'react'

import { Container, Content } from './style';

import Spinner from 'react-spinkit';

function AppLoading() {
    return (
        <Container>
            <Content>
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" 
                    alt="Slack"
                />
                <Spinner 
                    name='three-bounce'
                    color='purple'
                />
            </Content>
        </Container>
    )
}

export default AppLoading;
