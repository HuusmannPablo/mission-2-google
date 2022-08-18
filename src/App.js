import './App.css';
import axios from 'axios'
import React, { useState } from 'react'

function App() {

  const [image, setImage] = useState(null);

  const handleUpload = () => {
    console.log('Handle upload')
    axios.post('http://localhost:4000/image-upload', image)
  }

  const getFileInfo = (e) => {
    console.log('File info Working');
    // e.target.files[0];
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  }

  return (
    <div className="App">
      <h1>Image Upload Site</h1>
      <input type='file' onChange={getFileInfo}></input>
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}

export default App;
