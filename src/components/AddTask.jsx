import axios from 'axios'
import React, { useState } from 'react'

const AddTask = ({getTask}) => {
    
    const [task,setTask]=useState("")
    const [date,setDate]=useState("")
    const url = "https://637cbbc172f3ce38eaabf146.mockapi.io/tasks"
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        const newTask= {task,date}
        console.log("task geldi mi",task)
        console.log("date geldi mi",date)
        addNewTask(newTask)
    }
    const addNewTask =async(newTask)=>{
        try {
           await axios.post(url,newTask)
            
        } catch (error) {
            console.log("Error var dostum");
        }
        getTask();
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="taskexample1">Task</label>
          <input type="text" className="form-control" id="taskexample1" aria-describedby="emailHelp" placeholder="Enter task" 
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          required />
        
        </div>
        <div className="form-group">
          <label htmlFor="exampleDate">Date</label>
          <input type="date" className="form-control" id="exampleDate" placeholder="Date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
          required />
        </div>
         
         <div className='text-center'>
        <button  type="submit" className="btn btn-primary mt-1 w-25 ">SAVE</button>
        </div>
      </form>


    </div>
  )
}

export default AddTask