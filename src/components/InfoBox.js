import React from 'react';
import '../css/InfoBox.css';

const InfoBox = ({children, style}) => {
    return (
        <div className="info-box col" style={style}> 
        {
            children
        }
        </div>
    )
};

export default InfoBox;

