import React, { useState } from 'react'
import shapes_css from '../Shapes_formatter/shapes_formatter.module.css'
import Angle from '@mui/icons-material/CropRotate';
import Border from '@mui/icons-material/BorderAll';
import Stroke_width from '@mui/icons-material/CalendarViewDay';
import Border_bottom from '@mui/icons-material/BorderBottomOutlined';
import Border_left from '@mui/icons-material/BorderLeftOutlined';
import Border_right from '@mui/icons-material/BorderRightOutlined';
import Border_top from '@mui/icons-material/BorderTopOutlined';
import Tick from '@mui/icons-material/DoneOutlined';
import { useSelector } from 'react-redux';

function Shapes_formatter() {

    const [show_border_box, setshow_border_box] = useState('none')
    const shape_details = useSelector(state => state.elements_specs.current_element)
    const {x,y,width,height,element_id} = shape_details

    function handle_border_box(){
        if(show_border_box=='none'){
            setshow_border_box('flex')
        }
        else{
            setshow_border_box('none')
        }
    }

    function border_types(border_name , Border_icon){
        return(
            <button className={shapes_css.border_types_comps} >
                <div className={shapes_css.selected_border} id={border_name}><Tick fontSize='small'/></div>
                <div className={shapes_css.border_label_wrap}>
                    <div className={`${shapes_css.border_label_comps} ${shapes_css.border_icon}`}>{<Border_icon/>}</div>
                    <div className={`${shapes_css.border_label_comps} ${shapes_css.label}`}>{border_name}</div>
                </div>
            </button>
        )
    }

    function border_types_box(){
        return(
            <div id={shapes_css.border_types_wrap} style={{display:show_border_box}}>
                <div id={shapes_css.border_types}>
                    {border_types('All' , Border)}
                    {border_types('Left' , Border_left)}
                    {border_types('Right' , Border_right)}
                    {border_types('Top' , Border_top)}
                    {border_types('Bottom' , Border_bottom)}
                </div>
            </div>
        )
    }


  function specs_components(Comp_name , transform_property_value){
    if(typeof(Comp_name)=="string"){
        return(
            <div className={shapes_css.specs_comps}>
                <div className={shapes_css.specs_comps_label}>{Comp_name.toUpperCase()}</div>
                <div className={shapes_css.specs_comps_input}><input name={Comp_name.toLowerCase()} type="text" value={transform_property_value} /></div>
            </div>
        )
    }
    else{
        return(
            <div className={shapes_css.specs_comps}>
                <div className={shapes_css.specs_comps_label}>{<Comp_name fontSize='small'/>}</div>
                <div className={shapes_css.specs_comps_input}><input name='angle' type="text" value={transform_property_value} /></div>
            </div>            
        )
    }
   
       
    
  }

  return (
    <>
    {
        shape_details!=null?
        <div id={shapes_css.main}>
        <div className={shapes_css.main_comps} id={shapes_css.shapes_specs_box}>
            {/* Box for specifications */}
            <div className={`${shapes_css.shapes_specs_comps} ${shapes_css.heading}`}>Specifications</div>
            <div className={shapes_css.shapes_specs_comps} id={shapes_css.specs}>
                {specs_components('X' , x)}
                {specs_components('Y' , y)}
                {specs_components('W' , width)}
                {specs_components('H' , height)}
                {specs_components(Angle , 5)}
            </div>

            {/* For filling color */}
            <div className={`${shapes_css.shapes_specs_comps} ${shapes_css.heading}`}>Fill</div>
            <div className={`${shapes_css.shapes_specs_comps} ${shapes_css.fill_specs}`}>
                <label htmlFor={shapes_css.color_box}></label>
                <input type="color" id={shapes_css.color_box} name="color_box" value={shape_details.fill_color}/>
                <input type="text" 
                 name='color_value'
                //  onChange={(e)=>{handle_color_value(e)}} 
                 value={shape_details.fill_color} 
                 id={shapes_css.color_value} />
            </div>

            {/* For Stroke */}
            <div className={`${shapes_css.shapes_specs_comps} ${shapes_css.heading}`}>Stroke</div>
            <div className={`${shapes_css.shapes_specs_comps} ${shapes_css.fill_specs}`} id={shapes_css.stroke_block}>
                <div className={shapes_css.fill_specs_comps} id={shapes_css.fill_specs_color_box}>
                    <label htmlFor={shapes_css.color_box}></label>
                    <input type="color" id={shapes_css.color_box} name="color_box" value={shape_details.stroke_color}/>
                    <input type="text" 
                    name='color_value'
                    //  onChange={(e)=>{handle_color_value(e)}} 
                    value={shape_details.stroke_color} 
                    id={shapes_css.color_value} />
                </div>

                <div className={shapes_css.fill_specs_comps} id={shapes_css.fill_specs_stroke}>
                    <div className={shapes_css.specs_comps_label}><Stroke_width fontSize='small'/></div>
                    <div className={shapes_css.specs_comps_input}><input type="text" value={5} /></div>
                </div>

                <div className={shapes_css.specs_comps_label} id={shapes_css.border}>
                    <Border fontSize='small' onClick={handle_border_box}/>
                    {border_types_box()}
                </div>
                
            </div>


        </div>
    </div>
    :
    <></>
    }
    </>
    
  )
}

export default Shapes_formatter