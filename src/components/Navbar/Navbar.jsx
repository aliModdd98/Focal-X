import './Navbar.css'
import logo from '../../assets/focal X1.jpg'
import { useState } from 'react'
const Navbar = () => {
  //collapse Navbar
  const [navCollapse, setNavCollapse] = useState(false)
  function handleNavCollapse() {
    setNavCollapse(!navCollapse);
  }

  //NavLinks Class onClick
  const [navLinks_1, setNavLinks_1] = useState(false);
  const [navLinks_2, setNavLinks_2] = useState(false);
  const [navLinks_3, setNavLinks_3] = useState(false);
  const [navLinks_4, setNavLinks_4] = useState(false);
  const [navLinks_5, setNavLinks_5] = useState(false);
  const [navLinks_6, setNavLinks_6] = useState(false);


  return (
    <>
      <nav className="of-navbar">
        <div className='of-nav-left flex lg:w-[49.27%]  w-[100%] gap-[30px]'>
          <img src={logo} alt="Focalx Logo" />
          <p className='sm:block hidden'>Digital marketing agency</p>
        </div>
        <div className='of-nav-right lg:block hidden'>
          <ul className='flex justify-between  mt-[1.38rem] of-right-links'>
            <li className='w-[3.125rem]'><a onClick={() => { setNavLinks_1(!navLinks_1), setNavLinks_2(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_6('') }}><span className={navLinks_1 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Hom</span><span className={navLinks_1 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>e</span></a></li>
            <li className='w-[4.1875rem]'><a onClick={() => { setNavLinks_2(!navLinks_2), setNavLinks_1(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_6('') }} ><span className={navLinks_2 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Servi</span><span className={navLinks_2 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>ces</span></a></li>
            <li className='w-[4.375rem]'><a onClick={() => { setNavLinks_3(!navLinks_3), setNavLinks_1(''), setNavLinks_2(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_6('') }}><span className={navLinks_3 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Portf</span><span className={navLinks_3 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>olio</span> </a></li>
            <li className=''><a onClick={() => { setNavLinks_4(!navLinks_4), setNavLinks_1(''), setNavLinks_3(''), setNavLinks_2(''), setNavLinks_5(''), setNavLinks_6('') }}><span className={navLinks_4 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Clients &</span> <span className={navLinks_4 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>Partners</span></a></li>
            <li className='w-[4.75rem]'><a onClick={() => { setNavLinks_5(!navLinks_5), setNavLinks_1(''), setNavLinks_2(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_6('') }}><span className={navLinks_5 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>About</span> <span className={navLinks_5 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>Us</span></a></li>
            <li className='w-[4.6875rem]'><a onClick={() => { setNavLinks_6(!navLinks_6), setNavLinks_1(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_2('') }}><span className={navLinks_6 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Let’s</span> <span className={navLinks_6 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>Talk</span></a></li>
          </ul>
        </div>
        {!navCollapse ? <svg onClick={() => { handleNavCollapse() }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list sm:hidden mt-[15px] mr-[33px]" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
          :
          <svg onClick={() => { handleNavCollapse() }} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x sm:hidden mt-[15px] mr-[33px]" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        }
      </nav>
      {navCollapse && <div className=' rounded-md sm:hidden of-navbar-mobile'>
        <ul className='flex flex-col items-center gap-[30px] py-5 of-navbar-mobile-links'>
          <li className='w-[3.125rem]'><a onClick={() => { setNavLinks_1(!navLinks_1), setNavLinks_2(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_6('') }}><span className={navLinks_1 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Hom</span><span className={navLinks_1 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>e</span></a></li>
          <li className='w-[4.1875rem]'><a onClick={() => { setNavLinks_2(!navLinks_2), setNavLinks_1(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_6('') }} ><span className={navLinks_2 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Servi</span><span className={navLinks_2 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>ces</span></a></li>
          <li className='w-[4.375rem]'><a onClick={() => { setNavLinks_3(!navLinks_3), setNavLinks_1(''), setNavLinks_2(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_6('') }}><span className={navLinks_3 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Portf</span><span className={navLinks_3 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>olio</span> </a></li>
          <li ><a onClick={() => { setNavLinks_4(!navLinks_4), setNavLinks_1(''), setNavLinks_3(''), setNavLinks_2(''), setNavLinks_5(''), setNavLinks_6('') }}><span className={navLinks_4 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Clients &</span> <span className={navLinks_4 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>Partners</span></a></li>
          <li className='w-[4.75rem]'><a onClick={() => { setNavLinks_5(!navLinks_5), setNavLinks_1(''), setNavLinks_2(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_6('') }}><span className={navLinks_5 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>About</span> <span className={navLinks_5 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>Us</span></a></li>
          <li className='w-[4.6875rem]'><a onClick={() => { setNavLinks_6(!navLinks_6), setNavLinks_1(''), setNavLinks_3(''), setNavLinks_4(''), setNavLinks_5(''), setNavLinks_2('') }}><span className={navLinks_6 ? 'of-navLinksNoSelected' : 'of-navLinksSelected'}>Let’s</span> <span className={navLinks_6 ? 'font-my-font text-my-black' : 'font-my-font text-my-secoundry'}>Talk</span></a></li>
        </ul>
      </div>}
    </>
  )
}

export default Navbar