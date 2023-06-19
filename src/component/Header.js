import React from 'react'
import profileImage from "../assest/img/Amit.jpeg"
import dPdf from "../assest/img/AMIT CV.pdf"
const Header = () => {
    return (
        <div className='header-container' id='home'>
            <div className='header-left'>
                <div className='profile-image'>
                    <img src={profileImage} />
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-content'>
                    <h3>Full Stack Developer</h3>
                    <h1>Amit Kumar</h1>
                    <p>I'm passionate about developing a better world through technology. I've always been an analytical problem solver as well and the software developing process is a great fit for my personality and thinking style</p>
                    <div className='header-right-button'>
                        <a href={dPdf} download="AMIT CV"><button>Download</button></a>
                        <a href='#contact'><button>Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header