import React, { useState } from "react";
import "./Courses.css";

function Courses(props) {
    // console.log(props,'Courses');
  const clickHandler = () => {
    const newData = {
      id: props.id,
      title: props.title,
      checked: props.checked,
    };
    props.newSDataHandler(newData);
  };
  return (
    <div onClick={clickHandler} className="courses">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Courses;
