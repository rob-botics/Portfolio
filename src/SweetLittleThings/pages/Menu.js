import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, far, fab)

const Menu = () => {
    const cheesecakes = [
        {id: 'Plain Cheesecake', price: '12.99', desc: '', img: require('../img/cheesecakes/plain-cc.jpg')},
        {id: 'Strawberry Cheesecake', price: '15.99', desc: '', img: require('../img/cheesecakes/strawberry-cc.jpg')},
        {id: 'Oreo Cheesecake', price: '13.99', desc: '', img: require('../img/cheesecakes/oreo-cc.jpg')},
        {id: 'Pecan Cheesecake', price: '17.99', desc: '', img: require('../img/cheesecakes/pecan-cc.jpg')}
    ]
    const cakes = [
        {id: 'Vanilla Bean Cake', price: '12.99', desc: '', img: require('../img/cakes/vanilla-cake.jpg')},
        {id: 'Strawberry Cake', price: '15.99', desc: '', img: require('../img/cakes/strawberry-cake.jpg')},
        {id: 'Chocolate Cake', price: '13.99', desc: '', img: require('../img/cakes/chocolate-cake.jpg')},
        {id: `Carrot \n Cake`, price: '17.99', desc: '', img: require('../img/cakes/carrot-cake.jpg')}
    ]
    const cupcakes = [
        {id: 'Vanilla Cupcake', price: '5.99', desc: '', img: require('../img/cupcakes/vanilla-cupcake.jpg')},
        {id: 'Strawberry Cupcake', price: '7.49', desc: '', img: require('../img/cupcakes/strawberry-cupcake.jpg')},
        {id: 'Chocolate Cupcake', price: '7.49', desc: '', img: require('../img/cupcakes/chocolate-cupcake.jpg')},
        {id: 'Oreo Cupcake', price: '8.99', desc: '', img: require('../img/cupcakes/oreo-cupcake.jpg')}
    ]
    const jellos = [
        {id: 'Mango \n Jello', price: '8.99', desc: '', img: require('../img/jellos/mango-jello.jpg')},
        {id: 'Strawbery Jello', price: '7.49', desc: '', img: require('../img/jellos/strawberry-jello.jpg')},
        {id: 'Bluebery Jello', price: '6.99', desc: '', img: require('../img/jellos/blueberry-jello.jpg')},
        {id: 'Grape \n Jello', price: '6.49', desc: '', img: require('../img/jellos/grape-jello.jpg')}
    ]
    
    const [flip, setFlip] = useState(null)
    const handleFlip = (index) => {
        setFlip(flip === index ? null : index)
    }
    return(
        <main>
            <aside>
                <ul>
                    <li><HashLink to="#cheesecakes">Cheesecakes</HashLink></li>
                    <li><HashLink to="#cakes">Cakes</HashLink></li>
                    <li><HashLink to="#cupcakes">Cupcakes</HashLink></li>
                    <li><HashLink to="#jellos">Jellos</HashLink></li>
                </ul>
            </aside>
            <section id='cheesecakes' className='slt-section'>
                <div className="slt-section-title2  ">Cheesecakes</div>
                <div className="products">
                   { cheesecakes.map((cc, index) => (
                        <div className={` ${index % 2 === 0 ? 'product' : 'product2'} slt-flip-card ${flip === index ? 'flip' : ''}`}>
                            <div className="slt-flip-card-inner">
                                <div className="slt-flip-card-front">
                                    <img src={cc.img} alt={cc.id} />
                                    <p>{cc.id}<br/>${cc.price}</p>
                                    <div className='product-btn-container'>
                                        <button onClick={() => handleFlip(index)}>Ingredrients</button>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                                <div className="slt-flip-card-back">
                                    test
                                    <span onClick={() => handleFlip(index)}><FontAwesomeIcon icon="fa-solid fa-xmark" size='xl'/></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id='cakes' className='slt-section slt-secondary-bg'>
                <div className="slt-section-title">Cakes</div>
                <div className="products">
                   { cakes.map((cake, index) => (
                        <div className={` ${index % 2 === 0 ? 'product' : 'product2'} slt-flip-card ${flip === index ? 'flip' : ''}`}>
                            <div className="slt-flip-card-inner">
                                <div className="slt-flip-card-front">
                                    <img src={cake.img} alt={cake.id} />
                                    <p style={cake.id.includes('Carrot') ? {whiteSpace: 'pre-line'} : {}}>{cake.id}<br/>${cake.price}</p>
                                    <div className='product-btn-container'>
                                        <button onClick={() => handleFlip(index)}>Ingredrients</button>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                                <div className="slt-flip-card-back">
                                    test
                                    <span onClick={() => handleFlip(index)}><FontAwesomeIcon icon="fa-solid fa-xmark" size='xl'/></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id='cupcakes' className='slt-section'>
                <div className="slt-section-title2  ">Cupcakes</div>
                <div className="products">
                   { cupcakes.map((cup, index) => (
                        <div className={` ${index % 2 === 0 ? 'product' : 'product2'} slt-flip-card ${flip === index ? 'flip' : ''}`}>
                            <div className="slt-flip-card-inner">
                                <div className="slt-flip-card-front">
                                    <img src={cup.img} alt={cup.id} />
                                    <p>{cup.id}<br/>${cup.price}</p>
                                    <div className='product-btn-container'>
                                        <button onClick={() => handleFlip(index)}>Ingredrients</button>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                                <div className="slt-flip-card-back">
                                    test
                                    <span onClick={() => handleFlip(index)}><FontAwesomeIcon icon="fa-solid fa-xmark" size='xl'/></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section id='jellos' className='slt-section slt-secondary-bg'>
                <div className="slt-section-title">Jellos</div>
                <div className="products">
                   { jellos.map((jello, index) => (
                        <div className={` ${index % 2 === 0 ? 'product' : 'product2'} slt-flip-card ${flip === index ? 'flip' : ''}`}>
                            <div className="slt-flip-card-inner">
                                <div className="slt-flip-card-front">
                                    <img src={jello.img} alt={jello.id} />
                                    <p style={jello.id.includes('Mango') || jello.id.includes('Grape') ? {whiteSpace: 'pre-line'} : {}}>{jello.id}<br/>${jello.price}</p>
                                    <div className='product-btn-container'>
                                        <button onClick={() => handleFlip(index)}>Ingredrients</button>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                                <div className="slt-flip-card-back">
                                    test
                                    <span onClick={() => handleFlip(index)}><FontAwesomeIcon icon="fa-solid fa-xmark" size='xl'/></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
export default Menu