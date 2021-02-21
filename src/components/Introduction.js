import React from 'react';
import selfPortrait from '../images/self_portrait.png'

const Introduction = () => {
    return (
        <div className="section" >
            <img src={selfPortrait} alt="digital self portrait of Alice" className="image image__portrait" />
            <div className="section__text section--center" >
                <h1 className="heading" >Hi, I'm Alice.</h1>
                <p>I’m a Yorkshire based software developer and general creative tinkerer, and  my face looks a little like this:</p>
                <p>For more info, just keep scrolling. Just keep scrolling. Just keep scrolling, scrolling, scrolling. What do we do? We scroll, scroll. </p>
            </div>
        </div>
    )
};

export default Introduction;