import React,{useState} from "react";
import Navigation from "../components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import './logins.css';
const Login=()=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const navigate=useNavigate();
    function handleClick(){
        var pass=document.getElementById("password").value;
        var mail=document.getElementById("mail").value;
        var x=0;
        if(mail.length==0){
            alert("no null values");
        }
        else if(pass.length<8){
            alert("the password must be of min length 8 with uppercase,lowercase and numbers");
        }
        else{
            x=1;
        }
        if(x==1){
        navigate("/home")
        }
    }
    function handleClick1(){
        navigate("/register")
    }
    return(
        <div className='logins'>
            <form className='loginForm' >
                <legend><h1>LOGIN</h1></legend>
                <label>Email</label>
                <input type="email" id="mail" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" id="password" placeholder="password-8,UC,LC,num" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]) .{8,}"  value={pass} onChange={(e)=>setPass(e.target.value)}></input><br/>
            <button onClick={handleClick} className="buttons">Login</button>
            </form>
        <button onClick={handleClick1} className='linkbtn'>Don't have an account? Register</button>
       </div>
    );
}
export default Login;