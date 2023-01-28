import React from 'react'
import formattercss from '../Formatter/formatter.module.css'

function Right_nav() {
  return (
    <div id={formattercss.main}>
      <div className={formattercss.main_comps} id={formattercss.options}>
        <div className={formattercss.option_comps} id={formattercss.design}>Design</div>
        <div className={formattercss.option_comps} id={formattercss.inspect}>Inspect</div>
      </div>
      <div className={formattercss.main_comps} id={formattercss.formatter_body}></div>
    </div>
  )
}

export default Right_nav