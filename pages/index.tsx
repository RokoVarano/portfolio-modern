import type { NextPage } from 'next'
import AboutMe from '../components/AboutMe'
import BlurryBG from '../components/BlurryBG'
import PhoneMenu from '../components/PhoneMenu'
import PhoneMenuButton from '../components/PhoneMenuButton'
import Section from '../components/Section'

const Home: NextPage = () => {
  const colors = {
    salmon: 'rgba(250, 128, 114, 0.5)',
    teal: 'rgba(0, 128, 128, 0.5)',
    orange: 'rgb(252, 196, 76)'
  }

  return (
    <div style={{height: '100vh'}}>
      <PhoneMenuButton/>
      <BlurryBG/>
      <PhoneMenu/>
      <div className="indexcontainer">
        <Section id="aboutMe" bgColor={colors.orange}><AboutMe/></Section>
        <Section id="projects" bgColor={colors.teal}><></></Section>
        <Section id="certifications" bgColor={colors.orange}><></></Section>
        <Section id="contactMe" bgColor={colors.teal}><></></Section>
        <Section id="resume" bgColor={colors.orange}><></></Section>
      </div>
    </div>
  )
}

export default Home
