import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configuratestore';
import cssClass from './phoneMenu.module.scss';
import { appear, disappear, hideInLeft, showfromLeft } from './tricks';
import UISlice from '../redux/UISlice';

const PhoneMenu = () => {
    const menu = useSelector((state: RootState) => state.ui.menu);
    const menuRef = useRef<HTMLUListElement>(null);
    const dispatch = useDispatch();
    const { toggleMenu } = UISlice.actions;

    useEffect(()=>{
        if (!menu) {
            showfromLeft(menuRef);
            appear(menuRef);            
        };
        if (menu) {
            hideInLeft(menuRef);
            disappear(menuRef);
        };
    }, [menu])

  return (
    <ul className={cssClass.phonemenu} ref={menuRef}>
        <li><a href="#aboutMe" onClick={()=> dispatch(toggleMenu())}><h2>About Me</h2></a></li>
        <li><a href="#projects" onClick={()=> dispatch(toggleMenu())}><h2>Projects</h2></a></li>
        <li><a href="#certifications" onClick={()=> dispatch(toggleMenu())}><h2>Certifications</h2></a></li>
        {/* Referrals */}
        <li><a href="#contactMe" onClick={()=> dispatch(toggleMenu())}><h2>Contact Me</h2></a></li>
        <li><a href="#resume" onClick={()=> dispatch(toggleMenu())}><h2>Resume</h2></a></li>
    </ul>
  )
}

export default PhoneMenu