import React, { useEffect, useState } from 'react'

import Navigation from '../navigation/Navigation'
import Banner from '../banner/Banner'
import About from '../about/About'
import Footer from '../footer/Footer'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import ThemeSwitch from '../themeSwitch/ThemeSwitch'

export default function HomePage() {

  const [ switchValue, setSwitchValue ] = useState(false)

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        setSwitchValue(true)
      }
    }
  }, [])

  const handleSwitch = e => {
    setSwitchValue(e.target.checked)
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <div>
      <ThemeSwitch handleSwitch={handleSwitch} switchValue={switchValue} />
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer dark={switchValue} />
    </div>
  )
}
