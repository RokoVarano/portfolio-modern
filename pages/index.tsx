import type { NextPage } from 'next'
import BlurryBG from '../components/BlurryBG'
import PhoneMenuButton from '../components/PhoneMenuButton'

const Home: NextPage = () => {
  return (
    <div className="indexcontainer">
      <PhoneMenuButton/>
      <BlurryBG/>
    </div>
  )
}

export default Home
