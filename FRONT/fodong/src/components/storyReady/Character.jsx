import React from 'react'

const Character = () => {
  return (
    <div>
        
        <img src={require("./img/pig3-work.png")} style={{ maxWidth: '35%', maxHeight: '100%'}} alt='일하는돼지'/>
        <img src={require("./img/pig3.png")} style={{ maxWidth: '35%', maxHeight: '100%'}} alt='돼지'/>
        
    </div>
  )
}

export default Character