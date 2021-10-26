import Head from 'next/head'
import Navb from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoApp = () =>{
    return(
<div>
    <Head>
    <link rel="icon" href="/logo.png" />
    <title>To Do App</title>
    </Head>
    <Navb/>
    <h1>ToDoApp</h1>
</div>
    )
}

export default ToDoApp;
