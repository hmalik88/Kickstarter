import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header';


export default (props) => {
    return(
        <div>
            <Container>
                <Header/>
                {props.children}
                <h1>I'm a footer</h1>
            </Container>
        </div>
    )
}