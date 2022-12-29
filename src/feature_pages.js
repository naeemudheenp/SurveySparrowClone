import React, { useState, useEffect } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import './react-device-frameset/dist/styles/marvel-devices.min.css'
import './fpage.scss'


function PageOne(){
    return (
       <div className="mainContainer" >
       <div className="toOrder" style={{padding:"2%",}}>
           <div className="fade-in-text description" >
           Build conversational surveys of any type, for any purpose, in any language.<br></br> Get 40% more responses.
            </div>
            </div> 
           
          <DeviceFrame/>
       </div>


        
        

    );

}   

function PageTwo(){
    return (
       <div className="mainContainer">
       <div className="toOrder" style={{padding:"4%",}}>
           <div className="fade-in-text description" >
           Build conversational surveys of any type, for any purpose, in any language.<br></br> Get 40% more responses.
            </div>
            </div> 
           
          <DeviceFrame2/>
       </div>


        
        

    );

}  

function PageThree(){
    return (
       <div className="mainContainer">
       <div className="toOrder" style={{padding:"4%",}}>
           <div className="fade-in-text description" >
           Build conversational surveys of any type, for any purpose, in any language.<br></br> Get 40% more responses.
            </div>
            </div> 
           
          <DeviceFrame3/>
       </div>


        
        

    );

}  



function DeviceFrame(){
    return (
       <div style={{display: 'flex',marginLeft:"0px"}}>
         <div className="fade-in-image DeviceFrame">
             <img src="./assets/phone.png" height="50%"></img>
             <DeviceQoute/>
        </div>
       </div>
        

    );
}

function DeviceFrame2(){
    return (
        <div style={{display: 'flex',marginRight:"0vw"}}>
        <div  className="fade-in-image DeviceFrame" >
            <img src="./assets/phone2.png" height="50%"></img>
            <DeviceQoute/>
       </div>
      </div>

    );
}

function DeviceFrame3(){
    return (
        <div style={{display: 'flex',marginLeft:"0px"}}>
         <div   className="fade-in-image DeviceFrame">
             <img src="./assets/phone3.png" height="50%"></img>
             <DeviceQoute/>
        </div>
       </div>

    );
}

function DeviceQoute(){
    return(
        <div className="qoute_container" >
            <div style={{marginTop:"0%"}}>
            Track every stage in product lifecycle with Executive Dashboards
            </div>
            <div>
            Track every stage in product lifecycle with Executive Dashboards
            </div>
            <div>
            Track every stage in product lifecycle with Executive Dashboards
            </div>
        </div>
    )

}

export {PageOne,PageTwo,PageThree}

