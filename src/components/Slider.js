import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const Slider = (props) => {
    let homeSlides = [], aboutMeSlides = [], ffSlides = [], petsSlides = [];
    for (let i = 0; i < 6; i++) 
        homeSlides.push(<SwiperSlide style={{height: 'auto'}} className={`slider-img${i}`}></SwiperSlide>);
    for (let i = 0; i < 16; i++) 
        aboutMeSlides.push(<SwiperSlide style={{height: 'auto'}} className={`slider-img${i}`}><img src={require(`../img/aboutme/me${i}.jpg`)} alt='Images of me'/></SwiperSlide>);
    for (let i = 0; i < 22; i++) 
        ffSlides.push(<SwiperSlide style={{height: 'auto'}} className={`slider-img${i}`}><img src={require(`../img/family-friends/ff${i}.jpg`)} alt='Images of me'/></SwiperSlide>);
    for (let i = 1; i <= 26; i++) 
        petsSlides.push(<SwiperSlide style={{height: 'auto'}} className={`slider-img${i}`}><img src={require(`../img/pets/cat${i}.jpg`)} alt='Images of me'/></SwiperSlide>);
    
    return(
        <>
        {props.page === 'home' &&
            <Swiper className="swiper headshot-swiper" 
                loop={true}
                slidesPerView={1}
                grabCursor={true}
                effect="coverflow"
                centeredSlides={true}
                autoplay={{ delay: 3500 }} 
                pagination={{ clickable: true }}     
                modules={[Autoplay, Pagination, EffectCoverflow]}
                >
                { homeSlides }
                </Swiper>
        }
        {props.page === 'slt' &&
            <Swiper loop={true}
                slidesPerView={1}
                grabCursor={true}
                effect="coverflow"
                centeredSlides={true}
                autoplay={{ delay: 10000 }} 
                pagination={{ clickable: true }}     
                modules={[Autoplay, Pagination, EffectCoverflow]}
            >
                <SwiperSlide className='header-img1'>
                    <p>
                        <strong style={{fontSize: 'xx-large', lineHeight: '2.25rem'}}>Shake up your sweet tooth with a Cupquake of Flavor!</strong><br/> Craving something sweet? Indulge in our
                        handcrafted cupcakes — fluffy, moist, and topped with irresistible buttercream. Perfect for parties, gifts, or a well-deserved treat.<br/><br/>
                        <button>Order Now!</button>
                    </p>
                    
                </SwiperSlide>
                <SwiperSlide className='header-img2'>
                    <div className='sprinkles'>
                        <p>
                            <strong style={{fontSize: 'xx-large'}}>🎂 Cake It Easy!</strong> <br/>
                            Take a break and cake it easy — you deserve it.
                            Whether it’s a small win or just because, our cakes are the perfect way to celebrate you.
                            🍰 Fluffy layers, rich frosting, and flavors that melt your stress away.Because life’s too short to skip dessert.
                            Order Now and treat yourself to a slice of happiness.<br/><br/>
                            <button>Order Now!</button>
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='header-img3'>
                    <p>
                        <strong style={{fontSize: 'xx-large'}}>Sprinkle of Joy for the Spring!</strong><br/> Sprinkle Some Joy This Spring 
                        With 25% OFF Of A Order Of $30 or More! Because everything's better with a sprinkle on top! Hurry, offer valid for a limited time.
                        Order Now and let the joy begin! <br/><br/>
                        <button>Order Now!</button>
                    </p>
                </SwiperSlide>
            </Swiper>
        }
        {(props.page === 'about/me' || props.page === 'about/ff' || props.page === 'about/pets') &&
            <Swiper className="swiper" 
                loop={true}
                grabCursor={true}
                effect="coverflow"
                coverflowEffect={{
                    rotate:0,
                    stretch:5,
                    depth:100,
                    modifier:7,
                }}
                centeredSlides={true}
                autoplay={{ delay: 3500 }} 
                pagination={{ clickable: true }}            
                modules={[Autoplay, Pagination, EffectCoverflow]}
                breakpoints={{
                    450: {slidesPerView: 2},
                    640: {slidesPerView: 1.25},
                    1024: {slidesPerView: 2},
                    1148: {slidesPerView: 1.5},
                    1560: {slidesPerView: 3}
                }}
                >
                {props.page === 'about/me' ? aboutMeSlides : props.page === 'about/ff' ? ffSlides : petsSlides}
            </Swiper>
        }
        </>
    )
}
export default Slider