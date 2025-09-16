import './styles/main.css'

const BussinesLunch = () => {
    return (
        <section className='bussinesLunch-section'>
            <div className='bussines-bg'>
                <div className='container'>
                    <div className="bussinesLunch__inner">
                        <div className="bussinesLunch__inner-info">
                            <h2>Отпразднуйте в одном из <br/>
                                самых лучших ресторанов.</h2>
                            <p>Только в этом месяце бизнес-ланч от 250 ₽</p>
                        </div>
                        <div className="bussinesLunch__inner-action">
                            <button className='orange-btn btn'>ЗАКАЗ СТОЛИКА</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
);
};

export default BussinesLunch;