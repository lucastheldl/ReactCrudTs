import React,{useState, ChangeEvent, FormEvent, useEffect} from 'react'
//css
import styles from "./TaskForm.module.css"

//interfaces
import { ITask } from '../interfaces/Task';

type Props = {
  btnText : string;
}

const TaskForm = ({btnText}: Props) => {

  //const [tasks,setTasks] = useState<ITask>([]);

  const [id,setId] = useState<number>(0);
  const [title,setTitle] = useState<string>("");
  const [dificult,setDificult] = useState<number>(0);

  const addTaskHandler = () => {
    
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
        <input type="text" placeholder='Escolha um título...' name='title' onChange={changeHandler}/>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="dificult">Dificuldade:</label>
        <input type="text" placeholder='Dificuldade da tarefa' name='dificult' onChange={changeHandler}/>
      </div>
      <input type="submit" value={btnText}/>
    </form>
  )
}

export default TaskForm