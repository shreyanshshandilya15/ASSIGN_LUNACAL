import './aboutme.css';
import { useState } from 'react';
import Left from '../Left/Left.jsx';

export default function AboutMe() {
  const [activeButton, setActiveButton] = useState(null); // Track which button is active

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="aboutme">
      <div className='about-left'>
      <Left />
      </div>
      <div className='about-right'>
        <div className='buttons-about'>
          <button  
               onClick={() => handleButtonClick('aboutMe')}
               className={activeButton === 'aboutMe' ? 'active' : ''}>
                AboutMe
          </button>
          <button
            onClick={() => handleButtonClick('experience')}
            className={activeButton === 'experience' ? 'active' : ''}
          >
            Experience
          </button>
          <button
            onClick={() => handleButtonClick('recommended')}
            className={activeButton === 'recommended' ? 'active' : ''}
          >
            Recommended
          </button>
        </div>
        <div className='para'>
          Hi, I am shreyansh Tiwari, who is into MERN Stack development and i have 
          build projects like chat-application and food-ordering application and 
          some mini games like 2048 and QUIZ using javascript to showcase my skills . 
          I have also been learning data structures and algorithms in order to imporve my problem solving skills.
          I am looking forward to use my knowledge and learn some new things under some type of mentorship
        </div>
      </div>
    </div>
  )
}
