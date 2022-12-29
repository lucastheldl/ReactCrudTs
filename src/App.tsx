import React,{useState,useEffect} from 'react';
import './App.css';
//css
import styles from "./App.module.css"

//components
import Footer from './components/footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//interfaces
import { ITask } from './interfaces/Task';

function App() {

  const [taskList,setTasksList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) =>{
    setTasksList(
      taskList.filter(task =>{
        return task.id !== id;
      })
    )
  }
  const hideOrShowModal = (display:boolean) =>{
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide")
    }else{
      modal!.classList.add("hide")
    }

  }
  const editTask = (task:ITask):void =>{
    hideOrShowModal(true)
    setTaskToUpdate(task);

  }
  const updateTask = (id:number,title:string,dificult:number) =>{
    const updatedTask:ITask = {id,title,dificult}

    const updatedItems = taskList.map((task)=>{
      return task.id === updatedTask.id ? updatedTask : task; 
    })

    setTasksList (updatedItems);

    hideOrShowModal(false);

  }

  return (
    <div className="App">
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />}/>
      <Header/>
      
      <main className={styles.main}>
        <div>
        <h2>Oque você vai fazer?</h2>
      <TaskForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTasksList}/>
      </div>

      <div>
        <h2>Tarefas:</h2>
        <TaskList taskList={taskList} handleDelete ={deleteTask} handleEdit={editTask}/>
      </div></main>
      
      <Footer/>
    </div>
  );
}

export default App;
