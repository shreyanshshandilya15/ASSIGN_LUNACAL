import './Gallery.css';
import Images from '../Images.jsx';
import { useState } from 'react';
import axios from "axios";
import Left from '../Left/Left.jsx';

export default function Gallery() {
  const [images,setImages]=useState([]);
  
  const handlechange=async(e)=>{
    const file=e.target.files[0];
   
    if(file){
       const newdata=new FormData();
       newdata.append('image',file);
       try{
        const res=await axios.post('http://localhost:4000/upload',newdata,{
          headers:{
            "Content-Type":"multipart/form-data",
          }
         });
         setImages([...images,res.data.imageUrl]);
         console.log(res.data.imageUrl);
       }catch(error){
        console.error("error uploading the image :",error);
    }
    }
  }

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
                onChange={handlechange}
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
