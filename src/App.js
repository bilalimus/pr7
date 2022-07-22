
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
  const [sData, setSData] = useState([])
  
  
  
  const newSDataHandler = (newData, index) => {
    if(newData.checked === false){
    data[index].checked = true
    const newArr = data.map((el) => el)
    console.log(newArr);
    setData(newArr)
    setSData([...sData, newData])
    }else{
      data[index].checked = false
      const newArr = data.map((el) => el)
      console.log(newArr);
      const newRemArr = sData.slice(index)
      console.log(newRemArr, index, 'slice');
      setSData(newRemArr)
      setData(newArr)
    }
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
