import React from 'react';
const Shop = () => {
    return (
        <li className=" spicial__li nav-item dropend">
            <a className="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
            Shop
            </a>
            <ul  className="Header__dropdowns__Home dropdown-menu">
                <li><a className="dropdown-item" href="#">Shop Grid</a></li>
                <li><a className="dropdown-item" href="#">Shop Detail</a></li>
                <li><a className="dropdown-item" href="#">Checkout</a></li>
                <li><a className="dropdown-item" href="#">Cart</a></li>
                <li><a className="dropdown-item" href="#">Empty Cart</a></li>
            </ul>
        </li>
    )
}
export default Shop;