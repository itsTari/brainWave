import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header';
import Hero from './components/Hero';
import Value from './components/Benefits';
import Collaboration from './components/Collaboration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className='pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Hero/>
        <Value/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
    </div>
      <ButtonGradient/>
    </>
  );
}

export default App;
