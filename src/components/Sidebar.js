import React, { useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

const Sidebar = ({ themeChanger, theme, toggle }) => {
    const location = useLocation()
    const [isActive, setIsActive] = useState('')
    const [sidebarCompress, setSidebarCompress] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);
    const handleThemeChange = (selectedTheme) => themeChanger(selectedTheme)

    useEffect(() => {
        setTimeout(() => {
        setIsActive(location.pathname)
        }, 425) // delay in ms
    }, [location.pathname])
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 670px)');
        const handleChange = (e) => setIsMobile(e.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const handleArrowClick = () => {
        setSidebarCompress(prev => !prev)
        let body = document.body

        body.classList.toggle('body-compress')
    }
    return(
        <>
        <aside className={`sidebar ${sidebarCompress ? 'sidebar-animation' : ''}`}>
           {!isMobile && <FontAwesomeIcon icon="fa-regular fa-circle-right" className={`arrow ${sidebarCompress ? "arrow-animation" : ""}`} onClick={() => handleArrowClick()}/> }
           {isMobile && <FontAwesomeIcon icon="fa-solid fa-square-xmark" onClick={() => toggle()} className='x-sb'  size="2xl"/>}
           <ul className="sb-list">
                <li className={`${sidebarCompress ? 'hide' : ''}`}><Link className={isActive === "/" ? "active-link" : ""} to='/'><FontAwesomeIcon icon="fa-solid fa-house" /><span className={`nav-text ${sidebarCompress ? "hide" : ""}`}>&nbsp; Home</span></Link></li>
                <li className={`${sidebarCompress ? 'hide' : ''}`}><Link className={isActive === "/about" ? "active-link" : ""}to='/about'><FontAwesomeIcon icon="fa-solid fa-circle-user" /><span className={`nav-text ${sidebarCompress ? "hide" : ""}`}>&nbsp; About</span></Link></li>
                <li className={`${sidebarCompress ? 'hide' : ''}`}><Link className={isActive === "/projects" ? "active-link" : ""}to='/projects'><FontAwesomeIcon icon="fa-solid fa-cubes" /><span className={`nav-text ${sidebarCompress ? "hide" : ""}`}>&nbsp; Projects</span></Link></li>
                <li className={`theme-changer ${sidebarCompress ? 'hide' : ''}`}>
                    <FontAwesomeIcon icon="fa-solid fa-palette" /><span className={`nav-text ${sidebarCompress ? "hide" : ""}`}>&nbsp; Themes</span>
                    <div>
                        <select className="select" value={theme}  onChange={(event) => handleThemeChange(event.target.value)}>
                            <option className="forest-option" value='forest'>Forest</option>
                            <option className="royal-option" value='royal'>Royal</option>
                            <option className="garden-option" value='garden'>Garden</option>
                        </select>
                    </div>
                </li>
           </ul>
        </aside>
        </>
    )
}
export default Sidebar