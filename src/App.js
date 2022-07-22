
import './App.css';
import Courses from './components/Courses';
import { useState } from 'react';
import SelectedCourses from './components/SelectedCourses';


const data = [
  {
    id: 'el1',
    title: 'NextJS',
    checked: false,
  },
  {
    id: 'el2',
    title: 'ReactJs',
    checked: false,
  },
  {
    id: 'el3',
    title: 'JS',
    checked: false,
  },
 ]
 

function App() {
  const [sData, setSData] = useState([])
  
  const newSDataHandler = (newData) => {
    // console.log(newData);
    setSData([...sData, newData])
  }
  return (
    <div className="App">
      <div className='container-courses'>
        {data.map((element) => {
        return (
        <Courses
          newSDataHandler={newSDataHandler}
          key={element.id}
          id={element.id}
          title={element.title}
          checked={element.checked}
          />)
        })}
      </div>
      <div className='container-selected'>
        {sData.map((el) => {
          return (<SelectedCourses 
          key={el.id}
          id={el.id}
          title={el.title}
          checked={el.checked}
          />)
        })}
      </div>
    </div>
  );
}

export default App;
