// import HiShotHero from './components/HiShotHero'
import Trailer from './components/trailer';
import SpecialThanks from './components/specialThanks';
import SecureOpportunity from './components/secureOppurtunity';
import Background from './components/background';

function App() {  
  return (
    <Background>
      <main className="flex min-h-screen flex-col items-center justify-center px-4">
          {/* <HiShotHero /> */}
          <Trailer />
          <SpecialThanks />
          <SecureOpportunity />
      </main>
    </Background>
      
      

  )
}

export default App;
