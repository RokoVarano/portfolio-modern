import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configuratestore';
import { appear, disappear } from './tricks';
import cssClass from './blurrybg.module.scss';

const BlurryBG = () => {
    const blurryRef = useRef<HTMLDivElement>(null);
    const menu = useSelector((state: RootState) => state.ui.menu)

    useEffect(() => {
        if (menu) appear(blurryRef);
        if (!menu) disappear(blurryRef);
    }, [menu])

    return (
        <div className={cssClass.blurry} ref={blurryRef}/>
    )
}

export default BlurryBG