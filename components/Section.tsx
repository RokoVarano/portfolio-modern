import React from 'react';
import cssClass from './section.module.scss';

type Props = {
    bgColor: string,
    children: JSX.Element[] | JSX.Element
}

const Section = (props: Props) => {
  return (
    <div className={cssClass.section} style={{backgroundColor: props.bgColor}}>
        {props.children}
    </div>
  )
}

export default Section