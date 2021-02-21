import React from 'react';
import { useLayoutEffect } from 'react/cjs/react.development';
import daisie from '../images/icons/daisie.png'
import insta from '../images/icons/insta.png'
import twitter from '../images/icons/twitter.png'

const FindMe = () => {
    return (
        <div className="section section__findMe section--center" >
            <h3 className="heading heading--center" >Find me elsewhere on the internet:</h3>
            <div className="section__icons">
                <a href="https://www.daisie.com/aliceclaire23" >
                    <img src={daisie} alt="daisie logo icon" className="image icon" />
                </a>
                <a href="https://www.instagram.com/alice.claire.23/" >
                    <img src={insta} alt="insta logo icon" className="image icon" />
                </a>
                <a href="https://www.twitter.com/aliceclaire23" >
                    <img src={twitter} alt="twitter logo icon" className="image icon" />
                </a>
            </div>
        </div>
    )
};

export default FindMe;