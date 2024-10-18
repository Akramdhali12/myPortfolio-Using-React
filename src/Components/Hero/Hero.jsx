// import React from 'react'
import './Hero.css';
import profile_pic from '../../assets/profile_pic.jpg';
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt="" />
        <h1><span>I&apos;m Akram Hossain,</span>frontend developer based in Bangladesh</h1>
        <p>I am a frontend developer from Dhaka,BD with 4 years of experience.</p>
        <div className="hero-action">
            <div className="hero-connect"><Link to='contact' spy={true} smooth={true} offset={100}>Connect with me</Link></div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero