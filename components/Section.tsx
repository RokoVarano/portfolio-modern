import React from 'react';
import cssClass from './section.module.scss';

type Props = {
    bgColor: string,
    children: JSX.Element[] | JSX.Element
    id: string
}

const Section = (props: Props) => {
  return (
    <div className={cssClass.section} id={props.id} style={{backgroundColor: props.bgColor}}>
        {props.children}
    </div>
  )
}

export default Section