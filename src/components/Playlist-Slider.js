import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, far, fab)

export default function Playlist() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3500); 
        return () => clearTimeout(timer);
    }, []);
    return (
    <>
    <FontAwesomeIcon icon="fa-regular fa-spinner" spinPulse />
       {/* {loading ? (
            <FontAwesomeIcon style={{display: 'block', width:'100%', textAlign: 'center', fontSize: '64px'}} icon="fa-solid fa-spinner" spinPulse />
       ) : ( */}
       {
        <>
            <Swiper
                loop={true}
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="playlist-slider"
            >
                <SwiperSlide>
                    <iframe title='80s/90s Hip Hop and Are & Bee'
                        width="100%"
                        height="500"
                        tabIndex={-1}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        sandbox="allow-scripts"
                        data-testid="embed-iframe"
                        onLoad={() => setLoading(false)}
                        style={{ borderRadius: "12px", border:`none`, overflow: 'hidden', pointerEvent: 'none'}}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        src="https://open.spotify.com/embed/playlist/3Lg4q5MNWK8S88kys3xUpW?utm_source=generator"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe title='2000s Bangers'
                        width="100%"
                        height="500"
                        tabIndex={-1}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        sandbox="allow-scripts"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px", border:`none`, overflow: 'hidden', pointerEvent: 'none'}}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        src="https://open.spotify.com/embed/playlist/76ZcBZaDVdQzFagWDPnfJV?utm_source=generator"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe title='2010s Bops'
                        width="100%"
                        height="500"
                        tabIndex={-1}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        sandbox="allow-scripts"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px", border:`none`, overflow: 'hidden', pointerEvent: 'none'}}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        src="https://open.spotify.com/embed/playlist/0n4SwmoL5haRE6DwTtuEEl?utm_source=generator"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <iframe title='Replay All Time'
                        width="100%"
                        height="500"
                        tabIndex={-1}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        sandbox="allow-scripts"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px", border:`none`, overflow: 'hidden', pointerEvent: 'none'}}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        src="https://open.spotify.com/embed/playlist/41WOgAwM4nT0EEkbPT6JhY?utm_source=generator"
                    />
                </SwiperSlide>
                <SwiperSlide>
                     <iframe title='Replay All Time'
                        width="100%"
                        height="500"
                        tabIndex={-1}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        sandbox="allow-scripts"
                        data-testid="embed-iframe"
                        style={{ borderRadius: "12px", border:`none`, overflow: 'hidden', pointerEvent: 'none'}}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        src="https://open.spotify.com/embed/playlist/0hJlXXbgjvoprGYatkIPR0?utm_source=generator"
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                loop={true}
                frameBorder="0"
                freeMode={true}
                spaceBetween={10}
                slidesPerView={5}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress={true}
                className="thumbnail-slider"
                modules={[FreeMode, Navigation, Thumbs]}
            >
                <SwiperSlide>
                    <img tabIndex={-1} src={require('../img/playlist/80s-90s.png')} alt='80 / 90s Playlist'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img tabIndex={-1} src={require('../img/playlist/2000sBangers.png')} alt='2000s Playlist'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img tabIndex={-1} src={require('../img/playlist/2010sBops.png')} alt='2010s Playlist'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img tabIndex={-1} src={require('../img/playlist/ReplayAllTime.png')} alt='Replay Playlist'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img tabIndex={-1} src={require('../img/playlist/Dance.png')} alt='Dance Playlist'/>
                </SwiperSlide>
            </Swiper>
        </>
    }
    </>
  );
}
// import { useState } from "react";

// export default function SpotifyEmbed() {
//   const [loading, setLoading] = useState(true);

//   return (
//     <div style={{ position: "relative", width: "100%", height: "352px" }}>
//       {/* Loader */}
//       {loading && (
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             background: "#121212", // Spotify-like dark background
//             color: "white",
//             fontSize: "1.2rem",
//             zIndex: 1
//           }}
//         >
//           Loading playlist...
//         </div>
//       )}

//       {/* Spotify Embed */}
//       <iframe
//         data-testid="embed-iframe"
//         style={{ borderRadius: "12px" }}
//         src="https://open.spotify.com/embed/playlist/3Lg4q5MNWK8S88kys3xUpW?utm_source=generator"
//         width="100%"
//         height="352"
//         frameBorder="0"
//         allowFullScreen
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//         loading="lazy"
//         onLoad={() => setLoading(false)} // Hide loader when iframe finishes loading
//       />
//     </div>
//   );
// }
