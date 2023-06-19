import React from 'react'
import foodImage from "../assest/img/food.png"
import portImage from "../assest/img/portfolio.png"
import tempImage from "../assest/img/temperature.jpeg"
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className='project' id='project'>
          <h1 className='heading text-center'>Project</h1>
          <div className='project_content'>
            <ProjectCard name="Food Park" url="https://amit2908kumar.github.io/OIBSIP/𝒐𝒊𝒃𝒔𝒊𝒑_𝒕𝒂𝒔𝒌𝒏𝒐_1/index.html" img={foodImage}/>
            <ProjectCard name="Portfolio" url="https://amit2908kumar.github.io/OIBSIP/𝒐𝒊𝒃𝒔𝒊𝒑_𝒕𝒂𝒔𝒌𝒏𝒐_2/index.html" img={portImage}/>
            <ProjectCard name="Temperature Convertor" url="https://amit2908kumar.github.io/OIBSIP/𝒐𝒊𝒃𝒔𝒊𝒑_𝒕𝒂𝒔𝒌𝒏𝒐_3/index.html" img={tempImage}/>
          </div>
        </div>
  )
}

export default Project