import Slider from "../components/Slider";
import { useInView } from "react-intersection-observer";
import React, { useEffect,useRef,useState } from "react";
import { Link } from "react-router";

const Home = (props) => {
    const introRef = useRef('')
    const skillsRef = useRef('')
    const projectsRef = useRef('')

    const { ref: introInViewRef, inView: introInView } = useInView({ threshold: 0.1 });
    const { ref: skillsInViewRef, inView: skillsInView } = useInView({ threshold: 0.1 });
    const { ref: projectsInViewRef, inView: projectsInView } = useInView({ threshold: 0.1 });
    
    const [headshotFade, setHeadshotFade] = useState(false);
    const skillImages = importAll(require.context('../img/skills', false, /\.(png|jpe?g|svg)$/));
    const priority = ['html.png', 'css.png', 'js.png', 'java.png', 'sql.png', 'react.png', 'agile.png', 'bootstrap2.png', 'git.png'];

   function importAll(r) {
       return r.keys().map(fileName => {
            const name = fileName.replace('./', '');
            const src = r(fileName);
            let exp = '';

            switch(name) {
            case 'html.png':
            case 'css.png':
            case 'js.png':
            case 'java.png':
            case 'sql.png':
            case 'react.png':
            case 'agile.png':
            case 'bootstrap2.png':
            case 'git.png':
                exp = '5 yrs';
                break;
            default:
                exp = '';
            }

            return { name, src, exp };
        });
    }
    skillImages.sort((a, b) => priority.indexOf(a.name) - priority.indexOf(b.name));

    useEffect(() => {
    setHeadshotFade(true); // fade out

    const timeout = setTimeout(() => {setHeadshotFade(false); }, 500);
    return () => clearTimeout(timeout);
    }, [props.theme]);

    return(
        <>
        <section  className={`${introInView ? "fade-in" : "hidden"}`} ref={(element) => { introRef.current = element; introInViewRef(element); }}>
            {introInView && <>
                <div className={`headshot ${headshotFade ? 'fade' : ''}`}><Slider page={'home'}/></div>
                <div className="landing-title"><h1>Welcome To A Robert Morrison Web Production</h1></div> 
            </>}
        </section>
        <section  className={`${skillsInView ? "fade-in" : "hidden"}`} ref={(element) => { skillsRef.current = element; skillsInViewRef(element); }}>
            {skillsInView && <>
                <div className="section-title "><h2 >Skills</h2></div>
                <div className="skill-container">
                    {skillImages.map((img, index) => (
                        img.name.includes('java') ? 
                        <div className="skills flip-card" key={index}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img.src} alt={`${img.name}`} className='java'/>
                                </div>
                                <div className="flip-card-back">
                                    <p className="skills-name">
                                        {/* {img.name.replace(/\..*$/, '')}<br/> */}
                                        {`(${img.exp})`}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        : <div className="skills flip-card" key={index}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img.src} alt={`${img.name}`} className='skills-img'/>
                                </div>
                                <div className="flip-card-back">
                                    <p className="skills-name">
                                        {img.name.replace(/\..*$/, '')} <br/>
                                        {`(${img.exp})`}
                                    </p> 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>}
        </section>
        <div style={{position: 'relative'}}>
            <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path  d="M0,256L60,224C120,192,240,128,360,101.3C480,75,600,85,720,117.3C840,149,960,203,1080,224C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
        <section className={`secondary-bg`}>
            <div className={`${projectsInView ? "fade-in" : "hidden"}`} ref={(element) => { projectsRef.current = element; projectsInViewRef(element); }}>
                {projectsInView && <>
                <div className="section-title "><h2 >Projects</h2></div>
                <div className="home-projects-container">
                    <div className="home-projects"><h3>Coming Soon!</h3></div>
                    <div className="home-projects">
                        <h3>Sweet Little Things</h3>
                        <Link to='/slt'><img src={require("../img/slt.png")} alt="Sweet Little Things"/></Link>
                    </div>
                    <div className="home-projects"><h3>Coming Soon!</h3></div>
                </div>
            </>}
            </div>
        </section>
        </>
    )
}
export default Home