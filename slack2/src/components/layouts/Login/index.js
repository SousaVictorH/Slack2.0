import React from 'react'

import { Button  } from '@material-ui/core';

import { Container, LoginInnerContainer } from './styles';

import { auth, provider } from '../../../firebase';

function Login() {
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithPopup(provider).catch(err => {
            console.warn(err.message);
        });
    }

    return (
        <Container>
            <LoginInnerContainer>
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" 
                    alt="Slack"
                />

                <h1>Sign in to Slack</h1>
                <p>Slack.com</p>

                <Button onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </Container>
    );
}

export default Login;
