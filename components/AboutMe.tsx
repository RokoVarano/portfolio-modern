import React from 'react'
import cssClass from './aboutme.module.scss';

type Props = {}

const AboutMe = (props: Props) => {
  return (
    <div className={cssClass.aboutme}>
        <h1>Rodrigo Ibaceta</h1>
        <h3>Full-Stack Web Developer using React, Ruby on Rails, and some more</h3>
    </div>
  )
}

export default AboutMe