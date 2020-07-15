import React from 'react';
import './App.css';
import image2 from "./unnamed.jpg";
import "./stule.css"

function App() {
  return (
    <div className="d1" style={{border: 'solid 1px black'}} >  
 
    	<h1 className="title red">SALEM</h1> 
 
        	<br/>  
 
            <img src="./Gull_portrait_ca_usa.jpg"  alt="" className="im1"/> <br /> 
 
           <img src={image2} className="im2" alt="h"/>

           <iframe style={{width=560 ,height=315}} src="https://www.youtube.com/embed/MLdLyzoj1Uc?start=8" frameborder="0" allow="accelerometer; autoplay; 
           encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 </div>  
 )
}
export default App;