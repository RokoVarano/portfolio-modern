import cssClass from './tricks.module.scss';

export const appear = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.add(cssClass.dissapear);
    setTimeout(() => {
        ref.current?.classList.add(cssClass.nodisplay)
    }, 500);
}

export const disappear = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.remove(cssClass.nodisplay);
    setTimeout(() => {
        ref.current?.classList.remove(cssClass.dissapear);
    }, 100);
  
}

export const hideInLeft = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.remove(cssClass.hideinleft)
}

export const showfromLeft = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.add(cssClass.hideinleft)
}