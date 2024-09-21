import  { useState } from 'react'
import { navLinks } from '../constants';

const NavItems = ()=>(
    <ul className='nav-ul'>
      {
        navLinks.map(({id,href,name})=>(

             <li key={id} className='nav-li'>
                <a href={href}  
             onClick={()=>{}}
             className='nav-li_a'>
               {name}</a>
               </li>

        ))
       
      }
    </ul>
)
const Navbar = () => {
    
    const [isopen,setisopen] = useState(false);
    const togglemenu = ()=> setisopen((previsopen)=>!previsopen );
  return (

    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-[80rem] mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto  sm:px-5 px-10'>
              <div className=''>
              <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors flex gap-3 mt-1'>
              <img src="/logo.svg" alt="" className='w-7 h-7 mt-0' />
               
                Tanmay</a>
                </div>
                <button className= 'sm:hidden flex text-neutral-400 hover:text-white  focus:outline-none   ' aria-label='Toggle menu' onClick={togglemenu}>
                <img src={isopen ? "/assets/close.svg":"/assets/menu.svg"} alt="menu" className='w-6 h-6  
                
                ' />
                </button>
                <nav className='sm:flex hidden'>
                    <NavItems/>
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isopen ? 'max-h-screen': 'max-h-0'}`}>
          <nav className='p-5'>
            <NavItems/>
          </nav>
        </div>
    </header>
  )
}

export default Navbar