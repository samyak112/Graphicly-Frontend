import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {update_element_spec ,canvas_reset, new_current_element  ,new_canvas_details , add_element_to_canvas , update_canvas_details} from '../Redux/Elements_specs'
import rectangle from '../../Shapes_generators/Rectangle'
import { useDispatch, useSelector } from 'react-redux';
import save_project from '../../database/save_project';
import { nanoid } from 'nanoid';

function Whiteboard() {

    const dispatch = useDispatch()
    const current_tool = useSelector(state => state.tool.value);
    const [track_mouse, settrack_mouse] = useState({x:0 , y:0})
    const [element_starting_point, setelement_starting_point] = useState({x:null , y:null})
    const new_element_cords = useRef(null)
    const [is_mouse_up, setis_mouse_up] = useState(true)
    const save_project_to_db = useSelector(state => state.elements_specs.save_details)
    const canvas_details = useSelector(state => state.elements_specs.canvas_details)
    const is_canvas_reset = useSelector(state => state.elements_specs.canvas_reset)

  useEffect(()=>{
    if(is_canvas_reset == true){
      dispatch(update_canvas_details({key:'canvas_elements' , value:[]}))
    // Because i am using a useref to keep track of element specs i have to clear that too for clearing the canvas otherwise it renders the last element details that were stored in it
      new_element_cords.current = null
      dispatch(canvas_reset(false))
    }
  },[is_canvas_reset])
    
  useEffect(()=>{
    if(save_project_to_db==true){
      console.log('this ran for saving')
      save_project(canvas_details)
    }
  },[save_project_to_db])
  
    useLayoutEffect(()=>{
        // sends live coordinates
      let shape;
      if(current_tool.element_type=='Rectangle'){
        shape = rectangle(track_mouse , element_starting_point.x , element_starting_point.y)
        const {x,y,width,height} = shape
        new_element_cords.current = {
            x:x,
            y:y,
            width:width,
            height:height,
            type:current_tool.element_type,
            id:null,
            fill_color:"#D9D9D9",
            stroke_color:"#000000",
            stroke_width:1
        };
      }
    },[track_mouse])
    
  
    useLayoutEffect(()=>{
      
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
  
      if(canvas_details==null){
        ctx.fillStyle = "#1e1e1e"
      }
      else{
        ctx.fillStyle = canvas_details.canvas_color;
      }
      
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  
      if(canvas_details!=null){
        if(canvas_details.canvas_elements.length!=0){
          canvas_details.canvas_elements.map((elem,index)=>{
            add_element(elem)
          })
        }
      }
    })
  
    // draws live shapes
    useLayoutEffect(()=>{
      if(new_element_cords.current!=null){
        add_element(new_element_cords.current)
      }
    })
  
    function add_element(element_data){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        if(element_data.type=='Rectangle'){
          ctx.globalCompositeOperation = "source-over";
          const {x,y,width,height,fill_color,stroke_color,stroke_width} = element_data
          ctx.strokeStyle = stroke_color;
          ctx.lineWidth = stroke_width;
          ctx.fillStyle = fill_color
          ctx.fillRect(x , y , width , height); 
          ctx.strokeRect(x,y,width,height);
        }

    }
  
    function mouse_cords(e){
      if(is_mouse_up==false){
        settrack_mouse({x:e.clientX , y:e.clientY , mx:e.movementX , my:e.movementY})
      }
    }
  
    function start_tracking(e){
      setis_mouse_up(false)
      setelement_starting_point({x:e.clientX , y:e.clientY})
    }
  
    function stop_tracking(){
      setis_mouse_up(true)
      new_element_cords.current = {...new_element_cords.current , element_id:nanoid()}
      dispatch(new_current_element(new_element_cords.current))
      dispatch(add_element_to_canvas(new_element_cords.current))
    }
  
  return (
    <>
    <canvas style={{cursor:current_tool.cursor_icon}} 
        width={window.innerWidth}  
        height={window.innerHeight} 
        id='canvas'
        onMouseDown={start_tracking}
        onMouseMove={mouse_cords}
        onMouseUp={stop_tracking}
        >
      </canvas>
    </>
  )
}

export default Whiteboard