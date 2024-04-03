import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import './App.css';
import Sample from './components/Sample';
import NavBar from './components/NavBar';
import Greeting from './components/Greeting';
import Mainlayout from './layout/Mainlayout';

function App() {
    const saygoodbye = " See you next time !";
    const number = 15;
    const num = 18; 
    const name = 'Naomi';

    const [nam, setName] = useState ("");
    const [students, setStudents] = useState(['Naomi', 'Schella', 'Bella']);
    

    const handleSubmit = (event) => {
      event.preventDefault();
      alert("My name is " + nam);
      setStudents(currentStudents => [...currentStudents, nam] );
      setName('');
    }
  return (
    <div className='App'>
    <NavBar></NavBar>
    <HelloWorld numberprops ={num} name = {name}/>
    <div>{saygoodbye} {number + number }</div>
    <div className='sample-css'>Hello App CSS </div>


    <Sample></Sample>


    <br></br>

    <Greeting></Greeting>

    <br></br>
    <br></br>

    <form onSubmit={handleSubmit}>
      <div>Add a new student</div>
      <div>What is your name?</div>
        <input type="text" value={nam} onChange={(e)=> setName(e.target.value)}/>
        <input type="submit" />
    </form>

    <br></br>
    <h1 className='text-x6'>All Students</h1>
    <ul>
      {
        students.map((student, index ) => <li key = {index}>{student}</li>)
      }
    </ul>

    </div>
  );
}

export default App;
