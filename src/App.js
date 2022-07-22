
import './App.css';
import Courses from './components/Courses';
import { useState } from 'react';
import SelectedCourses from './components/SelectedCourses';



 

function App() {
  const [data, setData] = useState([
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
   ])
  const [sData, setSData] = useState(data)
  
  
  
  const newSDataHandler = (id) => {
    setData((preventValue) => {
      return preventValue.map((el) => {
        if(el.id === id){
          return {...el, checked: true}
        }return el
      })
    }) 
    }
  return (
    <div className="App">
      <div className='container-courses'>
        {data.map((element, index) => {
        return (
        <Courses
          index={index}
          newSDataHandler={newSDataHandler}
          key={element.id}
          id={element.id}
          title={element.title}
          checked={element.checked}
          />)
        })}
      </div>
      <div className='container-selected'>
        {data.map((el) => {
          if(el.checked){
          return (<SelectedCourses 
          key={el.id}
          id={el.id}
          title={el.title}
          checked={el.checked}
          />)}
        })}
      </div>
    </div>
  );
}

export default App;
