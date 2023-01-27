import React from 'react'
import dashboardcss from '../Dashboard/Dashboard.module.css'
import logo from '../../Images/logo.png'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';

function dashboard() {
  return (
    <div id={dashboardcss.main}>
        <nav id={dashboardcss.navbar}>

          {/* left part */}
            <div className={dashboardcss.nav_comps} id={dashboardcss.nav_left}>
              <img id={dashboardcss.logo_div} src={logo} alt="" />
            </div>

            {/* right part */}
            <div className={dashboardcss.nav_comps} id={dashboardcss.nav_right}>
              <div className={dashboardcss.right_nav_comps} id={dashboardcss.new_project}>
                <AddIcon></AddIcon> New Project
              </div>
              <div className={dashboardcss.right_nav_comps} id={dashboardcss.logout}>
                <LogoutIcon></LogoutIcon>
              </div>
            </div>

        </nav>

        <div id={dashboardcss.body}>

          {/* recent design section */}
          <section id={dashboardcss.recent_designs} className={dashboardcss.body_comps}>
            <div className={`${dashboardcss.des_comps} ${dashboardcss.des_heading}`}>Recents</div>
            <div className={`${dashboardcss.des_comps} ${dashboardcss.des_content}`}>

              {/* recent design card */}
              <div className={dashboardcss.design_card}>
                <div className={`${dashboardcss.design_card_comps} ${dashboardcss.design_image}`}></div>
                <div className={`${dashboardcss.design_card_comps} ${dashboardcss.design_details}`}>
                  <div className={dashboardcss.design_details_wrap}>
                    <div className={`${dashboardcss.design_details_comps} ${dashboardcss.design_title}`}>Untitled</div>
                    <div className={`${dashboardcss.design_details_comps} ${dashboardcss.design_timestamp}`}>Edited 17 hours ago</div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section id={dashboardcss.all_designs} className={dashboardcss.body_comps}>
            {/* All designs Section */}
          <div className={`${dashboardcss.des_comps} ${dashboardcss.des_heading}`}>All Designs</div>
            <div className={`${dashboardcss.des_comps} ${dashboardcss.des_content}`}>

              {/* ALl designs card */}
              <div className={dashboardcss.design_card}>
                <div className={`${dashboardcss.design_card_comps} ${dashboardcss.design_image}`}></div>
                <div className={`${dashboardcss.design_card_comps} ${dashboardcss.design_details}`}>
                  <div className={dashboardcss.design_details_wrap}>
                    <div className={`${dashboardcss.design_details_comps} ${dashboardcss.design_title}`}>Untitled</div>
                    <div className={`${dashboardcss.design_details_comps} ${dashboardcss.design_timestamp}`}>Edited 17 hours ago</div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
    </div>
  )
}

export default dashboard