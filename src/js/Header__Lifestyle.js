import React from 'react';
import Lifstyle from './objects/LIfestyle';
const Header__Lifestyle = () => {
    const lifestyle = Lifstyle.map((item, index) => {
        return (
            <div className=" not_hover Header__Lifestyle__minipage__container__item" key={item.id}>
                    <div className="Header__Lifestyle__minipage__container__item__image">
                        <img src={require(`../images/${item.image}`)} alt={item.title} />
                    </div>
                    
                    <div className="Header__Lifestyle__minipage__container__item__title">
                        <h1>{item.title}</h1>
                        <ul className="list-unstyled">
                            <li>{item.autor}</li>
                            <li>{item.date}</li>
                        </ul>
                    </div>
            </div>
        )
    })
    return (
        <li className="nav-item dropcenter  Header__Lifestyle">
            <a className="nav-link dropdown-toggle not_hover" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lifestyle
            </a>
            <div className="dropdown-menu Header__Lifestyle__minipage">
                <div className="Header__Lifestyle__minipage__container">
                    {lifestyle}
                    <div className='card'>
                        <p>The Blogzine</p>
                        <h1>Save on Premium Membership</h1>
                        <p>Get the insights report trusted by experts around the globe. Become a Member Today!</p>
                        <button>View pricing plans</button>
                    </div>
                </div>
                <div className="Header__Lifestyle__minipage__tags">
                    <h1>Trending tags:</h1>
                    <a href="#" className="btn btn-outline-secondary">Lifestyle</a>
                    <a href="#" className="btn btn-outline-secondary">Fashion</a>
                    <a href="#" className="btn btn-outline-secondary">Health</a>
                    <a href="#" className="btn btn-outline-secondary">Travel</a>
                    <a href="#" className="btn btn-outline-secondary">Food</a>
                    <a href="#" className="btn btn-outline-secondary">Design</a>
                    <a href="#" className="btn btn-outline-secondary">Culture</a>
                    <a href="#" className="btn btn-outline-secondary">People</a>
                    <a href="#" className="btn btn-outline-secondary">Video</a>
                </div>
            </div>
        </li>
    )
}
export default Header__Lifestyle;