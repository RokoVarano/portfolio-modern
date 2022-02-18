import React, { useEffect, useRef } from 'react'
import cssClass from './toy.module.scss';

type Props = {
  size: number,
  iconClass: string,
  color: string,
  opacity: number,
}

const Toy = (props: Props) => {

  const toyRef = useRef<HTMLElement>(null);

  // const fall = () => {
  //   if (props.fall) setTimeout(() => {
  //     toyRef.current?.style.setProperty('transition', `top ${props.fall?.time}vh ease-out`);
  //     toyRef.current?.style.setProperty('top', `0vh`);
  //   }, props.fall.wait * 1000)
  // }

  // useEffect(()=> {
  //   fall();
  // }, [])

  return (
    <i className={`${cssClass.toy} ${props.iconClass}`} style={
      {
        fontSize: `${props.size}vh`,
        color: props.color,
        opacity: props.opacity,
      }
    } ref={toyRef}></i>
  )
}

export default Toy