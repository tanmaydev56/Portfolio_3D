
import './App.css'

import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/navbar'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'

function App() {
 

  return (
   <main className='max-w-7xl mx-auto'>
   
    <Navbar/>
   <Hero/>
   <About/>
    <Projects/> 
    <Testimonials/>
    <Contact/>
    <Footer/> 
    {/* <GlobeDemo/> */}
    
   

   
    

   
   {/* <BentoGridSecondDemo/> */}
   </main> 
   
   
  )
}

export default App
