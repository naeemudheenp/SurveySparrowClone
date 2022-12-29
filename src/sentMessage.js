import "./sentMessage.scss"
import React, { useState, useEffect } from 'react';
import "./main.scss"

function SentMessage(){
  return(  
  <div className="greyContainer">
        <div className="textHeading">
        See it, to believe it.

        <div className="login_input" style={{  display:"block"}}>
       
       
       <div style={{  display:"inline-block"}} >
         <input className="inputDesign"  type="text" placeholder="sample@mycompany.com" />
       </div>
       <div style={{  display:"inline-block",minHeight:"90%",height:"100%"}}><button style={{ display:"inline-block",width: "100px",height: "52px",borderRadius:"0px 8px 8px 0px",border:"none",backgroundColor:"#5ECDAA",color:"white"}}>Free Trail</button></div>

   </div>
        </div>
    </div>);
}
export default SentMessage;