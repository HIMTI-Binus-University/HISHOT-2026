import HiShotHero from './components/HiShotHero'
import Trailer from './components/trailer';
import HishotFAQ from './components/HishotFAQ.jsx'
import Events from './components/Events';
import Footer from './components/Footer';
import SecureOpportunity from './components/SecureOpportunity.jsx';
import SpecialThanks from './SpecialThanks.jsx';

function App() {
  return (
    <>
      <HiShotHero />
      <Trailer />
      <Events />
      <HishotFAQ />
      {/* Special Thanks masih di keep hidden karena belum ada arahan untuk tampilin */}
      {/* <SpecialThanks/> */}
      <SecureOpportunity/>
      <Footer/>
    </>
  )
}

export default App;
