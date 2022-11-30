import React from 'react';
import errorimg from '../../assets/404page/404.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-full h-full' src={errorimg}  alt=''></img>
        </div>
    );
};

export default ErrorPage;