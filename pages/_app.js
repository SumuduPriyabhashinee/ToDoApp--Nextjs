import '../components/ToDoApp'
import ToDoApp from '../components/ToDoApp'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <ToDoApp>
    <Component {...pageProps} />
  </ToDoApp>
  )
}

export default MyApp
