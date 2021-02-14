import React from 'react';
import selfPortrait from '../images/self_portrait.png'

const Introduction = () => {
    return (
        <div>
            <h1>Hi, I'm Alice.</h1>
            <p>I’m a Yorkshire based software developer and general creative tinkerer, and  my face looks a little like this:</p>
            <img src={selfPortrait} alt="digital self portrait of Alice" />
            <p>For more info, just keep scrolling. Just keep scrolling. Just keep scrolling, scrolling, scrolling. What do we do? We scroll, scroll. </p>
        </div>
    )
};

export default Introduction;