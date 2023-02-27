import React from 'react'
import { useEffect } from "react";

function trafficlight() {
    // ... Your code
    
    useEffect(() => {
      const intervalHandle = setInterval( /** Your callback code */ )
      
      // This will cancel the previous timer each time the component is re-rendered due to changing any of 
      // the passed dependencies.
      return function cleanup() {
        clearInterval(intervalHandle)
      }
    }, [red, green, yellow])
  
    // Your code
  }
  
  
function TrafficLight() {
    // ... Your code
    
    useEffect(() => {
      const intervalHandle = setInterval( /** Your callback code */ )
      
      // This will cancel the timer after the component unmounts.
      return function cleanup() {
        clearInterval(intervalHandle)
      }
    }, [])
  
    // Your code
  }
  
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