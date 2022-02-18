import React, { useRef } from 'react'
import cssClass from './cv.module.scss';
import { useReactToPrint } from 'react-to-print';

const CV = () => {
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
              <h4 className={cssClass.subtitle}>FullStack Web Developer</h4>
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
            {sectionHeader('Summary')}
            <p>Enhusiastic developer with 2 years of experience and a year of learning in the Microverse Bootcamp
                Fluid use of React and Ruby on Rails to create web sites</p>
            {sectionHeader('Experience')}
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p><b>Junior Software Developer</b>, September 2018, September 2020</p>
              <p style={{marginLeft: '4vh'}}>
                <i className="fas fa-check"></i> Helped creating a document handler for government organisms using Java and a legacy framework <br/>
                <i className="fas fa-check"></i> Created training data for image recognition software <br/>
                <i className="fas fa-check"></i> Developed a mobile turn-ticket app that fetched personal information from a government API <br/>
                <i className="fas fa-check"></i> Participated in several company side-projects
              </p>
            </div>
            {sectionHeader('Languages and Frameworks')}
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
            {sectionHeader('Education')}
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <p>
                <b>Microverse Bootcamp</b>, November 2020, December 2021<br/>
                <i className="fas fa-certificate"></i> <b>Certificates:</b> https://www.credential.net/profile/rodrigoandresibacetajimenez188513/wallet
              </p>
              <p style={{marginLeft: '4vh'}}>
              <i className="fas fa-code"></i> Remote bootcamp for software development using React, Ruby on Rails, and other technologies <br/>
              <i className="fas fa-code"></i> More than 1300 hours developing projects in pairs and alone from countires all over the world, with
                weekly deadlines
              </p>
            </div>
            {sectionHeader('Additional Skills, Experience, and Interests')}
            <p>
              <i className="fas fa-comment"></i> <b>Bilingual:</b> Fluent English, Native Spanish <br/>
              <i className="fas fa-dog"></i> <b>Veterinarian:</b> Masters in Environment and Sustainable Development. Universidad Mayor, Chile <br/>
              <i className="fas fa-dragon"></i> <b>Hobbies:</b> Cooperative Storytelling, VideoGames, Nature
            </p>
            <p style={{fontSize: '1.5vh', alignSelf: 'center', marginBottom: '0', color: "#0b81af"}}>This CV was created using <i className="fab fa-react"></i> React</p>
        </div>
    </div>
    <button onClick={handlePrint} className={cssClass.printbutton}><i className="fas fa-file-alt"></i> Resume in English</button>
    </>
  )
}

export default CV