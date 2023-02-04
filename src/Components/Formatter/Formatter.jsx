import { current } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import Background_formatter from '../All_formatters/Background_formatter/Background_formatter'
import Shapes_formatter from '../All_formatters/Shapes_formatter/Shapes_formatter'
import formattercss from '../Formatter/formatter.module.css'
function Right_nav() {

  const current_tool = useSelector(state => state.elements_specs.current_element)
  

  return (
    <div id={formattercss.main}>
      {
        current_tool == null?
        <Background_formatter/>
        :
        <Shapes_formatter/>
      }
    </div>
  )
}

export default Right_nav