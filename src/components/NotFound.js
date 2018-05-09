import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="page">
    	<h1>Sauce Not Found.</h1>
    	<Link to="/" className="home-link">Back to our list!</Link>
    </div>
);

export default NotFound;
