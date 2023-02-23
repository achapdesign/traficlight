import React from "react";
import { useEffect, useState } from "react";

//create your first component
const Home = () => {  
const [color, setColor] = useState("red");
//this.state.first = ["red", ]
//  useEffect(() => {
//	if (setColor)
    document.title = `${color} light!`;
 // },[color]);

  return (
    <div>
		<div className="traffic-light" >
			<div className="red" shadowSize={2}><i class="fa-solid fa-circle"></i></div>
			<div className="yellow">yellow light</div>
			<div className="green">green light</div>
    	</div>
	</div>
  );
};

export default Home;
