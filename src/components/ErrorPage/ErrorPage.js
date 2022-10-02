import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className='ErrorPage'>
            <div>
                <h1>Error: 404</h1>
                <h3>This page is not found.</h3>
                <h4>Please check your url.</h4>
            </div>
        </div>
    );
};

export default ErrorPage;