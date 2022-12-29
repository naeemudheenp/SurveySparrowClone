import React, { useState, useEffect } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import './react-device-frameset/dist/styles/marvel-devices.min.css'
import axios from "axios";
import './galleryPages.scss'





function PageOne(){
    
const getData = async () => {
    return await axios.get("https://api.sampleapis.com/movies/comedy")
      .then((response) => response.data,{
        params: {
            per_page: 4         }
      })
      .then((data) => setData(data));
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
    return (
        <div className="galleryScroller">
        {data.length  &&
           data.slice(4, 8 ).map((userObj)  => (
            
             
                 
                
                 
                    <img className='images' height={"400px"} src={userObj.posterURL}></img>
                
                 
             
             
           ))}
        </div>

        
        

    );

}   

function PageTwo(){
    
    const getData = async () => {
        return await axios.get("https://api.sampleapis.com/movies/comedy")
          .then((response) => response.data,{
            params: {
                per_page: 4         }
          })
          .then((data) => setData(data));
      };
    
      const [data, setData] = useState([]);
      useEffect(() => {
        getData();
      }, []);
        return (
            <div className="galleryScroller">
            {data.length  &&
               data.slice(9, 13 ).map((userObj)  => (
                
                 
                     
                    
                     
                        <img  className='images' height={"400px"} src={userObj.posterURL}></img>
                    
                     
                 
                 
               ))}
            </div>
    
            
            
    
        );
    
    }  








export {PageOne,PageTwo}

