import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import backgroundcss from '../Background_formatter/background.module.css'
import { update_element_spec , update_canvas_details } from '../../Redux/Elements_specs';

function Background_formatter() {
  const [color_value, setcolor_value] = useState(null)
  const dispatch = useDispatch();
  let canvas_details = useSelector(state => state.elements_specs.canvas_details)

  useEffect(() => {
    if(color_value!=null && canvas_details!=null){
      dispatch(update_canvas_details({key:'canvas_color' , value:color_value}))
    }
    if(color_value==null){
      setcolor_value("#1e1e1e")
    }
  }, [color_value])

  useEffect(() => {
    if(canvas_details!=null && canvas_details.color_value!=color_value){
      setcolor_value(canvas_details.canvas_color)
    }
  }, [canvas_details])
  


  function handle_color_value(e){
    let value = e.target.value;
    setcolor_value(value)
    if(value.length==6 && value[0]=='#'){
        setcolor_value(value)
    }
    else if(value.length==6 && value[0]!='#'){
        setcolor_value('#'.concat(value))
    }
    
  }

  return (
    <div id={backgroundcss.main}>
        <div className={backgroundcss.main_comps} id={backgroundcss.background_box}>
            <div className={backgroundcss.background_box_comps} id={backgroundcss.heading}>Background</div>
            <div className={backgroundcss.background_box_comps} id={backgroundcss.specs}>
                <label htmlFor={backgroundcss.color_box}></label>
                <input type="color" id={backgroundcss.color_box} onChange={(e)=>{handle_color_value(e)}} name="color_box" value={color_value}/>
                <input type="text" 
                 name='color_value'
                 onChange={(e)=>{handle_color_value(e)}} 
                 value={color_value} 
                 id={backgroundcss.color_value} />
            </div>
        </div>
    </div>
  )
}

export default Background_formatter