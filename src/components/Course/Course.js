import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    // destructuring props of course
    const {name, img, dec, douration, price, courseStart}= props.course;
    return (
        <Col className="m-2">  
            <Card className="shadow-lg rounded" style={{ width: '18rem', height: '500px', padding:'15px' }}>
                <Card.Img variant="top" src={img} className="h-50" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{dec}</Card.Text>
                    <Card.Text>Douration: {douration}. Price: {price}</Card.Text>
                    <Card.Text>Course Start: {courseStart}</Card.Text>
                </Card.Body>
            </Card>  
        </Col>
    );
};

export default Course;