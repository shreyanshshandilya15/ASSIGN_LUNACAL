import './gallery.css';
import Images from '../Images.jsx';
import { useState ,useEffect} from 'react';
import axios from "axios";
import Left from '../Left/Left.jsx';

export default function Gallery() {
  const [images,setImages]=useState([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images') || '[]');
    setImages(storedImages);
  }, []);

  const handleChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result;
        const newImages = [...images, base64String];
        setImages(newImages);

        localStorage.setItem('images', JSON.stringify(newImages));
      };

      reader.readAsDataURL(file);
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
          <i className="fa-solid fa-arrow-left"></i>
          <i className="fa-solid fa-arrow-right"></i>
          </div>
         </div>
         <div className='images'>
          {images.map((imageUrl,index)=>{
            return <Images key={index} src={imageUrl} />
          })}
         </div>
      </div>
    </div>
  )
}
