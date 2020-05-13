import React, { Component } from 'react';
import {Jumbotron,Button} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <>
                <Jumbotron>
                <h1>Welcome To Avi.io</h1>
                <p>You would learn Web development on my Page.</p>
                <Button>Know more</Button>
                </Jumbotron>
            </>
        );
    }
}

export default Home;