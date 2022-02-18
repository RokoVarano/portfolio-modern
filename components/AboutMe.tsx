import React from 'react'
import cssClass from './aboutme.module.scss';
import Toy from './Toy';
import { colors, iconClasses } from './tricks';

type Props = {
}

const AboutMe = (props: Props) => {
  return (
    <div className={cssClass.aboutme}>
        <h1>
          <div className={cssClass.star}>
            <Toy size={10} color={colors.teal} opacity={0.5} iconClass={iconClasses.star}/>
          </div>
          Rodrigo Ibaceta
        </h1>
        <h3>Full-Stack Web Developer using React, Ruby on Rails, and more</h3>
    </div>
  )
}

export default AboutMe