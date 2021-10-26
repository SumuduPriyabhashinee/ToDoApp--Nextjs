import Head from 'next/head'
import Navb from './Nav'

const ToDoApp = ({children}) =>{
    return(
<div>
    <Navb/>
    <h1>ToDoList</h1>
    <main>{children}</main>
</div>
    )
}

export default ToDoApp;
