import React from 'react';
import Ease from './easeit';
import './layout.css';
import Signup from './signup';


const layout = () => {
    return(
        <div className="main-container">
            <Ease />
            <Signup />
        </div>
    );
};

export default layout;