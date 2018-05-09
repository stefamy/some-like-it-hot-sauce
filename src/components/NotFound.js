import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="page">
	<header>
    		<h1>Aw, that hot sauce doesn't exist.</h1>
    		<Link to="/" className="home-link">Back to our list!</Link>
    	</header>
    </div>
);

export default NotFound;
