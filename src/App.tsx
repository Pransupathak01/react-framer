import './App.scss'
import Hero from './component/hero/Hero'
import Navbar from './component/navbar/Navbar'

function App() {

  return (
    <div className='w-full h-full'>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section >
      <section id="Services">Parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section id="About">About</section>
      <section id="Contact">Cantact</section>

    </div>
  )
}

export default App
