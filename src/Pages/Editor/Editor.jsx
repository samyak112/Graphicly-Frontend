import React from 'react'
import editorcss from '../Editor/editor.module.css'
import Tools from '../../Components/Tools/Tools'
import Formatter from '../../Components/Formatter/Formatter'
import Top_nav from '../../Components/Top_nav/Top_nav'
import Whiteboard from '../../Components/Whiteboard/Whiteboard'


function Editor() {
  return (
    <div id={editorcss.main}>
      <div className={`${editorcss.editor_comps} ${editorcss.navs}`} id={editorcss.top_part}><Top_nav></Top_nav></div>
      <div className={editorcss.editor_comps} id={editorcss.main_body}>
        <div className={`${editorcss.main_body_comps} ${editorcss.navs}`} id={editorcss.left_part}><Tools></Tools></div>
        <div className={editorcss.main_body_comps} id={editorcss.middle_part}><Whiteboard></Whiteboard></div>
        <div className={`${editorcss.main_body_comps} ${editorcss.navs}`} id={editorcss.right_part}><Formatter></Formatter></div>
      </div>
      
    </div>
  )
}

export default Editor