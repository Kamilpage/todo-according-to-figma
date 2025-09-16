import {useState} from "react";
import history1 from './assets/history-1.png'
import history2 from './assets/history-2.png'
import history3 from './assets/history-3.png'
import './styles/main.css'

const History = () => {
    const [statistics] = useState([{amount: 93, name: 'Напитки'}, {
        amount: 206,
        name: 'Еда'
    }, {amount: 71, name: 'Закуски'}])
    return (
        <section className='history_content container d-flex'>
            <div className='history-left'>
                <h2>Наша <span className='dark-orange-text'> История</span></h2>
                <p>Как и у любого другого самобытного места, у нас есть своя, особая история. Идея
                    ресторана пришла
                    основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях
                    километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя
                    обустровать себе нехитрый быт, добывать и готовить себе еду.</p>
                <div className='history-left__bottom d-flex'>
                    {statistics.map((item, i) => (<div key={i} className='stats'>
                        <h3 className='dark-orange-stats'>{item.amount}</h3>
                        <p>{item.name}</p>
                    </div>))}</div>
            </div>

            <div className='history-right'>
                <div className='history-right__inner'>
                    <img src={history1} alt="#"/>
                    <img src={history2} alt="#"/>
                    <img src={history3} alt="#"/>
                </div>
            </div>
        </section>
    );
};

export default History;