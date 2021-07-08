import React from 'react'

import './themeSwitch.css'

export default function ThemeSwitch(props) {
  const { handleSwitch, switchValue } = props
  
  return (
    <div className="theme-switch-wrapper">
      <p>Enable Dark Mode</p>
      <label className="theme-switch" htmlFor="checkbox" >
        <input id="checkbox" type="checkbox" checked={switchValue} onChange={handleSwitch} />
        <div className="slider round"></div>
      </label>
    </div>
  )
}
