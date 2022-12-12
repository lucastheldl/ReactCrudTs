import React,{useState,useEffect} from 'react';
import './App.css';
//css
import styles from "./App.module.css"

//components
import Footer from './components/footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

//interfaces
import { ITask } from './interfaces/Task';

function App() {

  const [taskList,setTasksList] = useState<ITask[]>([]);


  return (
    <div className="App">
      <Header/>
      
      <main className={styles.main}>
        <div>
        <h2>Oque você vai fazer?</h2>
      <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTasksList}/>
      </div>

      <div>
        <h2>Tarefas:</h2>
        <TaskList taskList={taskList}/>
      </div></main>
      
      <Footer/>
    </div>
  );
}

export default App;
