import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// using same data to make defferent look of course home page
const Home = (props) => {
    const {course} =props;
    return (
        <div className="bg-light">
            <h1>Welcome to HOLIDAY! Online School</h1>
            <p>Millions of people are following us to make them professional and productive. Here we teach you and your children with our special tutors in best learning ways.</p>
            <h2 className="mt-5">Have a look our courses</h2>
            <Row>
                {
                course?.slice(6, 14).map(course => 
                    <Col className="mt-3"  key={course.id}>  
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
        </div>
    );
};

export default Home;