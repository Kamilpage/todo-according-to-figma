import './styles/main.css'
import pizza from './assets/meal-pizza.png'
import burger from './assets/burger-image.png'

const Meals = () => {
    return (
        <section className='meal-section'>
            <div className='container'>
                <div className="meal-section__inner">
                    <h2>Наши <span className='dark-orange-text'>Блюда</span></h2>
                    <div className="meal__pricing">
                        <div className="meal-image">
                            <img src={pizza} alt="#"/>
                        </div>
                        <div className="burger-image">
                            <img src={burger} alt="#"/>
                            <img src={burger} alt="#"/>
                            <img src={burger} alt="#"/>
                        </div>

                        <div className="burger-price">
                            <p>Гамбургер мини ------------------------- 220 ₽</p>
                            <p>Гамбургер мини ------------------------- 220 ₽</p>
                            <p>Гамбургер мини ------------------------- 220 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Meals;