import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

const Sidebar = () => {
    return(
        <>
        <footer>
             <div className="footer-section"><h3>Links:</h3>
                    <div className="footer-content">
                        <Link></Link>
                        <Link to="/"><span>Home</span></Link>
                        <Link to="/about"><span>About</span></Link>
                        <Link to="/projects"><span>Projects</span></Link>
                    </div>
                </div>
                <div className="footer-section"><h3>Social:</h3>
                    <div className="footer-content socials">
                       <Link to='https://www.linkedin.com/in/robert-a-morrison'><span><FontAwesomeIcon icon="fa-brands fa-square-linkedin" size="2xl" /></span></Link>
                       <Link to='https://github.com/rob-botics/'><span><FontAwesomeIcon icon="fa-brands fa-github" size="2xl"/></span></Link>
                    </div>
                </div>
                <div className="footer-section"><h3>Contact:</h3>
                    <div className="footer-content">
                        <Link to='tel:1234567890'><span><FontAwesomeIcon icon="fa-solid fa-phone-volume" />&nbsp; (123) 456-7890</span></Link> 
                        <Link to='mailto:r.morrison2219@gmail.com'><span><FontAwesomeIcon icon="fa-solid fa-envelope" />&nbsp; r.morrison2219@gmail.com</span></Link>
                    </div>
                </div>        
        </footer>
        </>
    )
}
export default Sidebar