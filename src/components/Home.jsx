import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

const Home = () => {

     const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = (file) => {
        console.log(file, " file");
        setUploadImage(URL.createObjectURL(file))
        console.log(uploadImage," uploadImage");
        setloading(true);

    }
  return (
    <div>
    <ImageUpload UploadImageHandler={UploadImageHandler} />
    <ImagePreview  loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage}/>
    </div>
  )
}

export default Home
