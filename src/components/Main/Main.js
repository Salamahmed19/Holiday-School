import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Courses from '../Courses/Courses';
import FutureCourse from '../FutureCourse/FutureCourse';
import Home from '../Home/Home';
import OurStory from '../OurStory/OurStory';
import AboutUs from '../AboutUs/AboutUs';
import NotFound from '../NotFound/NotFound'

const Main = () => {
    
    const [course, setCourse] = useState([]);
    useEffect(()=>{
        fetch("./fakeDb.JSON")
        .then( res => res.json())
        .then( data => setCourse(data));
    },[])
    return (
        <div>
            
            <Switch>
            <Route exact path="/">
                <Home course={course}></Home>
            </Route>
            <Route path="/Home">
                <Home course={course}></Home>
            </Route>
            <Route path="/Courses">
                <Courses course={course}></Courses>
            </Route>
            <Route path="/OurStory">
                <OurStory></OurStory>
            </Route>
            <Route path="/FutureCourse">
                <FutureCourse course={course}></FutureCourse>
            </Route>
            <Route path="/AboutUs">
                <AboutUs></AboutUs>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
            </Switch>
        </div>
    );
};

export default Main;