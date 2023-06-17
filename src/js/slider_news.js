import React from 'react';
import NewsSlides from './objects/NewsSlides';
const SliderNews = () => {
    const [counter, setCounter] = React.useState(0);
    const newslist = NewsSlides.map((news,index) => {
        const translation = window.screen.width <= 770 ? 50 : 25;
        let new_img = require(`../images/${news.img}`);
        let autor_img = require(`../images/${news.autor_img}`);
        return(
            <div key={news.id} style={{left:`${index*translation}%`,transform:`translateX(${counter*100}%)`}} className='SliderNews__slidercontainer__slide'>
                <div className='SliderNews__slidercontainer__slide__image'> 
                    <img src={new_img} alt={news.title}/>
                    <span>{news.tag}</span>
                </div>
                <div className='SliderNews__slidercontainer__slide__content'>
                    <div className='SliderNews__slidercontainer__slide__content__title'>
                        <h1>{news.title}</h1>
                    </div>
                    <div className='SliderNews__slidercontainer__slide__content__autor'>
                        <div className='SliderNews__slidercontainer__slide__content__autor__image'>
                            <img src={autor_img} alt={news.autor}/>
                        </div>
                        <div className='SliderNews__slidercontainer__slide__content__autor__name'>
                            <p>{news.autor}</p>
                        </div>
                        <div className='SliderNews__slidercontainer__slide__content__autor__date'>
                            <p>{news.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    
    const handleCounter = (side) => {
        if(window.screen.width <= 770){
            const sign = side === 'left' ? -2 : 2;
        }
        const sign = side === 'left' ? -1 : 1;
        setCounter(prevcounter => {
            if(prevcounter === -2 && side === 'left'){
                return prevcounter = 0;
            }else if(prevcounter === 0 && side === 'right'){
                return prevcounter = -newslist.length + 4;
            }
            return prevcounter = prevcounter + sign;
        })
    }
    React.useEffect(() => {
        const interval = setInterval(() => {
            handleCounter('left');
        }, 10000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='SliderNews'>
            <div className='SliderNews__title'>
                <h1><i className="fa-solid fa-bullhorn"></i>Sponsored news</h1>
                <p>News from our sponsors</p>
            </div>
            <div className='SliderNews__slidercontainer'>
                {newslist}
            </div>   
            <div className='SliderNews__buttons'>
                <i className="fa-solid fa-circle-chevron-left"onClick={ ()=>{handleCounter('right')}}  ></i>
                <i className="fa-solid fa-circle-chevron-right" onClick={()=>{handleCounter('left')}}></i>
            </div>
        </div>
    )
}
export default SliderNews;