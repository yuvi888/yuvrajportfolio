import React from 'react';
import '../style.css';
import Type from './Type';
import Techstack from './Techstack';
function About() {
    return (
        <>
        
            <main2 className="container-fluid about">
                <div className='aboutdiv1'>
                    <p>Professional&nbsp;&nbsp;</p>
                    <p style={{ color: "rgb(76 201 136)"}}>
                        <Type text="Skills" />
                    </p>
                </div>

                <div className='aboutdiv2'>
                    <Techstack/>
                </div>
            </main2>
        </>
    );
}

export default About;