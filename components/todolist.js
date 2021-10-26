import todolistStyles from '../styles/ToDoList.module.css'
import ToDoTask from './ToDoTask';

const ToDoList = ({todolist}) =>{
    return(
<div>
    <h1>ToDoList</h1>
    {todolist.map((task)=>(
        <div key={task.id}>
        <ToDoTask task={task}/>
      </div>
        
    ))}
</div>
    )
}

export default ToDoList;

