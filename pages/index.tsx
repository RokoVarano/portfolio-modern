import type { NextPage } from 'next'
import BlurryBG from '../components/BlurryBG'
import PhoneMenu from '../components/PhoneMenu'
import PhoneMenuButton from '../components/PhoneMenuButton'

const Home: NextPage = () => {
  return (
    <div className="indexcontainer">
      <PhoneMenuButton/>
      <BlurryBG/>
      <PhoneMenu/>
    </div>
  )
}

export default Home
