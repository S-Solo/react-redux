import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/orders'>Orders</Link></li>
            </nav>
        </div>
    );
}
export default Header;