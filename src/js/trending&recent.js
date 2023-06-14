import React from 'react';
import RecentPost from './objects/RecentPost';
const TrendingAndRecent = () => {
    const RecentPostList = RecentPost.map((post) => {
        let image = require(`../images/${post.image}`);
        return(
        <div key={post.id} className='TrendingAndRecent__recent__posts__post'>
            <div className='TrendingAndRecent__recent__posts__post__image'>
                <img src={image} alt={post.title} />
            </div>
            <div className='TrendingAndRecent__recent__posts__post__content'>
                <h1>{post.title}</h1>
                <p>{post.date}</p>
            </div>
        </div>
        )
    })
    return (
        <div className='TrendingAndRecent'>
            <div className='TrendingAndRecent__socialmedia'>
                <div className='TrendingAndRecent__socialmedia__facebook'>
                    <i className="fab fa-facebook-f"></i>
                    <h1>1.5K</h1>
                    <p>Fans</p>
                </div>
                <div className='TrendingAndRecent__socialmedia__instagram'>
                    <i className="fab fa-instagram"></i>
                    <h1>1.8M</h1>
                    <p>Followers</p>
                </div>
                <div className='TrendingAndRecent__socialmedia__youtube'>
                    <i className="fab fa-youtube"></i>
                    <h1>2.5K</h1>
                    <p>Subs</p>
                </div>
            </div>
            <div className='TrendingAndRecent__trending'>
                <h1 className='TrendingAndRecent__trending__title'>Trending topics</h1>
                <div className='TrendingAndRecent__trending__topics'>
                    <div className='TrendingAndRecent__trending__topics__travel'>
                        <h1>Travel</h1>
                    </div>
                    <div className='TrendingAndRecent__trending__topics__bussiness'>
                        <h1>Bussiness</h1>
                    </div>
                    <div className='TrendingAndRecent__trending__topics__marketing'>
                        <h1>Marketing</h1>
                    </div>
                    <div className='TrendingAndRecent__trending__topics__photography'>
                        <h1>Photography</h1>
                    </div>
                    <div className='TrendingAndRecent__trending__topics__sport'>
                        <h1>Sport</h1>
                    </div>
                    <a href='#'>View all categories</a>
                </div>
                
            </div>
            <div className='TrendingAndRecent__recent'>
                <h1>Recent posts</h1>
                <div className='TrendingAndRecent__recent__posts'>
                    {RecentPostList}
                </div>
            </div>
        </div>
    )
}
export default TrendingAndRecent;