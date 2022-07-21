import React from 'react';
import './Courses.css'

function Courses(props) {
    const clickHandler = (e) => {
        console.log(e);
    }
    return (
        <div onClick={clickHandler} className="courses">
            <h1>{props.title}</h1>
        </div>
);
}

export default Courses;