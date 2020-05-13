import React, { Component } from 'react';
import {Button,Card,Container,Row,Col,Form} from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col>
                    <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1587614380281-2824400605b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                    
                    </Col>
                    <Col>

                    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

                    
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default About;