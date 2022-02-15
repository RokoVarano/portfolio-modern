import React, { useEffect, useRef } from 'react'
import cssClass from './toy.module.scss';

type Props = {
  fallTime: number,
  fallDistance: number,
  size: number,
  iconClass: string,
  left: number
  wait: number
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
      }
    } ref={toyRef}></i>
  )
}

export default Toy