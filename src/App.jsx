import ButtonGradient from './assets/svg/ButtonGradient'
// import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Value from './components/Benefits';
import Collaboration from './components/Collaboration';
function App() {
  return (
    <>
    <div className='pt-[4.7rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header/>
        <Hero/>
        <Value/>
        <Collaboration/>
    </div>
      <ButtonGradient/>
    </>
  );
}

export default App;
