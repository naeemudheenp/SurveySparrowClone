import "./features.scss"
import React, { useState, useEffect } from 'react';
import {PageOne,PageTwo,PageThree} from './feature_pages.js'

function Features(){
    const components = {
        'page1': MenuItem,
        'page2': MenuItem2, 
        'page3':MenuItem3, 
        
       }
       const [prevButton, setButton] = useState(document.getElementById("surveys1"));
       const [menu, setMenu] = useState(components.page1);
       useEffect(() => {
        setButton(document.getElementById("surveys1"));
       
      
       
        ButtonSurvey("true");
      }, [])
    return(
        <div className="passiveWindow">
            <div className="coreHeading">
            Core Solutions,<br></br>
            Built to Scale.
            </div>
            <div className="menu">
                <button id="surveys1" onClick={() => ButtonSurvey("false")}>Customer Experience</button>
                <button  id="omni1" onClick={ButtonOmni}>Product Experience</button>
                <button  id="auto1" onClick={ButtonAuto}>Employee Experience</button>
            </div>
            <div className="pageRend">{menu}</div>
        </div>
    );

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
       
        document.getElementById("surveys1").style.backgroundColor="black";
        document.getElementById("surveys1").style.color="white";
      
        
      
        if(runTime== "false"){
          prevButton.style.backgroundColor="white";
          prevButton.style.color="black";
          
      
        }
        setButton(document.getElementById("surveys1"));
        
      
        setMenu(components.page1);
       
         
       }
       
      function ButtonOmni(){
        
        
        document.getElementById("omni1").style.backgroundColor="black";
        document.getElementById("omni1").style.color="white";
       
        
        
        prevButton.style.backgroundColor="white";
          prevButton.style.color="black";
      
        
        setButton(document.getElementById("omni1"));
      
        setMenu(components.page2)
        
       
         
       }
      
       function ButtonAuto(){
        
        
        document.getElementById("auto1").style.backgroundColor="black";
        document.getElementById("auto1").style.color="white";
        
        
        
        prevButton.style.backgroundColor="white";
          prevButton.style.color="black";
        
        
        setButton(document.getElementById("auto1"));
       
        setMenu(components.page3)
        
       
         
       }
}



export default Features