import todotaskStyles from '../styles/ToDoTask.module.css'
import Link from 'next/link'

const ToDoTask = ({task}) =>{
    return(
<Link href="/task/[id" as={`/task/${task.id}`}>
    <h1>ToDotASK</h1>
    <h3>{task.title}</h3>
    
</Link>
    )
}

export default ToDoTask;

