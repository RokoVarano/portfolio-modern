import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configuratestore';
import cssClass from './phoneMenu.module.scss';
import { appear, disappear, hideInLeft, showfromLeft } from './tricks';

const PhoneMenu = () => {
    const menu = useSelector((state: RootState) => state.ui.menu);
    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(()=>{
        if (menu) {
            showfromLeft(menuRef);
            appear(menuRef);            
        };
        if (!menu) {
            hideInLeft(menuRef);
            disappear(menuRef);
        };
    }, [menu])

  return (
    <ul className={cssClass.phonemenu} ref={menuRef}>
        <li><h2>About Me</h2></li>
        <li><h2>Projects</h2></li>
        <li><h2>Certifications</h2></li>
        {/* Referrals */}
        <li><h2>Contact Me</h2></li>
        <li><h2>Resume</h2></li>
    </ul>
  )
}

export default PhoneMenu