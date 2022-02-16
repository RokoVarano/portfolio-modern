import React from 'react'
import cssClass from './projects.module.scss';

type Props = {
    color: string,
    left?: boolean,
    data: {
        title: string,
        image: string,
        description: string,
        tryit: string,
        github: string,
    }
}

const Projects = (props: Props) => {
  return (
    <div className={cssClass.folder} style={{alignSelf: props.left ? "flex-start" : "flex-end"}}>
        <h6 className={cssClass.tag} style={{backgroundColor: props.color}}>{props.data.title}</h6>
        <div className={cssClass.card} style={{backgroundColor: props.color}}>
            <div style={{backgroundImage: `url(${props.data.image})`}} className={cssClass.picture} >
            </div>
            <p className={cssClass.description}>{props.data.description}</p>
            <div className='links'>
                <a href={props.data.tryit} target="_blank" rel="noreferrer" style={{marginRight: '1vh'}}><i className="fas fa-solid fa-play"></i></a>
                <a href={props.data.github} target="_blank" rel="noreferrer"><i className="fas fa-solid fa-code"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Projects