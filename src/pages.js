import React, { useState, useEffect } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import './react-device-frameset/dist/styles/marvel-devices.min.css'
import './pages.scss'


function PageOne(){
    return (
       <div style={{display: 'flex'}}>
       <div style={{padding:"4%"}}>
           <div className='pages' >
           Build conversational surveys of any type, for any purpose, in any language.<br></br> Get 40% more responses.
            </div>
            </div> 
           
          <DeviceFrame/>
       </div>


        
        

    );

}   

 function PageTwo(){
    return (
       <div style={{display: 'flex'}}>
       <div style={{padding:"4%"}}>
           <div className='pages'>
           Access the consolidated performance in one place & keep it convenient.<br></br> Be where your customers are.
            </div>
            </div> 
           
          <DeviceFrame2/>
       </div>


        
        

    );

}

function PageThree(){
    return (
       <div style={{display: 'flex'}}>
       <div style={{padding:"4%"}}>
           <div className='pages'>
           Drive impactful actions by design & kick-start Response Management.<br></br> Serve customers proactively.
            </div>
            </div> 
           
          <DeviceFrame/>
       </div>


        
        

    );

}

function DeviceFrame(){
    return (
        <div className='deviceFrame'  style={{marginBottom:"4%"}} >
             <DeviceFrameset device="iPad Mini" color="silver" height="400px" width="400px"  zoom="10px">
             <video width="400px" height="400px" loop autoPlay muted style={{border:"none"}}>
  <source src="./assets/survey.mp4" type="video/mp4"></source>
 </video>
        </DeviceFrameset>

        </div>

    );
}

function DeviceFrame2(){
    return (
        <div className='deviceFrame'  >
             <DeviceFrameset height="400px" width="40vw"  device="iPad Mini" color="black"   zoom="10px">
             <video width="400px" height="400px" loop autoPlay muted style={{border:"none"}}>
  <source src="./assets/survey.mp4" type="video/mp4"></source>
 </video>
        </DeviceFrameset>

        </div>

    );
}

export {PageOne,PageTwo,PageThree}

