import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <h2>About Us</h2>
            <div className="d-flex">
                <div className="p-5 m-5">   
                <h4>Salam Ahmed Team</h4>
                <p>We are super hero from programming-hero. <br /> We can do anything without copy your code.</p>
                <p>Mobile:110011001100</p>
                <p>Email: web@holidayschool.org</p>
                <p>Web: holidayschool.org</p>
                </div>
                <div className="p-5 m-5">
                    <img src="./images/p-hero.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;