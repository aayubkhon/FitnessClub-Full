import React,{useState} from 'react'
import { Container,MainList,MainLogo } from './style'
import Logo from '../Assets/logo.png'
import Bars from '../Assets/bars.png'
import { Link  } from "react-scroll";
export const Header = () => {
  const mobile = window.innerWidth <= 768 ? true: false;
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <Container id='home'>
      <MainLogo src={Logo} alt="logo" />
     {(menuOpen===false && mobile===true)?(
      <div className='bar' onClick={()=>setMenuOpen(true)}>

        <img style={{width: '1.5rem', height: '1.5rem'}} src={Bars} alt="" />
      </div>
     ) : (
      <MainList>
        
        <li className='link'><Link onClick={()=>setMenuOpen(false)}
        activeClass='active'
        to='home'
        span={true}
        smooth={true}
        >Home</Link></li>

          <li className='link'><Link onClick={()=>setMenuOpen(false)}
        to='programming'
        span={true}
        smooth={true}
        >Programs</Link></li>




          <li className='link'><Link onClick={()=>setMenuOpen(false)}
        to='expirience'
        span={true}
        smooth={true}
        >Why Us</Link></li>


<li className='link'><Link onClick={()=>setMenuOpen(false)}
        to='planet'
        span={true}
        smooth={true}
        >Plans</Link></li>


        <li  className='link'><Link onClick={()=>setMenuOpen(false)}
        to='testi'
        span={true}
        smooth={true}
        >Testimonials</Link></li>
      </MainList>
     )}
    </Container> 
  )
}

export default Header