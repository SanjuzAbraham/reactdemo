import React from 'react';
import Ease from './easeit';
import './layout.css';
import Login from './login';

const layout = () => {
    return(
        <div className="main-container">
            <Ease />
            <Login />
        </div>
    );
};

export default layout;