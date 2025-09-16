import cart from "./assets/cart.svg";
import './styles/main.css'
import logo from './assets/logo.svg'

function Header() {
    return (
        <section className='header'>
        <div className='container'>
            <div className='header__inner'>
                <div className="nav-left">
                    <img src={logo} alt="#"/>
                </div>
                <div className='nav-right'>
                    <div className='nav-links'>
                        <a href="#">ГЛАВНАЯ</a>
                        <a href="#">МЕНЮ</a>
                        <a href="#">О НАС</a>
                        <a href="#">БРОНЬ</a>
                        <img
                            src={cart} alt="#"/>
                    </div>
                    <hr className='vertical-line'/>
                    <div className='contact-left'>
                        <div className='contact'>
                            <p style={{fontWeight: "bold"}}>+999-888-76-54</p>
                            <p>Свяжитесь с нами для <br/>
                                бронирования</p>
                        </div>
                        <button className='orange-btn btn'>Заказ столика</button>
                    </div>
                </div>

            </div>
        </div>
        </section>
    );
};

export default Header;