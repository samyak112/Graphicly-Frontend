import React from 'react'
import homecss from '../Home/home.module.css'
import logo from '../../Images/logo.png'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id={homecss.main}>
            <nav id={homecss.navbar}>
    
              {/* left part */}
                <div className={homecss.nav_comps} id={homecss.nav_left}>
                  <img id={homecss.logo_div} src={logo} alt="" />
                </div>
    
                {/* right part */}
                <div className={homecss.nav_comps} id={homecss.nav_right}>
                  <Link to={'/editor'} className={homecss.right_nav_comps} id={homecss.new_project}>
                    <AddIcon></AddIcon> New Project
                  </Link>
                  <div className={homecss.right_nav_comps} id={homecss.logout}>
                    <LogoutIcon></LogoutIcon>
                  </div>
                </div>
    
            </nav>
    
            <div id={homecss.body}>
    
              {/* recent design section */}
              <section id={homecss.recent_designs} className={homecss.body_comps}>
                <div className={`${homecss.des_comps} ${homecss.des_heading}`}>Recents</div>
                <div className={`${homecss.des_comps} ${homecss.des_content}`}>
    
                  {/* recent design card */}
                  <div className={homecss.design_card}>
                    <div className={`${homecss.design_card_comps} ${homecss.design_image}`}></div>
                    <div className={`${homecss.design_card_comps} ${homecss.design_details}`}>
                      <div className={homecss.design_details_wrap}>
                        <div className={`${homecss.design_details_comps} ${homecss.design_title}`}>Untitled</div>
                        <div className={`${homecss.design_details_comps} ${homecss.design_timestamp}`}>Edited 17 hours ago</div>
                      </div>
                    </div>
                  </div>
    
                </div>
              </section>
    
              <section id={homecss.all_designs} className={homecss.body_comps}>
                {/* All designs Section */}
              <div className={`${homecss.des_comps} ${homecss.des_heading}`}>All Designs</div>
                <div className={`${homecss.des_comps} ${homecss.des_content}`}>
    
                  {/* ALl designs card */}
                  <div className={homecss.design_card}>
                    <div className={`${homecss.design_card_comps} ${homecss.design_image}`}></div>
                    <div className={`${homecss.design_card_comps} ${homecss.design_details}`}>
                      <div className={homecss.design_details_wrap}>
                        <div className={`${homecss.design_details_comps} ${homecss.design_title}`}>Untitled</div>
                        <div className={`${homecss.design_details_comps} ${homecss.design_timestamp}`}>Edited 17 hours ago</div>
                      </div>
                    </div>
                  </div>
    
                </div>
              </section>
            </div>
        </div>
      )
}

export default Home