import React from 'react';
import cssClass from './certificates.module.scss';

type Props = {
    data: {
        logo: string,
        color: string,
        title: string,
        description: string,
        link: string,
    }
}

const Certificates = (props: Props) => {
  return (
    <div className={cssClass.certificate} style={{
        color: props.data.color,
        border: `${props.data.color} 1vh solid`
    }}>
        <a href={props.data.link} target="_blank" className={cssClass.frame} rel="noreferrer" style={{border: `${props.data.color} 1px solid`}}>
            <div className={cssClass.header}>
                <div className={cssClass.picture} style={{backgroundImage: `url(${props.data.logo})`}}>{' '}</div>
                <h3 className={cssClass.title}>{props.data.title}</h3>
            </div>
            <p className={cssClass.description}>{props.data.description}</p>
        </a>
        <i className={`${cssClass.check} fas fa-solid fa-check`}></i>
    </div>
  )
}

export default Certificates