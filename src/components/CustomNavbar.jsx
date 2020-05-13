import React, { Component } from 'react';
import {Navbar,Container,NavItem,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class CustomNavbar extends Component {
    render() {
        return (
            <>
            <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">Avi.io</Navbar.Brand>
            <Navbar.Collapse>
            <Nav className='right-side'>
            <Link to='/' className='onelink'>Home</Link>
            <Link to='/About' className='onelink'>About</Link>
            <Link to='/News' className='onelink'>News</Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar> 
            </>
        );
    }
}

export default CustomNavbar;