import React from 'react'
import toolcss from './tools.module.css'
import Options from '@mui/icons-material/GridViewOutlined';
import Save from '@mui/icons-material/Save';
import SaveAs from '@mui/icons-material/SaveAs';
import Back from '@mui/icons-material/ArrowBack';
import Shapes from '@mui/icons-material/InterestsOutlined';
import Tooltip from '@mui/material/Tooltip';
import Forward from '@mui/icons-material/ArrowForwardIos';
import {new_tool} from '../../Components/Redux/Selected_tool'
import { useDispatch } from 'react-redux';
import other_options from './option_objects/Other_options';
import shape_options from './option_objects/Shapes_options';
import { useState } from 'react';


function Left_nav() {
  const dispatch = useDispatch()
  const [dropdown_state, setdropdown_state] = useState({shapes:'none' , options:'none'})
  

  function tooltip_options(Icon, option_name,option_type){
    return(
      <Tooltip title={option_name} placement="right" arrow={true}>
        <div className={toolcss.main_comps} onClick={()=>{
          if(option_type!= 'none'){
            dispatch(new_tool(option_type))
          }
          else{
            console.log('heyyy its undo or redo')
          }
          }}>
          {<Icon fontSize='medium' className={toolcss.icons}/>}
        </div>
      </Tooltip>
    )
  }

  function open_dropdown(option_name){
    if(option_name=='options'){
      if(dropdown_state.options=='block'){
        setdropdown_state({...dropdown_state,options:'none'})
      }
      else{
        setdropdown_state({...dropdown_state,options:'block' , shapes:'none'})
      }
    }
    else{
      if(dropdown_state.shapes=='block'){
        setdropdown_state({...dropdown_state,shapes:'none'})
      }
      else{
        setdropdown_state({...dropdown_state,shapes:'block' , options:'none'})
      }
    }
  }
  

  function dropdown_menu_shapes(){
    return(
      <div className={toolcss.dropdown_menu} style={{display:dropdown_state.shapes}} >
        {
          shape_options.map((elem,index)=>{
            return(
              <div className={toolcss.menu_comps} onClick={()=>{dispatch(new_tool('crosshair'))}}> 
                <elem.option_icon/> {elem.option_name} 
              </div>
            )
          })
        }
      </div>
      
    )
  }

  function dropdown_menu_options(){
    return(
      <div className={toolcss.dropdown_menu} style={{display:dropdown_state.options}} >
        <div className={toolcss.menu_comps} id={toolcss.comp_1}><Save/> Save</div>
        <div className={toolcss.menu_comps} id={toolcss.comp_2}><SaveAs/> Save As</div>
        <div className={toolcss.menu_comps} id={toolcss.comp_3}><Back/> Back</div>
      </div>
    )
  }

  return (
    <div id={toolcss.main}>
      <div className={toolcss.main_comps} onClick={()=>{open_dropdown('options')}}>
        <div className={toolcss.main_comps_wrap}>
          <Options fontSize='medium' className={toolcss.icons}/>
          <Forward className={toolcss.forward_icon} 
            fontSize='small'  
            sx={{fontSize:'.6rem', height:'100%'}}>  
          </Forward>
        </div>
        {dropdown_menu_options()}
      </div>

      <div className={toolcss.main_comps} onClick={()=>{open_dropdown('shapes')}} >
        <div className={toolcss.main_comps_wrap}>
          <Shapes fontSize='medium' className={toolcss.icons}/>
          <Forward className={toolcss.forward_icon} 
            fontSize='small' 
            sx={{fontSize:'.6rem', height:'100%'}}>
          </Forward>
        </div>
        {dropdown_menu_shapes()}
      </div>

      {
        other_options.map((elem,index)=>{
          return(
            <>
              {tooltip_options(elem.option_icon , elem.option_name , elem.option_type)}
            </>
        )
      })
    }
    </div>
  )
}

export default Left_nav