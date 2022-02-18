import React from 'react'
import cssClass from './projects.module.scss';
import Toy from './Toy';
import { colors, iconClasses } from './tricks';

type Props = {
    color: string,
    data: {
        title: string,
        image: string,
        description: string,
        tryit: string,
        github: string,
    }
    tech?: Array<string>
}

const Projects = (props: Props) => {

    const tech = () => props.tech?.map((iconString, index) => <i className={iconString} key={index} style={{marginRight: '1vh'}}></i>)

  return (
    <div className={cssClass.folder}>
        <h6 className={cssClass.tag} style={{backgroundColor: props.color, display: 'flex', justifyContent: 'space-between'}}>
            <Toy size={1.5} iconClass={iconClasses.star} opacity={1} color={colors.orange}/>
            {props.data.title}</h6>
        <div className={cssClass.card} style={{backgroundColor: props.color}}>
            <div style={{backgroundImage: `url(${props.data.image})`}} className={cssClass.picture} >
            </div>
            <p className={cssClass.description}>{props.data.description}</p>
            <div className={cssClass.icons}>
                <div className={cssClass.icongroup}>
                    {tech()}
                </div>
                <div className={cssClass.icongroup} style={{color: colors.orange}}>
                    <a href={props.data.tryit} target="_blank" rel="noreferrer" style={{marginRight: '1vh'}}><i className="fas fa-solid fa-play"></i></a>
                    <a href={props.data.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects