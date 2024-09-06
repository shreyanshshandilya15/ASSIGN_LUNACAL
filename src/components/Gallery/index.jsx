import './gallery.css';
import Images from '../Images.jsx';
import { useState ,useEffect} from 'react';
import axios from "axios";
import Left from '../Left/Left.jsx';

export default function Gallery() {
  const [images,setImages]=useState(
    [
     {imageUrl:"./assets/johnwick.jpg"}
     ,{imageUrl:"./assets/burger.jpg"},
      {imageUrl:"./assets/mustang.jpg"}
     ]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const storedData = localStorage.getItem('images');
    if (storedData) {
      try {
        const parsedImages = JSON.parse(storedData);
        setImages(Array.isArray(parsedImages) ? parsedImages : []);
      } catch (error) {
        console.error('Error parsing stored images:', error);
        setImages([]);
      }
    }
  }, []);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        const newImages = [...images,{imageUrl:base64String} ];
        setImages(newImages);

        localStorage.setItem('images', JSON.stringify(newImages));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="gallery">
      <div className='gallery-left'>
         <Left />
      </div>
      <div className='gallery-right'>
         <div className='buttons-gal'>
          <button>Gallery</button>
          <div className='buttons-gal-right'>
          <input 
                type="file" 
                onChange={handleChange}
                id='file-image'
                style={{display:"none"}}
          />
          <label 
                className='upload-label'
                htmlFor='file-image'
           >+ADD IMAGE</label>
          <i className="fa-solid fa-arrow-left" onClick={handlePrev}></i>
          <i className="fa-solid fa-arrow-right" onClick={handleNext}></i>
          </div>
         </div>
         <div className='images'>
          {images.slice(currentIndex,currentIndex+3).map((image,index)=>{
            return <Images key={index} src={image.imageUrl} alt={`Image ${index+1}`}/>
          })}
         </div>
      </div>
    </div>
  )
}
