import cssClass from './tricks.module.scss';

export const appear = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.add(cssClass.adddisplay)
    setTimeout(() => {
        ref.current?.classList.add(cssClass.appear);
    }, 300);
}

export const disappear = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.remove(cssClass.appear);
    setTimeout(() => {
        ref.current?.classList.remove(cssClass.adddisplay);
    }, 300);
  
}

export const hideInLeft = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.remove(cssClass.hideinleft)
}

export const showfromLeft = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.classList.add(cssClass.hideinleft)
}

export const colors = {
    salmon: 'rgba(250, 128, 114, 1)',
    teal: 'rgba(0, 128, 128, 1)',
    orange: 'rgba(252, 196, 76, 1)',
    transparent: 'rgba(255, 255, 255, 1)',
    whatsapp: '#2A8B82',
    gmail: '#F50E01',
    linkedin: '#2380B8',
  }

export const iconClasses = {
    star: 'fas fa-star',
    js: "fab fa-js",
    sass: "fab fa-sass",
    html: "fab fa-html5",
    css: "fab fa-css3-alt"
}