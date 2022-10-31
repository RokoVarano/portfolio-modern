import React, { useRef } from 'react'
import cssClass from './cv.module.scss';
import { useReactToPrint } from 'react-to-print';

type Props = {
  es?: boolean
}

const CV = ({ es }: Props) => {
    const resumeRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
      content: () => resumeRef.current
    });
    
  return (
    <>
    <div style={{display: 'none'}}>
        <div className={cssClass.frame} ref={resumeRef}>
            <div className={cssClass.header}>
              <h2 className={cssClass.title}>Rodrigo Ibaceta</h2>
              <h4 className={cssClass.subtitle}>{ es ? `Desarrollador Web Full-Stack` : `FullStack Web Developer`}</h4>
              <h6 className={cssClass.rut}>Rut: 16.209.189-1</h6>
            </div>
            <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
                  <p style={{display: 'flex', justifyContent: "space-between"}}>
                    <p><a href='https://www.linkedin.com/in/rodrigo-ibaceta/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></p>
                    <p><i className="fas fa-phone"></i>{` +56973445869`}</p>
                    <p><i className="fas fa-envelope"></i>{' rodrigo.ibaceta01@gmail.com'}</p>
                  </p>
            </div>
            <h4 className={cssClass.sectionheader}>{es ? `Perfil` : `Profile`}</h4>
            <p>{es ?
              `Un desarrollador web entusiasta con 2.5 años de experiencia tanto en front-end como en back-end,
              pero tambien proficiente en Python y bases de datos Postgresql.
              Conocedor de acquitectura MVC, desarrollo de APIs, arcquitectura REST, Postgresql y testing.`
              : `An enthusiastic web developer with 2.5 years of experience in both front-end and back-end,
              but also proficient in Python and Postgresql databases.
              Knowledgeable in MVC architecture, API development, REST architecture, Postgresql and testing.`}<br/>
                </p>
            <h4 className={cssClass.sectionheader}>{es ? `Experiencia` : `Experience`}</h4>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <p style={{marginBottom: `0.5vh`}}><b>{es ? `Desarrollador de Software Contratista` : `Software Developer Contractor`}</b></p>
              <p style={{fontSize: `1.5vh`}}>{es ? 'A contrata' : 'Independent Contractor'}{es ? `Agosto 2022 - Presente` : `August 2022 - Present`}</p>
              <p style={{marginLeft: '4vh', fontSize: `1.5vh`}}>
                <i className="fas fa-check"></i> {es ? `Desarrollé un microservicio shim gRPC => REST con cache en Scala usando Mill como herramienta de construccion`:  
                `I developed a Scala gRPC => REST cached shim as a microservice with Mill as the build tool`} <br/>
              </p>
            <p style={{marginBottom: `0.5vh`}}><b>{es ? `Desarrollador de Software` : `Software Developer`}</b></p>
              <p style={{fontSize: `1.5vh`}}>Shipit, {es ? `Abril 2022, Julio 2022` : `April 2022, July 2022`}</p>
              <p style={{marginLeft: '4vh', fontSize: `1.5vh`}}>
                <i className="fas fa-check"></i> {es ? `Desarrollé nuevas vistas y funcionalidades en el frontend usando NextJs, React y Redux`:  `I developed new views and functionalities in the frontend using NextJs, React and Redux.`} <br/>
                <i className="fas fa-check"></i> {es ? `Implementé soluciones en el backend usando Ruby on Rails, incluyendo tests usando Rspec y Capistrano`:  `Implemented solutions in the backend using Ruby on Rails, including tests using Rspec and Capistrano`} <br/>
                <i className="fas fa-check"></i> {es ? `Analicé y diagnostiqué problemas en bases de datos usando Postgres y ActiveRecord`:  `Analized and diagnosed problems in databases using Postgres and ActiveRecord`} <br/>
              </p>
              <p style={{marginBottom: `0.5vh`}}><b>{es ? `Desarrollador de Software` : `Software Developer`}</b></p>
              <p style={{fontSize: `1.5vh`, }}>EXE.cl, {es ? `Septiembre 2018, Septiembre 2020` : `September 2018, September 2020`}</p>
              <p style={{marginLeft: '4vh', fontSize: `1.5vh`}}>
                <i className="fas fa-check"></i> {es ? `Ayudé a crear un gestor documental para organismos del gobierno usando Java y un framework de legado, Seam`: `Helped creating a document handler for government organisms using Java and a legacy framework`} <br/>
                <i className="fas fa-check"></i> {es ? `Recopilé datos de entrenamiento para un software de reconocimiento de imagenes` : `Gathered training data for image recognition software`}<br/>
                <i className="fas fa-check"></i> {es ? `Desarrollé una aplicación mobil de tickets de turno que consumia datos de una API del gobierno` : `Developed a mobile turn-ticket app that fetched personal information from a government API`}<br/>
              </p>
            </div>
            <div className={cssClass.pagebreak}>
              <h4 className={cssClass.sectionheader}>{es ? `Lenguajes y FrameWorks` : `Languages and Frameworks`}</h4>
              <div className={cssClass.skillTable}>
                <div style={{display: 'flex'}}>
                  <p className={cssClass.content}>
                    <i className="fab fa-js"></i> JavaScript<br/>
                    <i className="fab fa-js"></i> TypeScript<br/>
                    <i className="fab fa-react"></i> React/Redux <br/>
                    <i className="fab fa-react"></i> NextJS <br/>
                  </p>
                  <p className={cssClass.content}>
                    <i className="fas fa-gem"></i> Ruby <br/>
                    <i className="fas fa-gem"></i> Ruby on Rails
                  </p>
                  <p className={cssClass.content}>
                    <i className="fab fa-html5"></i> HTML <br/>
                    <i className="fab fa-css3-alt"></i> CSS/SASS <br/>
                    <i className="fab fa-git"></i> GIT<br/>
                    <i className="fas fa-code"></i> gRPC<br/>
                  </p>
                  <p className={cssClass.content}>
                    <i className="fas fa-code"></i> Scala<br/>
                    <i className="fas fa-code"></i> Akka<br/>
                    <i className="fas fa-code"></i> Mill<br/>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className={cssClass.sectionheader}>{es ? `Educación`: `Education`}</h4>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <p style={{marginBottom: `0.5vh`}}>
                  <b>{es ? `Desarrollador Web Full-Stack.`: `Full-Stack Web Developer.`}</b>
                  <p style={{fontSize: `1.5vh`, fontWeight: 'bold'}}>RockTheJVM, {es ? `Agosto 2022, Presente` : `August 2022, Present`}</p>
                </p>
                <p style={{marginBottom: `0.5vh`}}>
                  <p style={{fontSize: `1.5vh`, fontWeight: 'bold'}}>Microverse, {es ? `Noviembre 2020, Diciembre 2021` : `November 2020, December 2021`}</p>
                  <p style={{marginLeft: '4vh'}}>
                    <i className="fas fa-code"></i> {es ? `Curso remoto de desarrollo de software usando React/Redux, Ruby on Rails, HTML, CSS/SASS, SQL, GIT.` : `Remote course for software development using React/redux, Ruby on Rails, HTML, CSS/SASS, SQL, GIT.`}<br/>
                    <i className="fas fa-code"></i> {es ? `Más de 1300 horas desarrollando proyectos en parejas y solo con personas de todo el mundo, con plazos semanales`:`More than 1300 hours developing projects in pairs and alone from countires all over the world, with
                      weekly deadlines`} <br/>
                    <i className="fas fa-certificate" style={{marginRight: `0.5vh`}}></i><a href="https://www.credential.net/profile/rodrigoandresibacetajimenez188513/wallet" target="_blank" rel="noreferrer"><b>{es ? `Certificados` : `Certificates`}</b></a>
                  </p>
                </p>
                <p>
                  <p style={{marginBottom: `0.5vh`, fontWeight: 'bold'}}><b>{es ? `Veterinario.`: `Veterinarian.`}</b></p>
                  <p style={{fontSize: `1.5vh`, marginLeft: '4vh'}}>{es ? `Master en Medio Ambiente y Desarrollo Sustentable` : `Masters in Environment and Sustainable Development`}, 2016. Universidad Mayor, Chile </p>
                </p>
              </div>
            </div>
            <h4 className={cssClass.sectionheader}>{es ? `Otras habilidades e intereses` : `Other skills and Interests`}</h4>
            <p>
              <i className="fas fa-comment"></i> <b>{es ? `Bilingüe:` : `Bilingual:`}</b> {es ? `Inglés fluido` : `Fluent English, Native Spanish`} <br/>
              <i className="fas fa-dragon"></i> <b>Hobbies:</b> {es ? `Desarrollo de historias cooperativo, videojuegos, naturaleza`: `Cooperative Storytelling, VideoGames, Nature`}
            </p>
            <p style={{fontSize: '1.5vh', alignSelf: 'center', marginBottom: '0', color: "#0b81af"}}>*{es ? `Este CV fué creado usando `: `This CV was created using `} <i className="fab fa-react" style={{width: 'auto', marginRight: '0'}}></i> React</p>
        </div>
    </div>
    <button onClick={handlePrint} className={cssClass.printbutton}><i className="fas fa-file-alt" style={{marginRight: `1vh`}}></i>{es ? `Curriculum en Español` : `Resume in English`}</button>
    </>
  )
}

export default CV