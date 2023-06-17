import React from 'react';
const TrandingSlider = () => {
    const [counter, setCounter] = React.useState(0);
    const titleslist = [
        "How the 10 worst business fails of all time could have been prevented",
        "The most common business debate isn't as black and white as you might think",
        "The most common business debate isn't as black and white as you might think",
        "The most common business debate isn't as black and white as you might think"
    ]
    const titleslistjsx = titleslist.map((title, index) => {
        return(
            <p 
                className={`TrandingSlider__slider__item${index}`} 
                key={index}
                style={{left: `${index*100}%`,
                        transform: `translateX(${counter*100}%)`}}
                >
                    {title}
            </p>
        )
    })
    const handleCounter = (side) => {
        const sign = side === 'left' ? -1 : 1;
        setCounter(prevcounter => {
            if(prevcounter === -3 && side === 'left'){
                return prevcounter = 0;
            }else if(prevcounter === 0 && side === 'right'){
                return prevcounter = -titleslist.length + 1;
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
        <div className='TrandingSlider'>
            <button className='TrandingSlider__button'>Tranding:</button>
            <div className='TrandingSlider__slider'  >
                {titleslistjsx}
            </div>
            <div className='TrandingSlider__buttons'>
                <i className="fa-solid fa-circle-chevron-left" onClick={()=>{
                    handleCounter('right');
                }}></i>
                <i className="fa-solid fa-circle-chevron-right" onClick={()=>{
                    handleCounter('left');
                }}></i>
            </div>
        </div>
    )
}
export default TrandingSlider;