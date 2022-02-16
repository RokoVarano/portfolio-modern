import type { NextPage } from 'next'
import AboutMe from '../components/AboutMe'
import BlurryBG from '../components/BlurryBG'
import PhoneMenu from '../components/PhoneMenu'
import PhoneMenuButton from '../components/PhoneMenuButton'
import Section from '../components/Section'
import Toy from '../components/Toy'

const Home: NextPage = () => {
  const colors = {
    salmon: 'rgba(250, 128, 114, 0.5)',
    teal: 'rgba(0, 128, 128, 0.5)',
    orange: 'rgba(252, 196, 76, 1)',
    transparent: 'rgba(255, 255, 255, 0)'
  }

  return (
    <div style={{height: '100vh'}}>
      <PhoneMenuButton/>
      <BlurryBG/>
      <PhoneMenu/>
      <div className="indexcontainer">
        <Toy fallTime={10} fallDistance={120} size={10} iconClass='fas fa-star' left={10} wait={0} color={colors.salmon}/>
        <Toy fallTime={20} fallDistance={220} size={5} iconClass='fas fa-star' left={15} wait={1} color={colors.orange}/>
        <Toy fallTime={30} fallDistance={320} size={15} iconClass='fas fa-star' left={35} wait={2} color={colors.teal}/>
        <Toy fallTime={40} fallDistance={420} size={5} iconClass='fas fa-star' left={20} wait={3} color={colors.orange}/>
        <Toy fallTime={10} fallDistance={35} size={10} iconClass='fas fa-star' left={20} wait={4} color={colors.teal}/>

        <Section id="aboutMe"><AboutMe/></Section>
        <Section id="projects"><></></Section>
        <Section id="certifications"><></></Section>
        <Section id="contactMe"><></></Section>
        <Section id="resume"><></></Section>
      </div>
    </div>
  )
}

export default Home
