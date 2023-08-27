import React from 'react'
import Image from 'react-bootstrap/Image';
import Profile from '../../Assets/myphoto2.png';
import './Home.css';

export default function Home() {
    return (
        <div className='about-container'>
            
            <div className='content-profile'>
                <p className='section-txt-p1'>Hello, I'm</p>
                <h1 className='title-home'>Jeremia</h1>
                <p className='section-txt-p2'>Frontend Developer React.js</p>
                <div className='btn-container'>
                    <button className='btn btn-color-1'>
                        Download CV
                    </button>
                    <button className='btn btn-color-2'>
                        Contact Info
                    </button>
                </div>
            </div>
            <div className='content-img'>
                <Image roundedCircle src={Profile} style={{
                    width: '275px',
                    height: '275px',
                }} />
            </div>
        </div>
    )
}
