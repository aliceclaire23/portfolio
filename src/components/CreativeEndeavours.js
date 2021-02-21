import React from 'react';
import bLSC1 from '../images/art/BLSC1.png'
import ellewoods from '../images/art/ElleWoods.jpg'
import inkling from '../images/art/Inkling.JPG'
import inktober from '../images/art/Inktober.png'
import mermaid from '../images/art/Mermaid.png'
import pole from '../images/art/Pole.png'

const CreativeEndeavours = () => {
    return (
        <div className="section" >
            <div className="section__text section--right" >
                <h2 className="heading" >Creative Endeavours</h2>
                <p>Outside of writing code, I:</p>
                <ul>
                    <li>I am a pretty good cook. I make excellent brownies, but can’t portion spaghetti without using scales.</li>
                    <li>I’m a singer and guitarist who sometimes likes to plonk my fingers on a piano.</li>
                    <li>I have a bad habit of accidentally killing plants then crying because I am a bad plant mother.</li>
                    <li>AND I really like drawing.</li>
                </ul>

                <p>I mostly use procreate to do quick sketches and experiment with new art styles, but I also like using watercolour paints and pens, and I’ve recently started dabbling in cel animation.</p>

                <p>I’ve been attending <a href="https://linktr.ee/Bodylovesketchclub">BodyLoveSketchClub</a> life drawing classes since October 2020, partly as a way to engage with other likeminded people during lockdown, but also to find new inspiration.</p>

                <p>I have a dedicated arty instagram for my various scribbles and sketches by the name of <a href="https://www.instagram.com/alicedoesartythings/">@alicedoesartythings</a>.</p>
            </div>

            <div className="section__images" >
                <img className="image image__art" src={bLSC1}  alt="sketch" />
                <img className="image image__art" src={ellewoods} alt="sketch" />
                <img className="image image__art" src={inkling} alt="sketch" />
                <img className="image image__art" src={inktober} alt="sketch" />
                <img className="image image__art" src={mermaid} alt="sketch" />
                <img className="image image__art" src={pole} alt="sketch" />
            </div>
        </div>
    )
};

export default CreativeEndeavours;