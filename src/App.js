import React, { useState } from 'react';
import './App.css';
import Albums from './Components/Albums/Albums'
import Photos from './Components/Photos/Photos'
import Footer from './Components/Footer/Footer'

function App() {
  const [reqPhotos, setReqPhotos] = useState([]);
  const [photoVisibility, setPhotoVisibility] = useState(false);
  const [albumVisibility, setAlbumVisibility] = useState(true);
  return (
    <div>
      <Photos photos={reqPhotos} setPhotoVisibility={setPhotoVisibility} setAlbumVisibility={setAlbumVisibility} photoVisibility={photoVisibility} />
      <Albums setReqPhotos={setReqPhotos} setPhotoVisibility={setPhotoVisibility} setAlbumVisibility={setAlbumVisibility} photoVisibility={photoVisibility} albumVisibility={albumVisibility}/>
       <Footer></Footer> 
    </div>
  );
}

export default App;