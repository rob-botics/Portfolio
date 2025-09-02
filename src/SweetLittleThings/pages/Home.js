import Slider from '../../components/Slider'
import { HashLink } from 'react-router-hash-link'

const Home = () => {
    return(
        <main>
            <header>
                <Slider page={'slt'}></Slider>
            </header>
            <section className='slt-section slt-secondary-bg'>
                <h2 className='slt-section-title'>Sweet Little Things Menu</h2>
                <div className='home-menu'>
                    <div>
                        <HashLink smooth to="menu#cheesecakes"><img src={require('../img/home/home-cheesecake.jpg')} alt='home cake'/></HashLink>
                        <p>Cheesecakes</p>
                    </div>
                    <div>
                        <HashLink smooth to='menu#cakes'><img src={require('../img/home/home-cake.jpg')} alt='home cake'/></HashLink>
                        <p>Cakes</p>
                    </div>
                    <div>
                        <HashLink smooth to="menu#cupcakes"><img src={require('../img/home/home-cupcake.jpg')} alt='home cake'/></HashLink>
                        <p>Cupcakes</p>
                    </div>
                    <div>
                        <HashLink smooth to="menu#jellos"><img src={require('../img/home/home-jello.jpg')} alt='home cake'/></HashLink>
                        <p>Jello</p>
                    </div>                    
                </div>
            </section>
            <section className='slt-section'>
                <h2 className='slt-section-title2'>Sweet Little Things Menu</h2>
                <div className='instagram-grid'>
                    <span>FOLLOW US<br/>ON INSTAGRAM</span>
                    <span>
                        <a href="https://www.instagram.com/p/CBmCSkggoC-/?utm_source=ig_web_copy_link">
                            <img className='social-img' src={require('../img/social/heart.jpeg')} alt=''/>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/p/CBovpb_ho4Y/?utm_source=ig_web_copy_link">
                            <img className='social-img' src={require('../img/social/cup_mm.jpg')} alt=''/>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/p/CNOUQV2BDoA/?utm_source=ig_web_copy_link">
                            <img className='social-img' src={require('../img/social/bf_cake.jpeg')} alt=''/>
                        </a>
                    </span>
                    <span>
                        <a href="https://www.instagram.com/p/CLPNJzDhZTE/?utm_source=ig_web_copy_link">
                            <img className='social-img' src={require('../img/social/wc_heart.jpeg')} alt=''/>
                        </a>
                    </span>
                    <span>Go To &nbsp; <a href='https://www.instagram.com/sweetlittlem_'>@sweetlittlem_</a> </span>
                </div>
            </section>
            <section className='slt-section slt-secondary-bg'>
                <h2 className='slt-section-title' style={{marginTop: '100px'}}>JOIN OUR EMAIL CLUB FOR:<br/><small>COUPONS, DISCOUNT CODES, & MORE</small></h2>
                <div className='subscribe-container'>
                    <div className='subscribe'>
                        <input type='text' placeholder='Email'></input>
                        <button>Subcribe</button>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Home