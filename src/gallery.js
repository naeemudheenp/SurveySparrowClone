
import { useEffect, useState } from "react";
import "./gallery.scss"
import {PageOne,PageTwo} from './galleryPages'
import { faHome,faSquareCaretRight,faSquareCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Gallery() {
  var count=0;  
  const components = {
    'page1': MenuItem,
    'page2': MenuItem2, 
   
    
   }
  const [menu, setMenu] = useState(components.page1);
  
 

  return (
    
    <div className="galleryParent">
        <div>
            <h3>Images Using API / Hover On It </h3>
        </div>

    <div className="slideShow">
    <div className="iconContainer">
    <FontAwesomeIcon className="iconButton" id="prevButton" style={{visibility:"hidden"}} icon={faSquareCaretLeft} size="2x"  onClick={prevButton}  />
    </div>
    {menu}
    <div className="iconContainer">
    <FontAwesomeIcon className="iconButton" id="nextButton"  icon={faSquareCaretRight} size="2x" onClick={nextButton} />
    </div>
  

    </div>  

        
  
 
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
  
  function prevButton(){
    document.getElementById("prevButton").style.visibility="hidden";
    document.getElementById("nextButton").style.visibility="visible";
    setMenu(components.page1)
  }

  function nextButton(){
    document.getElementById("prevButton").style.visibility="visible";
    document.getElementById("nextButton").style.visibility="hidden";
    setMenu(components.page2)
  }
}
