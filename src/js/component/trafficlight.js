import React from 'react'
import { useEffect, useState } from "react";

function trafficlight() {
    const [color, setColor] = useState("red");
    document.title = `${color} light!`;
  return (
    <div className="container">
        <div className="traffic-light">
          <div className="container">
            <div className="red">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="yellow">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="green">
              <i class="fa-solid fa-circle"></i>
            </div>
          </div>
        </div>
      </div>
  )
}

export default trafficlight