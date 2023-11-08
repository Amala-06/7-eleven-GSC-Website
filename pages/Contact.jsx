import React,{useState} from "react";
import './contact.css';
import Navigation from "../components/Navigation/Navigation";
import {db} from '../firebaseConfig';
import { addDoc,collection } from "firebase/firestore";
const Contact=()=>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [msg,setMsg] = useState();

    const userCollectionRef=collection(db,"contactdata")

    const handleSubmit=()=>{
            addDoc(userCollectionRef,{
                name:name,
                email:email,
                message:msg
            }).then(()=>{
                if(!alert("Thanks for your valuable response"))document.location='/home'
            }).catch((error)=>{
                alert(error.message)
            })
    }

    return(
        <div>
            <Navigation/>
            <h1 style={{fontSize:'45px',alignItems:'center',color:'white',paddingLeft:'450px'}}><u><i>CONTACT US</i></u></h1>
            <div className="outerContainer">
                <form className="contactForm">
                    <label>Full Name:</label>
                    <input type="text" placeholder="enter your full name"
                        onChange={(event)=>{
                            setName(event.target.value)
                        }}/>
                    <label>Email:</label>
                    <input type="email" placeholder="enter your email"
                        onChange={(event)=>{
                            setEmail(event.target.value)
                        }}/>
                    <label>Query/Feedback:</label>
                    <textarea type="text" placeholder="enter your message"
                        onChange={(event)=>{
                            setMsg(event.target.value)
                        }}/>
                </form>
                <button onClick={handleSubmit}>Submit</button>
            </div>    
        </div>
          
    );
}
export default Contact;