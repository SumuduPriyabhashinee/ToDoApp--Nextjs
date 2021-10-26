import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoList from '../components/todolist';

export default function Home({todolist}) {
  console.log(todolist)
  return (
    <div className={styles.container}>
      <Head>
        <title>To Do App</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <h1>This is index</h1>

      <ToDoList todolist={todolist}/>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}

export const getStaticProps=async()=>{
  const res=await fetch('https://60a21a08745cd70017576014.mockapi.io/api/v1/todo')
  const todolist =await res.json();

  return{
      props:{
          todolist
      }
  }
} 
