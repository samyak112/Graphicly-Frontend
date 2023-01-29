import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import backgroundcss from '../Background_formatter/background.module.css'
import { new_base_background } from '../../Redux/Elements_specs';

function Background_formatter() {
  const [color_value, setcolor_value] = useState('#1e1e1e')
  const dispatch = useDispatch();

  function handle_color_value(e){
    let value = e.target.value;
    setcolor_value(value)
    dispatch(new_base_background(value))
    if(value.length==6 && value[0]=='#'){
        setcolor_value(value)
        dispatch(new_base_background(value))
    }
    else if(value.length==6 && value[0]!='#'){
        setcolor_value('#'.concat(value))
        dispatch(new_base_background('#'.concat(value)))
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