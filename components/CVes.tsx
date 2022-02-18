import React, { useRef } from 'react'
import cssClass from './cv.module.scss';
import { useReactToPrint } from 'react-to-print';

const CVes = () => {
    const resumeRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
      content: () => resumeRef.current
    });

    const sectionHeader = (title: string) => <h3 className={cssClass.sectionheader}>{title}</h3> 
    
  return (
    <>
    <div style={{display: 'none'}}>
        <div className={cssClass.frame} ref={resumeRef}>
            <div className={cssClass.header}>
              <h2 className={cssClass.title}>Rodrigo Ibaceta</h2>
              <h4 className={cssClass.subtitle}>Desarrollador Full-Stack</h4>
            </div>
            <div style={{display: 'flex', width: '100%'}}>
                  <p>
                    <i className="fas fa-phone"></i> +56973445869 <br/>
                    <i className="fab fa-linkedin"></i> https://www.linkedin.com/in/rodrigo-ibaceta/
                  </p>
                  <p style={{marginLeft: '2.5vh'}}>
                    <i className="fab fa-github"></i> https://github.com/RokoVarano<br/>
                    <i className="fas fa-envelope"></i> rodrigo.ibaceta01@gmail.com
                  </p>
            </div>
            {sectionHeader('Resumen')}
            <p>Desarrollador entusiasta con 2 años de experiencia y un año de aprendizaje en el bootcamp Microverse. Fluido en el uso de React y Ruby on Rails para crear sitios web</p>
            {sectionHeader('Experience')}
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p><b>Desarrollador de Software Junior</b>, Septiembre 2018, Septiembre 2020</p>
              <p style={{marginLeft: '4vh'}}>
                <i className="fas fa-check"></i> Ayudé a crear un gestor documental para organismos del gobierno usando Java y un framework de legado<br/>
                <i className="fas fa-check"></i> Creé datos de entrenamiento para un software de reconocimiento de imagenes<br/>
                <i className="fas fa-check"></i> Desarrollé una app mobil para tickets de turno que obtiene datos de información personal desde una API del gobierno<br/>
                <i className="fas fa-check"></i> Participé en varios proyectos experimentales de la empresa
              </p>
            </div>
            {sectionHeader('Lenguajes y Frameworks')}
            <div className={cssClass.skillTable}>
              <div style={{display: 'flex'}}>
                <p className={cssClass.content}>
                  <i className="fab fa-js"></i> JavaScript <br/>
                  <i className="fab fa-react"></i> React/Redux <br/>
                  <i className="fab fa-react"></i> NextJS <br/>
                </p>
                <p className={cssClass.content}>
                  <i className="fab fa-python"></i> Python <br/>
                  <i className="fas fa-gem"></i> Ruby <br/>
                  <i className="fas fa-gem"></i> Ruby on Rails
                </p>
                <p className={cssClass.content}>
                  <i className="fab fa-html5"></i> HTML <br/>
                  <i className="fab fa-css3-alt"></i> CSS <br/>
                  <i className="fab fa-git"></i> GIT
                </p>
              </div>
            </div>
            {sectionHeader('Educación')}
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p>
                <b>Bootcamp Microverse</b>, Noviembre 2020, Diciembre 2021<br/>
                <i className="fas fa-certificate"></i> <b>Certificados:</b> https://www.credential.net/profile/rodrigoandresibacetajimenez188513/wallet
              </p>
            </div>
            {sectionHeader('Habilidades, Experiencia e Intereses adicionales')}
            <p>
              <i className="fas fa-comment"></i> <b>Bilingüe:</b> Inglés fluido, Español nativo <br/>
              <i className="fas fa-dog"></i> <b>Veterinario:</b> Masters en Medio Ambiente y Desarrollo Sustentable. Universidad Mayor, Chile <br/>
              <i className="fas fa-dragon"></i> <b>Hobbies:</b> Desarrollo de Historias cooperativo, Videojuegos, Naturaleza
            </p>
            <p style={{fontSize: '1.5vh', alignSelf: 'center', marginBottom: '0', color: "#0b81af"}}>Este CV fue creado usando <i className="fab fa-react"></i> React</p>
        </div>
    </div>
    <button onClick={handlePrint}>Imprimir!</button>
    </>
  )
}

export default CVes;