import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'
//css
import styles from "./TaskForm.module.css"

//interfaces
import { ITask } from '../interfaces/Task';

type Props = {
  btnText : string;
  taskList : ITask[];
  task?:ITask | null;
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  handleUpdate?(id:number,title:string,dificult:number): void;
}

const TaskForm = ({btnText,taskList,task,setTaskList,handleUpdate}: Props) => {


  const [id,setId] = useState<number>(0);
  const [title,setTitle] = useState<string>("");
  const [dificult,setDificult] = useState<number>(0);


  useEffect(() =>{
    if(task){
      setId(task.id);
      setTitle(task.title);
      setDificult(task.dificult);
      
    }

  },[task])

  const addTaskHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleUpdate){
       handleUpdate(id,title,dificult)
      
    }else{
      const id = Math.floor(Math.random() * 1000)

      const newTask : ITask = { id, title, dificult,}
    
      setTaskList!([...taskList, newTask]);

      setTitle("")
      setDificult(0)

    }
    
  }
  const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title"){
      setTitle(e.target.value);

    }
    else {
      setDificult(parseInt(e.target.value));
    }
  }
  

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" placeholder='Escolha um título...' name='title' onChange={changeHandler} value={title}/>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="dificult">Dificuldade:</label>
        <input type="text" placeholder='Dificuldade da tarefa' name='dificult' onChange={changeHandler} value={dificult}/>
      </div>
      <input type="submit" value={btnText}/>
    </form>
  )
}

export default TaskForm