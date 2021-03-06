import React from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = (props) => {
    // using map and slice to load data own choices
    const {course}=props;
    return (
        <Row>
            {
            course?.slice(0, 12).map(course => <Course course={course} key={course.id}></Course>)
            }
        </Row>
    );
};

export default Courses;