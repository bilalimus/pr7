import "./Courses.css";
const falseStyle = {
    width: "200px",
    height: "150px",
    backgroundColor: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
}

const TrueStyle = {
  width: "200px",
  height: "150px",
  backgroundColor: "grey",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px auto",
}

function Courses(props) {
    // console.log(props,'Courses');
  const clickHandler = () => {
    
    props.newSDataHandler(props.id);
  };
  return (
    <div onClick={clickHandler} style={props.checked ? TrueStyle : falseStyle}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Courses;
