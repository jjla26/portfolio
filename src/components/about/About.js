import React from 'react'
import angularIcon from '../../img/angular.svg'
import nodeIcon from '../../img/node.svg'
import htmlIcon from '../../img/html.svg'
import reactIcon from '../../img/react.svg'
import jestIcon from '../../img/jest.svg'
import cssIcon from '../../img/css.svg'
import railsIcon from '../../img/rails.svg'
import javascriptIcon from '../../img/javascript.svg'
import reduxIcon from '../../img/redux.svg'
import './about.css'

export default function About() {
  return (
    <section id='about' className='about'>
      <h2 className='about__title'>ABOUT</h2>
      <div className='about__content'>
        <div className='about__description'>
            <p>
              Let me give you a short intro about myself: I studied Electronic Enginneering in Venezuela, <a href='https://goo.gl/maps/Jkfdf6aS53Ejz7aR7' target='_blank'>Barquisimeto</a>. My passion has always been Web 
              Development. Therefore I decided to become a Web Developer. My experience comes from doing 
              numerous courses and self-studying.
            </p>
            <p>
              In my journey I have worked for a couple of companies in Santiago de Chile. My main focus is to create Web Pages with 
              an excelent User Experience.
            </p>
        </div>
        <div className='about__skills'>
          <img id='icon1' className='skills_icon' src={angularIcon} alt='angular icon' />
          <img id='icon2' className='skills_icon' src={javascriptIcon} alt='javascript icon' />
          <img id='icon3' className='skills_icon' src={nodeIcon} alt='node icon' />
          <img id='icon4' className='skills_icon' src={htmlIcon} alt='html icon' />
          <img id='icon5' className='skills_icon' src={cssIcon} alt='css icon' />
          <img id='icon6' className='skills_icon' src={jestIcon} alt='jest icon' />
          <img id='icon7' className='skills_icon' src={reduxIcon} alt='redux icon' />
          <img id='icon8' className='skills_icon' src={railsIcon} alt='rails icon' />
          <img id='icon9' className='skills_icon' src={reactIcon} alt='react icon' />
        </div>
      </div>
      <div className='about__cv'>
        <a href='https://career-documents-jjla.s3.eu-central-1.amazonaws.com/CV_Julio_Lopez_l.pdf' target='_blank' rel='noreferrer'>
          Find my resume here!
        </a>
      </div>
    </section>
  )
}
