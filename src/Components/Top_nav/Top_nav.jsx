import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import topnavcss from '../Top_nav/top_nav.module.css'
import {update_canvas_details} from '../Redux/Elements_specs'

function Top_nav({canvas_name}) {
  const dispatch = useDispatch()
  const [input_value, setinput_value] = useState(canvas_name)
  // console.log('nav')
  useEffect(() => {
    if(canvas_name!=null){
      setinput_value(canvas_name)
    }
  }, [canvas_name])

  function save_name(e){
    if(e.code=="Enter"){
      dispatch(update_canvas_details({key:'canvas_name',value:input_value}))
    }
  }

  return (
    <div id={topnavcss.main}>
      <div className={topnavcss.top_nav_comps} id={topnavcss.top_nav_middle_wrap}>
        <input type="text" value={input_value} onChange={(e)=>{setinput_value(e.target.value)}} onKeyDown={(e)=>{save_name(e)}}/>
      </div>
    </div>
  )
}

Top_nav.defaultProps = {
  canvas_name:'test'
}

export default Top_nav