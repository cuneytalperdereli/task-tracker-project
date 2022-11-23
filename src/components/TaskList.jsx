import axios from 'axios';
import React from 'react'
import { AiFillDelete } from "react-icons/ai";
const TaskList = ({task,getTask}) => {
    const handleDelete =async(id)=>{
        const url = "https://637cbbc172f3ce38eaabf146.mockapi.io/tasks"
        try {
            await axios.delete(`${url}/${id}`);
            
        } catch (error) {
            console.log(error)
        }
     getTask()
    }
  return (
    <div>
        {task?.map((item)=>{
            const {id,task,date}=item;
            return(
                <div key={id} className='mt-2 d-flex justify-content-between bg-secondary rounded-3 p-2'>
                    <div>
                        <h4>{task}</h4>
                        <p>{date}</p>
                    </div>
                    <div>
                        <AiFillDelete onClick={()=>handleDelete(id)}
                        style={{
                            marginRight:"20px",
                            marginTop:"10px",
                            boxShadow:"2px 2px 2px #ECAB9E",
                        }} size={30}
                        type="button"/>
                    </div>
                </div>
            )

        })}

    </div> 
  )
}

export default TaskList