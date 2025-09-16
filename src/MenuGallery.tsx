import './styles/main.css'
import gallery1 from './assets/gallery-1.png'
import gallery2 from './assets/gallery-2.png'
import gallery3 from './assets/gallery-3.png'
import chief1 from './assets/our-chiefs1.png'
import chief2 from './assets/our-chiefs2.png'
import chief3 from './assets/our-chiefs3.png'





const MenuGallery = () => {
    return (
        <section className='gallery-section'>
            <div className='container'>
                <h2 className='galleryHeader'>Галерея <span className='dark-orange-text'>Блюд</span></h2>
                <div className='galleryImages-first'>
                    <div className="firstSet">
                        <img src={gallery1} alt="#"/>
                        <img src={gallery2} alt="#"/>
                        <img src={gallery3} alt="#"/>
                    </div>
                    <div className="secondSet">
                        <img src={gallery2} alt="#"/>
                        <img src={gallery3} alt="#"/>
                        <img src={gallery1} alt="#"/>
                    </div>
                </div>
                    <h2 className='galleryHeader'>Наши <span className='dark-orange-text'>Повара</span></h2>
                <div className='galleryImages-second'>
                    <img src={chief1} alt="#"/>
                    <img src={chief2} alt="#"/>
                    <img src={chief3} alt="#"/>

                </div>
            </div>
                <div className='lastBg'></div>
        </section>
    );
};

export default MenuGallery;