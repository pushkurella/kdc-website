import React from 'react';
import "semantic-ui-css/semantic.min.css";
import "../styles/Logo.css"


export default function AnimatedLogo() {
    //return animated kdc logo for a loading icon 
    return (
        <div className="kdc-logo-div">
            <img src={require("./../assets/KDCLogoNoSquares.png")} alt="KDC-logo" className="kdc-logo-text" />
            <div className="kdc-text">KITCHENER DEVELOPMENT CENTRE</div>
            <div className="kdc-logo sq1"></div>
            <div className="kdc-logo sq2"></div>
            <div className="kdc-logo sq3"></div>
        </div>
    );
}
