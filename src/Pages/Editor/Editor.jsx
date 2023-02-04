import React, { useEffect, useState } from 'react';
import editorcss from '../Editor/editor.module.css';
import Tools from '../../Components/Tools/Tools';
import Formatter from '../../Components/Formatter/Formatter';
import Top_nav from '../../Components/Top_nav/Top_nav';
import Whiteboard from '../../Components/Whiteboard/Whiteboard';
import {update_element_spec , new_current_element  ,new_canvas_details , add_element_to_canvas, update_canvas_details} from '../../Components/Redux/Elements_specs'
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../../database/open_project';


function Editor() {

  const dispatch = useDispatch()
  let {id} = useParams();
  const [canvas_name, setcanvas_name] = useState(null)
  

  useEffect(()=>{
    if(id=='new'){
      const canvas_id = nanoid()
      
      let default_canvas_specs = {
        'canvas_name':'Untitled',
        'canvas_id':canvas_id,
        'canvas_color':'#1e1e1e',
        'canvas_elements':[],
        'timestamp':Date.now()
      }
      setcanvas_name('Untitled')
      dispatch(new_canvas_details(default_canvas_specs))
    }
    else{
      getData(id).then((canvas_data) => {
        setcanvas_name(canvas_data.canvas_name)
        dispatch(new_canvas_details(canvas_data));
      });
    }
  
},[])

  
  return (
    <div id={editorcss.main}>
      <Whiteboard/>
      <div className={editorcss.whiteboard_options} id={editorcss.tools}>
        <Tools/>
      </div>
      <div className={editorcss.whiteboard_options} id={editorcss.formatter}>
        <Formatter/>
      </div>
      <div className={`${editorcss.editor_comps} ${editorcss.navs}`} id={editorcss.nav_bar}>
        <Top_nav canvas_name={canvas_name} />
      </div>
    </div>
  )
}

export default Editor