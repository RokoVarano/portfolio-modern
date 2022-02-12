import React, { useEffect, useRef, useState } from 'react';
import cssClass from './navphone.module.scss';

type Props = {}

function NavPhone({}: Props) {
  const iconRef = useRef<HTMLElement>(null);

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    console.log('open')
    iconRef.current?.classList.add(cssClass.open);
  }

  const closeMenu = () => {
    console.log('close')
    iconRef.current?.classList.remove(cssClass.open);
  }

  useEffect(()=>{
    if (open) { openMenu() } else { closeMenu() } 
  
  }, [open])

  return (
    <div id="phonenavbutton" className={cssClass.navphonebutton} onClick={() => setOpen(!open)}>
        <i className={`${cssClass.buttonIcon} fas fa-caret-down`} ref={iconRef}></i>
    </div>
  )
}

export default NavPhone