import React from 'react'
import helloImage from "../assest/img/hello.gif"

const Welcome = () => {
  return (
    <div className='welcome_container' id='welcome'>
          <div className='welcome-left'>
            <h1>Welcome to Amit’s World!</h1>
            <p>Skilled and Motivated Full Stack Developer with a Strong Passion for Learning and Open Source Contributions.</p>
            <p>I am an accomplished web developer, driven by a relentless desire to acquire new skills and make meaningful contributions to open source initiatives. My academic pursuits have led me to pursue a Bachelor's degree in Computer Science Engineering from Vellore Institute of Technology. I possess a comprehensive understanding of programming languages, including C++, Java, HTML, CSS, MySQL, and JavaScript, which has equipped me to develop robust web solutions. Additionally, my proficient communication skills in English and Hindi enable me to collaborate seamlessly with diverse teams.</p>
          </div>
          <div className='welcome-right'>
            <div className='welcome_image'>
              <img src={helloImage} />
            </div>
          </div>
        </div>
  )
}

export default Welcome