import React, { useEffect, useRef } from 'react'
import cssClass from './toy.module.scss';

type Props = {
  fallTime: number,
  fallDistance: number,
  size: number,
  iconClass: string,
  left: number,
  wait: number,
  color: string,
}

const Toy = (props: Props) => {

  const toyRef = useRef<HTMLElement>(null);

  useEffect(()=> {
    setTimeout(() => {
      toyRef.current?.style.setProperty('top', `${props.fallDistance}vh`)
    }, props.wait * 1000)
  }, [])

  return (
    <i className={`${cssClass.toy} ${props.iconClass}`} style={
      {
        fontSize: `${props.size}vh`,
        transition: `top ${props.fallTime}s`,
        left: `${props.left}vh`,
        color: props.color
      }
    } ref={toyRef}></i>
  )
}

export default Toy