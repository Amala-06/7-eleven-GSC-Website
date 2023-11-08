import React from "react";
import Navigation from "../components/Navigation/Navigation";
import './career.css';
const Career=()=>{
    return(
        <div>
            <Navigation/>
            <h1 style={{fontSize:'45px',alignItems:'center',color:'white',paddingLeft:'350px'}}><u><i>CAREER AT 7-11 GSC</i></u></h1>
            <p>The 7-Eleven® Global Solution Center (GSC) is an important source of our Dallas-Fort Worth-based core technology team. 
                The India and US offices complete each other in making innovations and transform the digital world. 
                Service Delivery includes the functional teams that provide services to the US, including IT, information security, finance and accounting.<br/>
            </p>
            <h3 style={{fontSize:'30px',alignItems:'center',textAlign:'center',color:'white'}}><u><i>WHAT'S IN IT FOR YOU?</i></u></h3>
            <div className="container">
                    <div className="image1">
                        <img style={{width:'300px',height:'300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YuI0Kdj1qOx89xIJXCrYhgGq-c0C7x1kgw&usqp=CAU"/>
                    </div>
                    <div className="content">
                        1.Gym:Here at 7-elevn spreadsheets and sqauts go hand in hand<br/>
                        2.Office's game zone is where productivity takes a timeout , and fun levels hit an all-time high.<br/>
                        3.Food court:Where lunch breaks become gourment adventures,and the real decision is choosing between salad or pizza<br/>
                        4.Juice shop:where work gets a squeeze of refreshment<br/>
                </div>
                <div className="image">
                    <img style={{width:'300px',height:'300px'}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaQPl-Aj2HIklq3GTm7uV7SJSQ1ZASSZEHg&usqp=CAU'/>
                </div>
            </div>
            <h1><marquee scrollamount="12"><a href="https://indiacareers-7-eleven.icims.com/jobs/intro?hashed=-435773306&mobile=false&width=1140&height=500&bga=true&needsRedirect=false&jan1offset=330&jun1offset=330" id='lnk'>Click here to know about our latest openings</a></marquee></h1>
        </div>
    );
}
export default Career;