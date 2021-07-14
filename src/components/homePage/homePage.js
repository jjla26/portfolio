import React from 'react'

import Navigation from '../navigation/Navigation'
import Banner from '../banner/Banner'
import About from '../about/About'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import ThemeSwitch from '../themeSwitch/ThemeSwitch'

export default function HomePage(props) {
  const { switchValue, handleSwitch } = props

  return (
    <div>
      <ThemeSwitch handleSwitch={handleSwitch} switchValue={switchValue} />
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
