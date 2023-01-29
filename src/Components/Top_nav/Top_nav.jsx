import React from 'react'
import topnavcss from '../Top_nav/top_nav.module.css'

function Top_nav() {
  return (
    <div id={topnavcss.main}>
      <div className={topnavcss.top_nav_comps} id={topnavcss.top_nav_middle_wrap}>
        <div id={topnavcss.top_nav_middle}>
          Untitled
        </div>
      </div>
    </div>
  )
}

export default Top_nav