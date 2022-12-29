import { render } from "@testing-library/react";
import React, { useState, useEffect } from 'react';
import "./custom.scss"
import Popup from 'reactjs-popup';
import { ModalHover } from 'react-modal-hover'
import { faHome,faSquareCaretRight,faSquareCaretLeft, faHamburger, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 



function NavBar() {
  useEffect(() => {
    // Update the document title using the browser API
    window.onscroll=function() {scrollFunction()}; 
  });

  const [menuStatus,updateMenu]=useState(false)
 
  

  return (
    <div className="fullnav">
       
         <div  className="navBar_container"  id="navBar_container" >
          <div style={{display: 'inline'}}>
          <div   style={{display: 'inline'}}>
        <img className="main_img" src="./assets/splogo.png" ></img>
      </div>

      <div   className="menuButton">
      <FontAwesomeIcon className="iconButton menuButton" id="nextButton"  icon={faBars} size="1.5x" onClick={showMenu} />
      </div>

          </div>
      <div className="menuOptions"  id="menuOptions" >
        

        <button class="popup" onMouseOver={myFunction} onMouseOut={myFunctionClosed}>Home
        <span class="popuptext" id="myPopup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </button>

        <button class="popup" onMouseOver={myFunction} onMouseOut={myFunctionClosed}>Products
        <span class="popuptext" id="myPopup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </button>

        <button class="popup" onMouseOver={myFunction} onMouseOut={myFunctionClosed}>Solutions
        <span class="popuptext" id="myPopup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </button>



        <button class="popup" onMouseOver={myFunction} onMouseOut={myFunctionClosed}>Resources
        <span class="popuptext" id="myPopup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </button>
        
        <button class="popup" onMouseOver={myFunction} onMouseOut={myFunctionClosed}>Pricing
        <span class="popuptext" id="myPopup">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </button>

       
        
      </div>

      <div className="login_buttons menuOptions" id="buttonOptions"   >
        <button    style={{backgroundColor:"transparent" ,}} >Login</button>
        <button   style={{backgroundColor:"#19B885" , color:"white"}} >Signup</button>
      </div>

      
    </div>
    
   


    </div>
    
  );

  function myFunction() {
    
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("show")
    
  }

  function myFunctionClosed(){
 
   
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("close")
  }
  function MySocialMediaComponent() {
 
    
  
    return (
      <div style={{backgroundColor:"#19B885" , color:"red"}}>
         
        
        <h1>hello</h1>
      
      
      </div>
      
    );}

  function scrollFunction(){
    
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

  function showMenu(){
    if(menuStatus){
      document.getElementById("menuOptions").style.display="none";
      document.getElementById("menuOptions").style.display="hidden";
      document.getElementById("buttonOptions").style.display="none";
      document.getElementById("buttonOptions").style.display="hidden";
      updateMenu(false)
    }
    else{
      document.getElementById("menuOptions").style.display="flex";
      document.getElementById("menuOptions").style.display="visible";
      document.getElementById("buttonOptions").style.display="flex";
      document.getElementById("buttonOptions").style.display="visible";
      updateMenu(true)
    }
  }
  
}





export default NavBar;







