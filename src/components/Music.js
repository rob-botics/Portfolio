import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

const Music = () => {
    return(
        <>
            <div className='section-title'><h2>Top 10 Music Artist</h2></div>
            <div className='songs'>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">1. </span>
                        <span class="musician-name">JoJo</span>
                    </div>
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-1"/>
                        <iframe title='One Last Time'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/4TKQupawBTN4tbwZpGUJlh?utm_source=generator"
                            width="100%"
                            height="100"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        />
                        <iframe title='Shoulder'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/6E2i1jYg46C9zrVptJGvqJ?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-1'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>                    
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">2. </span>
                        <span class="musician-name">Kehlani</span>
                    </div>                    
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-2"/>
                        <iframe title='Folded'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/0bxPRWprUVpQK0UFcddkrA?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Slow Dance'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5FnBE6KJdwoaZISb1jiNpR?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-2'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>                    
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">3. </span>
                        <span class="musician-name">Kenyon Dixon</span>
                    </div>
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-3"/>
                        <iframe title='Lucky'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/52WEvDI0nTdcrXLWaexaJR?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Cant Get Over You'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/1hiStqfIKEtIgmbvwXsjn7?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-3'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>                    
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">4. </span>
                        <span class="musician-name">Tori Kelly</span>
                    </div>                    
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-4"/>
                        <iframe title='Oceans'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/14HmdbVhtDR1R32qgNZx1N?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Dont Take Me Home'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5sgS3JUiUA3E4dYlmp6U0z?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-4'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>                    
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">5. </span>
                        <span class="musician-name">Jhene Aiko</span>
                    </div>
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-5"/>
                        <iframe title='Guidance'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/1WD5d42tRqdLyfaoTtUlHB?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Sun/Son'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/1FCkraEiLiJwjXm5eqhLU9?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-5'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>                   
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">6. </span>
                        <span class="musician-name">SiR</span>
                    </div>
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-6"/>
                        <iframe title='Nothing Even Matters'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5URTJ8nizZVFDSJVnyPjXf?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='War'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/09PaypEcFmih85xXedBBKP?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-6'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">7. </span>
                        <span class="musician-name">Alex Isley</span>
                    </div>
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-7"/>
                        <iframe title='Hands'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/6TLP6it628M3BRNqg3rD4v?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='On II U'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/24mo8K6ZzBTB4YBS3OtZ0k?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-7'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">8.</span>
                        <span class="musician-name">Paramore </span>
                    </div>                    
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-8"/>
                        <iframe title='Folded'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/2ZMkAWKrNDXrQuF0N9Q9Xj?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Ignorance'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/47No93LxERvV6MtOAmQzHS?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-8'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">9. </span>
                        <span class="musician-name">Mac Ayres</span>
                    </div>                    
                    <div class="song-container">
                        <input type="checkbox" id="next-btn-9"/>
                        <iframe title='Folded'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5ZDqduedfazFVUhLAmlbBe?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Get Away'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5rlN7kWG5R7de0emQYkXaS?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-9'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>
                </div>
                <div className='song'>
                    <div className='musician-container'>
                        <span class="music-rank">10. </span>
                        <span class="musician-name">Justin Bieber</span>
                    </div>
                    <div className="song-container">
                        <input type="checkbox" id="next-btn-10"/>
                        <iframe title='ALL I CAN TAKE'
                            className='first-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/72PVbRKkUimweUPV0nKAPs?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <iframe title='Get Me'
                            className='second-song'
                            data-testid="embed-iframe"
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/track/5VwwpU7KsLhgfbMEecedhJ?utm_source=generator"
                            width="100%"
                            height="100"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        <label className='song-btn' for='next-btn-10'><FontAwesomeIcon icon="fa-solid fa-forward" /></label>
                    </div>
                </div>
            </div>
        </>   
    )
}
export default Music