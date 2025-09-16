import './styles/main.css'
import {useState} from "react";
import reviewer from './assets/1reviewer.png';

const ReviewPart = () => {
    const text = 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!'
    const [clients] = useState([
        {opinion: text, name: 'Николай', image: reviewer, position:'Посетитель'}
    ])
    return (
        <section className="review-section">
            <div className='container'>
                {clients.map((client, index) => (
                    <div key={index} className='review-item'>
                        <p>{client.opinion}</p>
                        <img src={client.image} alt="#"/>
                        <h2>{client.position}</h2>
                        <h1>{client.name}</h1>
                    </div>))}
            </div>
        </section>
    );
};

export default ReviewPart;