import React from 'react';
import './SelectedCourses.css'

function SelectedCourses(props) {
    return (
        <div className='selected-courses'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default SelectedCourses;