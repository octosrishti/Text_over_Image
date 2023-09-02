import React from 'react'
import Draggable from 'react-draggable'; 

const LayoverText = ({customInput}) => {
  return (
    <Draggable bounds="body">
        <div className="drag-ui">{customInput}</div>
    </Draggable>
  )
}

export default LayoverText