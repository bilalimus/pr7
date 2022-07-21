
import './App.css';
import Courses from './components/Courses';
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
  return (
    <div className="App">
      <div className='container-courses'>
        {data.map((element) => {
        return (
        <Courses
          key={element.id}
          title={element.title}
          checked={element.checked}
          />)
        })}
      </div>
      <div className='container-selected'>
        <SelectedCourses />
      </div>
    </div>
  );
}

export default App;
