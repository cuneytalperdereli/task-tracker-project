import React, { useEffect, useState } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import TaskList from '../components/TaskList'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Home = () => {
    const [isOpen,setIsOpen] =useState(false)
    const [text,setText]=useState("Show Task Bar")
    const [task,setTask]=useState()
    const url = "https://637cbbc172f3ce38eaabf146.mockapi.io/tasks"

    const toggle = (e)=>{
        setIsOpen(!isOpen)
        const buttonText=isOpen ? "Show Task Bar" :"Hide Task Bar"
        setText(buttonText)
    }

    // CRUD - READ 
    const getTask= async()=>{
       try {
        const {data} = await axios(url)
        setTask(data);
        console.log(data);
       } catch (error) {
        console.log("error found")
       }
    }
    useEffect(()=>{
        getTask()
    },[])
  return (
    <div className=' m-2 d-flex justify-content-center flex-column'>

       <Header/>
       <Button size='lg' variant='danger'onClick={(e)=>{toggle()}}>
        {text} 
       </Button>
       {isOpen && <AddTask getTask={getTask}/>}
        
        
        <TaskList getTask={getTask} task={task}/>
    </div>
  )
}

export default Home