import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cssClass from './phoneMenuButton.module.scss';
import { RootState } from '../redux/configuratestore';
import UISlice from '../redux/UISlice';

type Props = {}

function PhoneMenuButton({}: Props) {
  const { toggleMenu } = UISlice.actions;
  const iconRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const menu = useSelector((state: RootState) => state.ui.menu)

  const openMenu = () => {
    iconRef.current?.classList.add(cssClass.open);
  }

  const closeMenu = () => {
    iconRef.current?.classList.remove(cssClass.open);
  }

  useEffect(()=>{
    console.log("Menu", menu)
    if (menu) openMenu();
    if (!menu) closeMenu();
  }, [menu])

  return (
    <div id="phonenavbutton" className={cssClass.navphonebutton} ref={iconRef} onClick={() => dispatch(toggleMenu())}>
        <i className={`${cssClass.buttonIcon} fas fa-caret-down`} ></i>
    </div>
  )
}

export default PhoneMenuButton