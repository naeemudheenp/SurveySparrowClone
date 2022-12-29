import React, { useState, useEffect } from 'react';
import "./main.scss"
import Typewriter from "typewriter-effect";

import {PageOne,PageTwo,PageThree} from './pages.js'




function MainWindow() {
 

 


  useEffect(() => {
    
    
  
    window.onscroll=function() {typeFunction()}; 
    
    
   
  
  });

  useEffect(() => {
    setButton(document.getElementById("surveys"));
    setCircle(document.getElementById("circle1"))
  
   
    ButtonSurvey("true");
  }, [])


  const components = {
    'page1': MenuItem,
    'page2': MenuItem2, 
    'page3':MenuItem3, 
    
   }
  

   const [prevButton, setButton] = useState(document.getElementById("surveys"));
   const [prevCircle, setCircle] = useState(document.getElementById("circle1"));
   const [menu, setMenu] = useState(components.page1);
  
 
  return (
    
   <div>
     <div  className="full_container">

   <div  className="textContainer">
     
    <div className="mobileTextContainer" >
    <div className='mobileFont'>Refine</div>

    <div className="typeWriter"> <Typewriter options={{loop:true}} 
    
    onInit={(typewriter)=> {
   
      

    typewriter
     
    .typeString("Employee")
      
    .pauseFor(1000)
    .deleteAll()
    .typeString("Customer").pauseFor(1000);
    typewriter.loop=true;
    typewriter.start();
   
   
   }
   
   }
    /></div>

    <div className='mobileFont'>Experiences,</div>
   
    
   
    </div>
    <div className='mobileFont' style={{display:"Block"}}>The Better Way.</div>
    <div style={{fontSize:"22px",fontWeight:"normal",marginTop:"2%"}} >The all-in-one Omnichannel Experience Management Platform</div>
    <div className="login_input">
       
       
        <div style={{  display:"inline-block"}} >
          <input class="inputMobile" style={{  display:"inline-block",width: "400px",height: "50px",borderRadius:"8px 0px 0px 8px",border:"none"}} type="text" placeholder="sample@mycompany.com" />
        </div>
        <div style={{  display:"inline-block",minHeight:"90%",height:"100%"}}><button style={{ display:"inline-block",width: "100px",height: "50px",borderRadius:"0px 8px 8px 0px",border:"none",backgroundColor:"black",color:"white"}}>Free Trail</button></div>

    </div>
    </div>
   

    

     
     
    

    
    </div>

    <div  className="child_container"> 
    <div className="textDoMore" >Do more than just
          <br></br>Surveys.</div>
    <div className="menu-div">
    <button id="surveys" onClick={() => ButtonSurvey("false")}><div className="circle" id="circle1" ></div>Surveys</button>
    <button id="omni" onClick={ButtonOmni}><div className="circle"  id="circle2"></div>Omnichannel</button>
    <button id="auto" onClick={ButtonAuto}><div className="circle" id="circle3"></div>Automation</button>
    
    

    </div>
   
     <div>{menu}</div>
    </div>

   </div>
    
    
  );
  function typeFunction() {
   
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop>80){
        
      document.getElementById("navBar_container").style.backgroundColor="white"
      document.getElementById("navBar_container").style.position="fixed"
      document.getElementById("navBar_container").style.width="100%"
      document.getElementById("navBar_container").button.backgroundColor="transparent"
    }
    else{
      document.getElementById("navBar_container").style.backgroundColor="#E7F8FD"
      document.getElementById("navBar_container").style.position="fixed"
      document.getElementById("navBar_container").style.width="100%"
      document.getElementById("navBar_container").button.backgroundColor="transparent"
    }
    
}

function MenuItem(){
  return(
    <PageOne/>
  );
}

function MenuItem2(){
  return(
    <PageTwo/>
  );
}

function MenuItem3(){
  return(
    <PageThree/>
  );
}


function ButtonSurvey(runTime){
  
  document.getElementById("surveys").style.backgroundColor="#F4F6F8";
  document.getElementById("circle1").style.visibility="visible";
  

  if(runTime== "false"){
    prevButton.style.backgroundColor="transparent";
    prevCircle.style.visibility="hidden";

  }
  setButton(document.getElementById("surveys"));
  
  setCircle(document.getElementById("circle1"))
  setMenu(components.page1);
 
   
 }
 
function ButtonOmni(){
  
  
  document.getElementById("omni").style.backgroundColor="#F4F6F8";
  document.getElementById("circle2").style.visibility="visible";
  
  
  prevButton.style.backgroundColor="transparent";
  prevCircle.style.visibility="hidden";
  
  setButton(document.getElementById("omni"));
  setCircle(document.getElementById("circle2"))
  setMenu(components.page2)
  
 
   
 }

 function ButtonAuto(){
  
  
  document.getElementById("auto").style.backgroundColor="#F4F6F8";
  document.getElementById("circle3").style.visibility="visible";
  
  
  prevButton.style.backgroundColor="transparent";
  prevCircle.style.visibility="hidden";
  
  setButton(document.getElementById("auto"));
  setCircle(document.getElementById("circle3"))
  setMenu(components.page3)
  
 
   
 }

}


export default MainWindow;







