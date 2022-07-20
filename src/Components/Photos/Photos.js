import { style } from '@mui/system';
import React, { useState } from 'react';
import styles from './Photos.module.css';

const Photos = ({photos, photoVisibility, setPhotoVisibility, setAlbumVisibility}) => {
  const [visibility, setVisibility] = useState(false);
  
  const handleClick = e => {
    setPhotoVisibility(false);
    setAlbumVisibility(true);
  }
  const DeletePhoto = (id) => {
    const filteredPhotos = photos.filter(photos = photos.id =! id)
    setPhotoVisibility(filteredPhotos)
    
  };
  
  return (
    <div style={{display: photoVisibility ? "block":"none"}}>
    <span className={styles.btnClose}onClick={handleClick}>X</span>
      <h1>Photos</h1>   
     
      <div className={styles.photos_wrap}>
        {
          photos.map(photo => {
            return (
              <div className={styles.photo}>
                <img  onClick={() => {handleClick(photos.id)} }  src={photo.thumbnailUrl}/>
                 <h6>{photo.title}</h6>    
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Photos;