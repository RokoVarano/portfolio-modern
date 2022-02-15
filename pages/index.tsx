import type { NextPage } from 'next'
import BlurryBG from '../components/BlurryBG'
import PhoneMenu from '../components/PhoneMenu'
import PhoneMenuButton from '../components/PhoneMenuButton'
import Section from '../components/Section'

const Home: NextPage = () => {
  const colors = {
    salmon: 'rgba(250, 128, 114, 0.5)',
    teal: 'rgba(0, 128, 128, 0.5)'
  }

  return (
    <div style={{height: '100vh'}}>
      <PhoneMenuButton/>
      <BlurryBG/>
      <PhoneMenu/>
      <div className="indexcontainer">
        <Section id="aboutMe" bgColor={colors.salmon}><></></Section>
        <Section id="projects" bgColor={colors.teal}><></></Section>
        <Section id="certifications" bgColor={colors.salmon}><></></Section>
        <Section id="contactMe" bgColor={colors.teal}><></></Section>
        <Section id="resume" bgColor={colors.salmon}><></></Section>
      </div>
    </div>
  )
}

export default Home
