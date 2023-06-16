import React from 'react';
const Footer = () => {
    return (
        <div className='Footer'>
            <p className='Footer__text'>&copy; 2023 MB1. All rights reserved. Made with <span className='Footer__heart'>♥</span> by Mohamed Belkacem</p>
            <div className='Footer__links'>
                <div class="btn-group dropup-center">
                    <button type="button" class="btn btn-secondary " data-bs-toggle="dropdown" aria-expanded="false">
                        English
                    </button>
                    <ul class="Footer__links__languages dropdown-menu">
                        <li>Arabic</li>
                        <li>English</li>
                        <li>French</li>
                    </ul>
                </div>  
                <a href='#' className='Footer__link'>Terms of Use</a>
                <a href='#' className='Footer__link'>Privacy Policy</a> 
                <a href='#' className='Footer__link'>Cookie Policy</a>
            </div>              
        </div>
    )
}
export default Footer;