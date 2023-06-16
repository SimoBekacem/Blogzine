import React from 'react';
import appstore from '../images/app-store.svg';
import googleplay from '../images/google-play.svg';
const Links = () => {
    return (
        <div className='Links'>
            <div className='Links__divs'>
                <div className='Links__recentpost'>
                    <h1>Recent Posts</h1>
                    <div className='Links__recentpost__business'>
                        <h3>Business</h3>
                        <h1><a>Up-coming business bloggers, you need to watch</a></h1>
                        <ul>
                            <li>by Dennis</li>
                            <li>Apr 06, 2022</li>
                        </ul>
                    </div>
                    <div className='Links__recentpost__marketing'>
                        <h3>Marketing</h3>
                        <h1><a>How did we get here? The history of the business told through tweets</a></h1>
                        <ul>
                            <li>by Larry</li>
                            <li>May 29, 2022</li>
                        </ul>
                    </div>
                </div>
                <div className='Links__Navigation'>
                    <h1>Navigation</h1>
                    <div className="Links__Navigation__links">
                        <ul>
                            <li><a>Features</a></li>
                            <li><a>Style Guide</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>Get Theme</a></li>
                            <li><a>Support</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Newsletter</a></li>
                        </ul>
                        <ul>
                            <li><a>News</a></li>
                            <li><a>Career</a></li>
                            <li><a>2 Job</a></li>
                            <li><a>Technology</a></li>
                            <li><a>Startups</a></li>
                            <li><a>Gadgets</a></li>
                            <li><a>spiration</a></li>
                        </ul>
                    </div>
                </div>
                <div className='Links__social'>
                    <h1>Get Regular Updates</h1>
                    <ul>
                        <li><i className="fa-brands fa-square-whatsapp"></i><a>Youtube</a></li>
                        <li><i className="fa-brands fa-square-youtube"></i><a>Facebook</a></li>
                        <li><i className="fa-solid fa-bell"></i><a>Website Notifications</a></li>
                        <li><i className="fa-solid fa-envelope"></i><a>Newsletters</a></li>
                        <li><i className="fa-solid fa-podcast"></i><a>Podcasts</a></li>
                    </ul>
                </div>
                <div className='Links__mobileapp'>
                    <h1>Our mobile App</h1>
                    <p>Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
                    <div className='Links__mobileapp__download'>
                        <img src={appstore} alt='googleplay' />
                        <img src={googleplay} alt='appstore' />
                    </div>
                </div>
            </div>
            <div className='Links__footer'>
                <h1>Hot topics</h1>
                <div className='Links__footer__topics'>
                    <ul>    
                        <li><a>Covid-19 </a></li>
                        <li><a>Politics</a></li>
                        <li><a>Media </a></li>
                        <li><a>Entertainment </a></li>
                        <li><a>Royalist </a></li>
                        <li><a>World </a></li>
                        <li><a>Half </a></li>
                        <li><a>Full </a></li>
                        <li><a>Scouted </a></li>
                        <li><a>Travel </a></li>
                        <li><a>Beast </a></li>
                        <li><a>Inside Crossword </a></li>
                        <li><a>Newsletters </a></li>
                        <li><a>Podcasts </a></li>
                        <li><a>Auction 2022 </a></li>
                        <li><a>Protests </a></li>
                        <li><a>NewsCyber </a></li>
                        <li><a>Education </a></li>
                        <li><a>Sports </a></li>
                        <li><a>Tech And Auto </a></li>
                        <li><a>Opinion</a></li>
                        <li><a>Share </a></li>
                        <li><a>Market</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Links;