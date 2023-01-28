import React from 'react'
import { useSelector } from 'react-redux'
import whiteboardcss from '../Whiteboard/whiteboard.module.css'


function Whiteboard() {

  const current_tool = useSelector(state => state.tool.value)
  return (
    <canvas style={{cursor:current_tool}} id={whiteboardcss.main}>Whiteboarrd</canvas>
  )
}

export default Whiteboard