import React, { useState } from 'react';
import Light from "./Light.js";
import '/workspace/traficlight/src/styles/index.css'

//create your first component
const Home = () => {
  const colors = ['red', 'yellow', 'green'];
  const [lit, setLit] = useState ('red')
  
  return (
    <div className="Trafic">
      {colors.map((color) => (
          <Light color = {color} lit = {lit} setLit = {setLit}/>
      ))}
    </div>
  );
};

export default Home;
