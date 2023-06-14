import React from 'react';
import per1 from '../images/per1.jpeg';
const BestTitle = () => {
    return (
        <div className='BestTitle'>
            <div className='BestTitle__item1'>
                <a href='#' className='BestTitle__item1__link'>
                    <p className='BestTitle__item1__link__tag'>Lifestyle</p>
                    <h1 className='BestTitle__item1__link__title'>Ten tell-tale signs you need to get a new startup.</h1>
                    <p className='BestTitle__item1__link__text'>No visited raising gravity outward subject my cottage Mr be.Hold do at tore in park feet near my case.</p>
                    <ul className='BestTitle__item1__link__autor'>
                        <li>
                            <img src={per1} width="5rem"/>
                            <strong>by Louis</strong>
                        </li>
                        <li>
                            November 14, 2023
                        </li>
                        <li>
                            3 min read
                        </li>
                    </ul>    
                </a>
            </div>
            <div className='BestTitle__item2'>
                <a href='#' className='BestTitle__item2__link1'>
                    <p className='BestTitle__item2__link1__tagt'>technology</p>
                    <h1 className='BestTitle__item2__link1__title'>Best Pinterest boards for leadning about business</h1>
                    <ul className='BestTitle__item2__link1__autor'>
                        <li>
                            <strong>by Bryan</strong>
                        </li>
                        <li>
                            August 18, 2023
                        </li>
                    </ul>   
                </a>
                <a href='#' className='BestTitle__item2__link2'>
                <p className='BestTitle__item2__link2__tagt'>Business</p>
                    <h1 className='BestTitle__item2__link2__title'>Best Pinterest boards for leadning about business</h1>
                    <ul className='BestTitle__item2__link2__autor'>
                        <li>
                            <strong>by Amanda</strong>
                        </li>
                        <li>
                            Fabruary 14, 2023
                        </li>
                    </ul>   
                </a>
                <a href='#' className='BestTitle__item2__link3'>
                    <p className='BestTitle__item2__link3__tagt'>Sports</p>
                    <h1 className='BestTitle__item2__link3__title'>Best Pinterest boards for leadning about business</h1>
                    <ul className='BestTitle__item2__link__autor'>
                        <li>3
                            <strong>by Louis</strong>
                        </li>
                        <li>
                            November 14, 2023
                        </li>
                    </ul>   
                </a>
            </div>
        </div>
    )
}
export default BestTitle;