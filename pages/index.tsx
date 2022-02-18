import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import AboutMe from '../components/AboutMe'
import BlurryBG from '../components/BlurryBG'
import CV from '../components/CV'
import CVes from '../components/CVes'
import Certificates from '../components/Certificates'
import PhoneMenu from '../components/PhoneMenu'
import PhoneMenuButton from '../components/PhoneMenuButton'
import Projects from '../components/Projects'
import Section from '../components/Section'
import Toy from '../components/Toy'

const Home: NextPage = ({ projects, certificates }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const colors = {
    salmon: 'rgba(250, 128, 114, 1)',
    teal: 'rgba(0, 128, 128, 1)',
    orange: 'rgba(252, 196, 76, 1)',
    transparent: 'rgba(255, 255, 255, 1)'
  }

  return (
    <div style={{height: '100vh'}}>
      <PhoneMenuButton/>
      <BlurryBG/>
      <PhoneMenu/>
      <div className="indexcontainer">
        <Toy fallTime={5} fallDistance={144} size={5} iconClass='fas fa-star' left={80} wait={2} color={colors.orange} opacity={1}/>
        <Toy fallTime={7} fallDistance={189} size={5} iconClass='fas fa-star' left={68} wait={1} color={colors.orange} opacity={1}/>
        <Toy fallTime={3} fallDistance={35} size={10} iconClass='fas fa-star' left={40} wait={0} color={colors.teal} opacity={0.5}/>

        <Section id="aboutMe"><AboutMe/></Section>
        <Section id="projects">
          <div style={{height: '10vh'}}>{' '}</div>
          <Projects color={colors.teal} data={projects[0]}/>
          <Projects color={colors.salmon} data={projects[1]} left/>
        </Section>
        <Section id="certifications">
          <div style={{height: '10vh'}}>{' '}</div>
          <Certificates data={certificates[0]}/>
        </Section>
        <Section id="contactMe"><></></Section>
        <Section id="resume">
          <div style={{height: '10vh'}}>{' '}</div>
          <CV/>
          <CVes/>
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

