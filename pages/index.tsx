import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import AboutMe from '../components/AboutMe'
import BlurryBG from '../components/BlurryBG'
import CV from '../components/CV'
import Certificates from '../components/Certificates'
import PhoneMenu from '../components/PhoneMenu'
import PhoneMenuButton from '../components/PhoneMenuButton'
import Projects from '../components/Projects'
import Section from '../components/Section'
import { colors, iconClasses } from '../components/tricks'
import ReactWhatsapp from 'react-whatsapp'

const Home: NextPage = ({ projects, certificates }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div style={{height: '100vh'}}>
      <PhoneMenuButton/>
      <BlurryBG/>
      <PhoneMenu/>
      <div className="indexcontainer">
        <Section id="aboutMe"><AboutMe/></Section>
        <Section id="projects">
          <div style={{height: '10vh'}}>{' '}</div>
          <Projects color={colors.teal} data={projects[0]} tech={[iconClasses.js, iconClasses.sass]}/>
          <Projects color={colors.teal} data={projects[1]} tech={[iconClasses.html, iconClasses.css]}/>
        </Section>
        <Section id="certifications">
          <div style={{height: '10vh'}}>{' '}</div>
          <Certificates data={certificates[0]}/>
        </Section>
        <Section id="contactMe">
          <div style={{height: '10vh'}}>{' '}</div>
            <ReactWhatsapp
              number="56973445869"
              message="Hello. I saw your Portfolio and I would like to talk to you"
              element="div"
            >
              <div className='contactlink' style={{backgroundColor: colors.whatsapp}}>
                <i className="fab fa-whatsapp" />
                {' '}
                +56973445869
              </div>
            </ReactWhatsapp>  
              <div className='contactlink' 
                style={{border: `${colors.gmail} 1px solid`, color: colors.gmail, fontSize: '2vh'}}
                onClick={() => window.open('mailto:rodrigo.ibaceta01@gmail.com')}
              >
                <i className="fas fa-envelope"></i>{' '}rodrigo.ibaceta01@gmail.com
              </div>        
              <div className="contactlink" style={{backgroundColor: colors.linkedin}}>
                <a href='https://www.linkedin.com/in/rodrigo-ibaceta/' target="_blank" rel="noreferrer" >
                  <i className="fab fa-linkedin-in"></i>{' '}Linkedin
                </a>
              </div>
              <div className="contactlink" style={{backgroundColor: 'black'}}>
                <a href='https://github.com/RokoVarano' target="_blank" rel="noreferrer" >
                  <i className="fab fa-github"></i>{' '}Github
                </a>
              </div>
            <CV/>
            <CV es/>
          </Section>
      </div>
    </div>
  )
}

const mockData = {
  data: {
    projects: [
      {
        title: 'Shark TV Guide', 
        image: 'https://github.com/RokoVarano/API-based-webapp/blob/develop/app_screenshot.png?raw=true',
        description: 'An API based TV guide for shark related shows',
        tryit: 'https://rokovarano.github.io/API-based-webapp/',
        github: 'https://github.com/RokoVarano/API-based-webapp',
      },
      {
        title: 'Convention site',
        image: 'https://github.com/RokoVarano/Assessment/blob/develop/main-desktop.png?raw=true',
        description: 'A pure HTML/CSS site for an imaginary convention',
        tryit: 'https://rokovarano.github.io/Assessment/',
        github: 'https://github.com/RokoVarano/Assessment/tree/develop',
      }
    ],
    certificates: [
      {
        logo: 'https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5e18a9053ee8b2c791075c74_smalllogo.png',
        color: 'rgb(111, 54, 255)',
        title: 'Microverse',
        description: 'HTML/CSS, JavaScript, React/Redux, Ruby, Ruby on Rails',
        link: 'https://www.credential.net/profile/rodrigoandresibacetajimenez188513/wallet',
      }
    ]
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await new Promise<typeof mockData>((resolve, reject) => {
    resolve(mockData)
  }).then((resolve: typeof mockData) => resolve)

  return {
    props: {
      projects: data.projects,
      certificates: data.certificates
    }
  }
}

export default Home

