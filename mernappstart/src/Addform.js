import React, { useState } from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Adduser = () => {

const [users, setUsers] = useState({
name:"",
email:"",
password:""

    })
    const {name ,email, password}= users;
    const inputchange = (e) =>{
        console.log(e.target.value)
        setUsers({...users,[e.target.name]:e.target.value})
    }
const onSubmit= async(e)=>{
e.preventDefault();
await axios.post("http://localhost:2000/auth/register",users);

    }
    return (
        <div className='container' >
    <form onSubmit={e =>onSubmit(e)}>
    <label>Name</label>
    <br/>
    <input 
     type="text"
     className="form-control" 
     placeholder="enter email"
     name='email'
     value={email}
     onChange={e => inputchange(e)}  required/>
       <br/>
      
      <label>Email</label>
      <br/>
       <input type="text"
     className="form-control" 
     placeholder="enter name"
     name='name'
     value={name} 
     onChange={e => inputchange(e)}
     required
     />
     <br/>
     <label>password</label>
     <br/>
        <input type="text"
     className="form-control" 
     placeholder="enter password"
     name='password'
     value={password} 
     onChange={e => inputchange(e)}
     required
     />
         <br/>
       <br/>
     <button className='btn btn-danger'>submit</button>
 </form>
        </div>
    );
}

export default Adduser;