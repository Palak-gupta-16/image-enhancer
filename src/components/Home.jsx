import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhancedImageAPI } from '../utils/enhanceImageApi';

const Home = () => {

     const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);
     const [taskType, setTaskType] = useState("scale");

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file))
        setloading(true);
         try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            console.log("Enhanced Image URL:", enhancedImage);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
        }

    }
  return (
    <div>
                    <div className="mb-4">
                <label className="font-semibold mr-2">Select Enhancement Type:</label>
                <select
                    className="border border-gray-300 rounded-md p-2"
                    value={taskType}
                    onChange={(e) => setTaskType(e.target.value)}
                >
                    <option value="scale">Upscale</option>
                    <option value="segmentation">Segmentation</option>
                    <option value="inpaint">Inpaint</option>
                    <option value="external/watermark-remove">Watermark Remove</option>
                    <option value="background">Background Removal</option>
                </select>
            </div>

    <ImageUpload UploadImageHandler={UploadImageHandler} />
    <ImagePreview  loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}/>
    </div>
  )
}

export default Home
