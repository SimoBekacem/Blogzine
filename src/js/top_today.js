import React from 'react';
import TopTodayObject from './objects/TopToday';
const TopToday = () => {
    const TopTodayItems = TopTodayObject.map((item) => {
        let itemimage = require(`../images/${item.image}`);
        let itemautorimage = require(`../images/${item.autor_image}`);
        return (
            <div className='TopToday__items__item' key={item.id}>
                <div className='TopToday__items__item__img'>
                    <img src={itemimage} alt={item.title} />
                    <div className='TopToday__items__item__img__catigory'>
                        <span>{item.catigory}</span>
                    </div>
                </div>
                <div className='TopToday__items__item__text'>
                {item.isSponsored ? <div className='TopToday__items__item__img__sponsored'>Sponsored</div> : null}
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className='TopToday__items__item__text__autor'>
                        <img src={itemautorimage} alt={item.autor} />
                        <span>{item.autor}</span>
                        <span>{item.date}</span>
                    </div>
                </div>
            </div>
        )
    });  
    
    

    return (
        <div className='TopToday'>
            <div className='TopToday__title'>
                <h2><i className="fa-solid fa-hourglass-start"></i>Today's top highlights</h2>
                <p>Latest breaking news, pictures, videos, and special reports</p>
            </div>
            <div className='TopToday__items'>
                {TopTodayItems}
            </div>
            <div className='TopToday__button'>
                <button>Load more post <i className="fa-solid fa-circle-arrow-down"></i></button>
            </div>
        </div>
    )
}
export default TopToday;