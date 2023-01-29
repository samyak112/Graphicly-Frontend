import React from 'react'
import editorcss from '../Editor/editor.module.css'
import Tools from '../../Components/Tools/Tools'
import Formatter from '../../Components/Formatter/Formatter'
import Top_nav from '../../Components/Top_nav/Top_nav'
import Whiteboard from '../../Components/Whiteboard/Whiteboard'
import { useSelector } from 'react-redux'

function Editor() {
  const background_color = useSelector(state => state.elements_specs.base_background_value)
  const current_tool = useSelector(state => state.tool.value)
  return (
    <div id={editorcss.main}>
      <canvas style={{cursor:current_tool , background:background_color}} id={editorcss.canvas}>
      </canvas>
      <div className={editorcss.whiteboard_options} id={editorcss.tools}>
        <Tools/>
      </div>
      <div className={editorcss.whiteboard_options} id={editorcss.formatter}>
        <Formatter/>
      </div>
      <div className={`${editorcss.editor_comps} ${editorcss.navs}`} id={editorcss.nav_bar}><Top_nav></Top_nav></div>
    </div>
  )
}

export default Editor