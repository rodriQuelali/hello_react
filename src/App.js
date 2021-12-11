

import './App.css';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const tasks = ["Estudiar calculo", "Estudiar Progra", "haver tesis"];
  const [showTasks, setShowTasks] = useState(false);


  const handleOnShow = () =>{
    setShowTasks(!showTasks);
  }
  return (
    <div className="App" key>
      <header className="App-header">
        <h1>TODO list</h1>
        <button onClick = {handleOnShow}>Show</button>
        {
          showTasks && <TaskList tasks={tasks}/>
        }
      </header>
    </div>
  );
}

export default App;
