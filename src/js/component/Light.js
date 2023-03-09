import React from 'react'

function Light({color, lit, setLit}) {
  return (
    <>
      <div className='light' style={{backgroundColor:color === lit? color: "grey"}} onClick={() => setLit(color)}>
      </div>
    </>
  )
}

export default Light