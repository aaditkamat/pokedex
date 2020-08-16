import React from 'react';
import '../css/InfoBox.css';

const InfoBox = ({children}) => {
    return (
        <div className="info-box col"> 
        {
            children
        }
        </div>
    )
};

export default InfoBox;

