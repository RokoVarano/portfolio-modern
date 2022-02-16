import React from 'react';
import cssClass from './section.module.scss';

type Props = {
    children: JSX.Element[] | JSX.Element
    id: string
}

const Section = (props: Props) => {
  return (
    <div className={cssClass.section} id={props.id}>
        {props.children}
    </div>
  )
}

export default Section