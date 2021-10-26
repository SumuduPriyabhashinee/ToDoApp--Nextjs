import { Navbar,Nav,Container } from 'react-bootstrap';
import navStyles from '../styles/Nav.module.css'
import Image from 'next/image'

const Navb = () =>{

  const clickHome = () => {
    window.location.href = `/`;
  }

  const clickToDoList = () => {
  window.location.href = `/todolist`;
  }

  const clickNew = () => {
    window.location.href = `/newtodo`;
  }

      return (
        <Navbar bg="dark" variant="dark">
      <div className="col-2">
      <Image src="/logo.png" alt="Logo" width={72} height={72} />
        </div>
        <div className="col-3">
        <div className={navStyles.t1}>To Do App</div>
        </div>
        <div class="col-1">
        </div>
        <div className="col-6">
    <button type="button" className="btn btn-outline-warning " onClick={clickHome}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" className="btn btn-outline-warning " onClick={clickToDoList}>To Do List</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" className="btn btn-outline-warning " onClick={clickNew}>Add New</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    </Navbar>
      );

      }

export default Navb;