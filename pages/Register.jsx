import React,{useState} from "react";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import './logins.css';
const Register=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const navigate=useNavigate();
    function handleClick(){
        var pass=document.getElementById("password").value;
        var mail=document.getElementById("mail").value;
        var name=document.getElementById("name").value;
        var x=0;
        if(mail.length==0 || name.length==0){
            alert("no null values");
        }
        else if(pass.length<8){
            alert("must be of length 8");
            return false;
        }
        else{
            x=1;
        }
        if(x==1){
        navigate("/home")
        }
    }
    function handleClick1(){
       
        navigate("/")
        
    }
    function validatePassword(){
       
    }
    return(
        <div className='logins'>
        <form className='registerForm'>
        <legend><h1>REGISTER</h1></legend>
            <label>Name</label>
            <input type="text" placeholder="name" value={name} id="name" onChange={(e)=>setName(e.target.value)}></input>
            <label>Email</label>
            <input type="email" placeholder="email" id="mail" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" id="password" placeholder="password-8,UC,LC,num" value={pass} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]) .{8,}" onChange={(e)=>setPass(e.target.value)} required></input><br/>
            <button type="submit"  onClick={handleClick} className="buttons">Register</button>
        </form>
        <button className='linkbtn'  onClick={handleClick1}>Already have an account?Login</button>
       </div>
    );
}
export default Register;