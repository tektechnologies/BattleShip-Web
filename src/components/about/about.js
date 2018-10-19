import React, { Component } from 'react';
import './about.css';
import Ethan from '../../styles/images/Ethan.jpg';
import Dylan from '../../styles/images/Dylan.jpg';
import John from '../../styles/images/John.jpg';
import Craig from '../../styles/images/craig.jpg';
import Nathan from '../../styles/images/nathan.jpg';

export default class About extends Component {

  render() {
    return (
      <main>
        <h2> About Us </h2>
        <div className="about">
          <div className='ethan'>
            <h3>Ethan</h3>
            <img className='ethan-img' alt='ethan' src={Ethan}/>
            <p>I am a paranormal sceptic who heard about this project and thought it might be fun to see the data corrilation. Besides that We took the opportunity to use our newly aquried technical skill to use different APIs. For this project I personally focused on the back-end sources using javascript and SQL queries. We hope that this website is a smooth and fun experience for everyone.</p>
          </div>
          <div className='dylan'>
            <h3>Dylan</h3>
            <img className='dylan-img' src={Dylan} alt='dylan' />
            <p>I am a software developer with an eye for design. I have a degree in Game Design from Full Sail university and have always enjoyed thinking about and watching something go from just an idea in your head to an actual entity that the world can see and interact with. With the background I have and the skills I am aquiring from DeltaV I hope to move into the field of web design, game design, or a combination of the two.</p>
          </div>
          <div className='craig'>
            <h3>Craig</h3>
            <img className='craig-img' src={Craig} alt='craig' />
            <p>With a Management Information Systems Degree, I have worked with medium retail businesses for the last 15 years and enjoy using my knowledge to create value for those companies. I am currently a DeltaV student, as well as a Kirkwood Community College student finishing a Computer Software Development and Web Technologies Associate in Applied Science. I am effective at learning and integrating those new technology skills into my development process. I am hoping to find a role creating world class business applications for small to medium size businesses. As a small business owner I know the importance of having a strategic business plan that includes technology as a main component to their success; and I want to share my management skills and experiences with them to help them overcome the boundaries that all businesses face in the global market.</p>
          </div>
          <div className='nathan'>
            <h3>Nathan</h3>
            <img className='nathan-img' src={Nathan} alt='nathan' />
            <p>I&apos;m an ex-music educator with a bachelor&apos;s degree from Drake University. After choosing to leave the field of education, I decided to follow an interest in technology I&apos;ve had since a young age. My interest in the field was inspired by the numerous innovations that constantly emerge from the field of technology and I decided I&apos;d like to be a part of that. Through my past experiences in education and music, I am proficient in higher-level thinking and professional communication and I have developed a strong work ethic and sense of self-motivation. In my current field, I am well rounded in HTML, CSS, and Javascript and I am adept at thinking through a given problem and figuring out the most effective way to solve it. My goal is simply to find a role in an industry where I can make use of my love of learning.</p>
          </div>
          <div className='john'>
            <h3>John</h3>
            <img className='john-img' src={John} alt='john' />
            <p>I am new to the coding world. I haven&apos;t had any experience building websites until I came to DeltaV. Within the past five months, I have gone from being a novice to being somewhat experienced with building and creating websites. Through DeltaV, I have learned how to use javascript, html, css, node.js, SQL, express and React.</p>
          </div>
        </div>
      </main>
    );
  }
}