import React, { useEffect, useState } from 'react'
import homecss from '../Home/home.module.css'
import logo from '../../Images/logo.png'
import Add from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import no_project from '../../Images/no_project.png'
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import getData from '../../database/open_project';
import { new_canvas_details } from '../../Components/Redux/Elements_specs';
import { useDispatch } from 'react-redux';

function Home() {

  const [canvas_projects, setcanvas_projects] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    getData().then((canvas_data)=>{
      setcanvas_projects(canvas_data)
    })
    dispatch(new_canvas_details(null))
  },[])

function convertToDateString(timestamp) {
  const date = new Date(timestamp);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function return_time_for_recents(timestamp){
  let date = Date.now() - timestamp
  if(date < 3600000){
    if(Math.round(date/60000)==0){
      return(
        <>Edited just now!</>
      )
    }
    else{
      return(
        <>Edited {Math.round(date/60000)} minutes ago</>
        )
      }
  }
  else{
    return(
      <>Edited {Math.round(date/3600000)} Hour(s) ago</>
    )
  }
}

function design_card(elem){
  return(
    <Link to={`/editor/${elem.canvas_id}`} className={homecss.design_card}>
        <div className={`${homecss.design_card_comps} ${homecss.design_image}`}></div>
        <div className={`${homecss.design_card_comps} ${homecss.design_details}`}>
          <div className={homecss.design_details_wrap}>
            <div className={`${homecss.design_details_comps} ${homecss.design_title}`}>{elem.canvas_name}</div>
            <div className={`${homecss.design_details_comps} ${homecss.design_timestamp}`}>
              {
                Date.now() - elem.timestamp < 86400000?
                <>
                {return_time_for_recents(elem.timestamp)}
                </>
                :
                <>
                Edited on {convertToDateString(elem.timestamp)}
                </>
              }
            </div>
          </div>
        </div>
      </Link>
  )
}

    return (
        <div id={homecss.main}>
            <nav id={homecss.navbar}>
    
              {/* left part */}
                <div className={homecss.nav_comps} id={homecss.nav_left}>
                  <img id={homecss.logo_div} src={logo} alt="" />
                </div>
    
                {/* right part */}
                <Link to={`/editor/${'new'}`} className={homecss.nav_comps} id={homecss.nav_right}>
                  <div className={homecss.right_nav_comps} id={homecss.new_project}>
                    <Add></Add> New Project
                  </div>
                </Link>
    
            </nav>
    
            <div id={homecss.body}>

              {
                canvas_projects.length==0?
                <div id={homecss.empty_project_wrap}>
                  <div id={homecss.empty_project}>
                    <div className={homecss.empty_project_comps} id={homecss.empty_project_comp_1}>
                      <img id={homecss.empty_project_pic} src={no_project} alt="" />
                    </div>
                    <div className={homecss.empty_project_comps} id={homecss.empty_project_comp_2}>
                    It looks like you don’t have any Projects yet.<br/>
                    Add a new Project to get started!
                    </div>
                    <div id={homecss.new_project_button_wrap}>
                      <Link style={{textDecoration:'none'}} to={`/editor/${'new'}`}>
                        <button id={homecss.new_project_button} ><Add/> New Project</button>
                      </Link>
                    
                  </div>
                  </div>
                  
                </div>
                :
                <>
                {/* recent design section */}
              <section id={homecss.recent_designs} className={homecss.body_comps}>
              <div className={`${homecss.des_comps} ${homecss.des_heading}`}>
                Recents 
                <Tooltip title="Shows Projects of only last hour" arrow>
                  <IconButton>
                    <InfoIcon fontSize='small' htmlColor='#626465'/>
                  </IconButton>
                </Tooltip>
              </div>
              <div className={`${homecss.des_comps} ${homecss.des_content}`}>
  
                
                {
                  /* recent design card */
                  canvas_projects.map((elem,index)=>{
                    if(Date.now() - elem.timestamp < 3600000){
                      return(
                        <>
                        {design_card(elem)}
                        </>
                      )
                    }
                  })
                }
          
              </div>
            </section>
  
            <section id={homecss.all_designs} className={homecss.body_comps}>
              {/* All designs Section */}
            <div className={`${homecss.des_comps} ${homecss.des_heading}`}>All Designs</div>
              <div className={`${homecss.des_comps} ${homecss.des_content}`}>
  
                {
                  /* ALl designs card */
                  canvas_projects.map((elem,index)=>{
                      return(
                        <>
                        {design_card(elem)}
                        </>
                      )
                  })
                }
                
  
              </div>
            </section>
            </>

              }
    
              
            </div>
        </div>
      )
}

export default Home