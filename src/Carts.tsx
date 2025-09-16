import {useState} from "react";
import mealIcon from './assets/meal-icon.svg';
const Carts = () => {
    const [carts] = useState([
        {icon: mealIcon, title:<>Магическая <span className='dark-orange-text'>Атмосфера</span></>, body:'В нашем заведении царит|магическая атмосфера|наполненная вкусными|ароматами '},
        {icon: mealIcon, title: <>Лучшее качество <span className='dark-orange-text'>Еды</span></>, body: 'Качество нашей|Еды - отменное!'},
        {icon:mealIcon, title: <>Недорогая <span className='dark-orange-text'>Еда</span></>, body: 'Стоимость нашей Еды|зависит только от ее|количества. Качество|всегда на высоте!'}]);
    return (
        <section className='cards'>
        <div className='meal-head container d-flex '>
        { carts.map((cart, index) => (<div className='meal-icon-element' key={index}>
        <img src={cart.icon} alt="icon"/>
        <h3>{cart.title}</h3>
        <p className='grey-p'>
            {cart.body.split("|")[0]}<br/>{cart.body.split("|")[1]}<br/>{cart.body.split("|")[2]}<br/>{cart.body.split("|")[3]}
        </p>

    </div>))}
</div>
</section>
    );
};

export default Carts;