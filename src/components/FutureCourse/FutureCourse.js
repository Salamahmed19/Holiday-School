import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const FutureCourse = (props) => {
    const {course} =props;
    return (
        <Row>
            {
            course?.slice(-4).map(course => 
                <Col className="mt-3">  
                    <Card className="shadow-lg rounded" style={{ width: '18rem', height: '500px', padding:'15px' }}>
                        <Card.Img variant="top" src={course.img} className="h-50" />
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>{course.dec}</Card.Text>
                            <Card.Text>Douration: {course.douration}. Price: {course.price}</Card.Text>
                            <Card.Text>Course Start: {course.courseStart}</Card.Text>
                        </Card.Body>
                    </Card>  
                </Col>)
            }
        </Row>
    );
};

export default FutureCourse;