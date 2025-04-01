import React from 'react'
import { useState } from 'react'

const Content = () => {
    let [item,setItem]= useState([
        {id:1,name:"ammu"},
        {id:2,name:"senthil"},
        {id:3,name:"sumi"},
    ]);
//       [displayitem,setDisplayitem]=useState("");
//     function handleItem(event) {
//     setItem(event.target.value);
// }
//     let handleButton=()=>
//     {
//         setDisplayitem(item);  
//      };

const buttonStyle = {
    backgroundColor: 'pink',
    color: 'red',
  };
  let [img,setimg]= useState("null");
  function displayImg()
  {
   setimg()
  }
  return (
    <div>
         <button style={buttonStyle} onClick={displayImg}>Dhaniskaa</button>
           {
            item.map((item)=>
            {
             return(
               <p> {item.name}</p>
             )
             
            })
        }

        
       
    </div>
  )
}

export default Content