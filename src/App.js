import styles from './styles/styles.css'
import slt_styles from './SweetLittleThings/styles/slt.css'

import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Nav from './SweetLittleThings/components/Nav'
import {AnimatePresence, motion} from 'framer-motion'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect, lazy, Suspense } from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
library.add(fas, far, fab)

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const SLTHome = lazy(() =>import('./SweetLittleThings/pages/Home'))
const SLTMenu = lazy(() => import('./SweetLittleThings/pages/Menu'))
const SLTContact = lazy(() =>import('./SweetLittleThings/pages/Contact'))
const SLTFooter = lazy(() =>import('./SweetLittleThings/components/Footer'))

function PageWrapper({children}){
  return(
    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y:-20}}>
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  const [sidebar, setSidebar] = useState(false);
  const themeChanger = (theme) => {setTheme(theme)}
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'forest');

  const toggleSidebar = () => {
    setSidebar(prev => !prev);
  };
  useEffect(() => {
    const link = document.createElement("link");

    if(location.pathname.includes('/slt')){
      link.hrefref = slt_styles
      document.body.className = 'slt-body'
      console.log('Sweet Little Things')
    }
    else{
      link.href = styles
      document.body.className = document.body.className.includes('body-compress') ? 'body-compress' : ''
      document.body.classList.add(`${theme}-theme-colors`);
      localStorage.setItem('theme', theme);
    }
  }, [theme, location.pathname]);
  useEffect(() => {
    // Wait for next paint to ensure content has rendered
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [location.pathname]);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 670px)');
    const handleChange = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <>
      { !location.pathname.includes('/slt') ? (
        <>
          {isMobile && <input type='checkbox' checked={sidebar} onChange={toggleSidebar} id='bars'/>}
          <Sidebar themeChanger={themeChanger} toggle={toggleSidebar} theme={theme}/>
          {isMobile && <label for="bars"><FontAwesomeIcon icon="fa-solid fa-bars-staggered" className='bars' size='lg'/></label>}
          <AnimatePresence mode="wait" onExitComplete={() => {
            // Scroll to top after exit animation finishes
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <Suspense fallback={<div></div>}>
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PageWrapper><Home theme={theme}/></PageWrapper>}/>
                <Route path='/about' element={<PageWrapper><About theme={theme}/></PageWrapper>}/>
                <Route path='/projects' element={<PageWrapper><Projects/></PageWrapper>}/>
              </Routes>
            </Suspense>
          </AnimatePresence>
          <Footer/>
        </>)
        : (
          <>
            <Nav/>
            <Link to='/slt'><img className='logo' src={require('./SweetLittleThings/img/logo.jpg')} alt='slt logo'/></Link>
            <AnimatePresence mode="wait" onExitComplete={() => {
              // Scroll to top after exit animation finishes
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <Suspense fallback={<div></div>}>
                <Routes location={location} key={location.pathname}>
                  <Route path='/slt' element={<PageWrapper><SLTHome/></PageWrapper>}/>
                  <Route path='/slt/menu' element={<PageWrapper><SLTMenu/></PageWrapper>}/>
                  <Route path='/slt/contact' element={<PageWrapper><SLTContact/></PageWrapper>}/>
                </Routes>
              </Suspense>
            </AnimatePresence>
            <SLTFooter/>
          </>
        )
      }
      
    </>
  );
}
export default App;
