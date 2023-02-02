import React, { useEffect, useLayoutEffect, useState } from 'react';
import editorcss from '../Editor/editor.module.css';
import Tools from '../../Components/Tools/Tools';
import Formatter from '../../Components/Formatter/Formatter';
import Top_nav from '../../Components/Top_nav/Top_nav';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {update_element_spec , new_current_element  ,new_canvas_details} from '../../Components/Redux/Elements_specs'
import getData from '../../database/open_project';


function Editor() {

  let {id} = useParams();
  const dispatch = useDispatch()
  const canvas_details = useSelector(state => state.elements_specs.canvas_details)
  const current_tool = useSelector(state => state.tool.value)


  useEffect(()=>{
      if(id=='new'){
        const canvas_id = nanoid()
        
        let default_canvas_specs = {
          'canvas_name':'untitled',
          'canvas_id':canvas_id,
          'canvas_color':'#1e1e1e',
          'canvas_elements':[{}],
          'timestamp':Date.now()
        }
        dispatch(new_canvas_details(default_canvas_specs))
      }
      else{
        getData(id).then((canvas_data) => {
          dispatch(new_canvas_details(canvas_data));
        });
      }
    
  },[])
  

  useLayoutEffect(()=>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // ctx.fillStyle = '#1e1e1e'
    // ctx.fillRect()

    ctx.fillStyle = 'green';
    ctx.fillRect(10,10,150,100);

    ctx.fillStyle = 'black';
    ctx.fillRect(60,60,150,100);
  })


  
  return (
    <div id={editorcss.main}>
      <canvas style={{
        cursor:current_tool , 
        background:canvas_details==null ? "#1e1e1e" : canvas_details.canvas_color}} width={window.innerWidth}  height={window.innerHeight} className={editorcss.canvas_specs} id='canvas'>
      </canvas>
      <div className={editorcss.whiteboard_options} id={editorcss.tools}>
        <Tools canvas_details={canvas_details==null?{canvas_name:'Untitled' , canvas_color:"#1e1e1e"} : {canvas_name:canvas_details.canvas_name , canvas_color:canvas_details.canvas_color}}/>
      </div>
      <div className={editorcss.whiteboard_options} id={editorcss.formatter}>
        <Formatter/>
      </div>
      <div className={`${editorcss.editor_comps} ${editorcss.navs}`} id={editorcss.nav_bar}><Top_nav canvas_name={canvas_details==null?null:canvas_details.canvas_name}></Top_nav></div>
    </div>
  )
}

export default Editor