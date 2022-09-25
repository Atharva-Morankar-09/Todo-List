import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    
    const submit = (e)=>{
          e.preventDefault();
          if(!title || !desc)
          {
              alert('Title or Description cannot be empty')
          }
          else
          {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
          }
    }

    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor='title'>Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter title for Todo"/>
        
                </div>
                <div className="form-group">
                    <label htmlFor='desc'>Todo</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="content" placeholder="Enter your Todo here"/>
                </div>
                
                <button type="submit" className="btn btn-sm btn-primary my-3">Submit</button>
            </form>
        </div>
    )
}

