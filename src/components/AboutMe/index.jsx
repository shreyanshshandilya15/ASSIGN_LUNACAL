import './aboutme.css';
import Left from '../Left/Left.jsx';

export default function AboutMe() {
  return (
    <div className="aboutme">
      <div className='about-left'>
      <Left />
      </div>
      <div className='about-right'>
        <div className='buttons-about'>
          <button>AboutMe</button>
          <button>Experience</button>
          <button>Recommended</button>
        </div>
        <div className='para'>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Corporis unde amet quas
          provident earum saepe fugit corrupti 
          dicta accusantium. Deserunt!
        </div>
      </div>
    </div>
  )
}
