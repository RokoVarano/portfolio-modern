import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cssClass from './navphone.module.scss';
import { RootState } from '../redux/configuratestore';
import UISlice from '../redux/UISlice';

type Props = {}

function NavPhone({}: Props) {
  const { toggleMenu } = UISlice.actions;
  const iconRef = useRef<HTMLElement>(null);
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.ui.menu)

  const openMenu = () => {
    console.log("openbutton");
    iconRef.current.classList.add(cssClass.open);
  }

  const closeMenu = () => {
    console.log("closebutton");
    iconRef.current.classList.remove(cssClass.open);
  }

  useEffect(()=>{
    if (menu) openMenu();
    if (!menu) closeMenu();
  }, [menu])

  return (
    <div id="phonenavbutton" className={cssClass.navphonebutton} onClick={() => dispatch(toggleMenu())}>
        <i className={`${cssClass.buttonIcon} fas fa-caret-down`} ref={iconRef}></i>
    </div>
  )
}

export default NavPhone