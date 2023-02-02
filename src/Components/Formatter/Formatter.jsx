import React from 'react'
import Background_formatter from '../All_formatters/Background_formatter/Background_formatter'
import Shapes_formatter from '../All_formatters/Shapes_formatter/Shapes_formatter'
import formattercss from '../Formatter/formatter.module.css'

function Right_nav() {
  return (
    <div id={formattercss.main}>
      <Background_formatter/>
    </div>
  )
}

export default Right_nav