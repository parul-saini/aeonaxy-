import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";
          
cloudinary.config({ 
  cloud_name: 'ddjdqhb4l', 
  api_key:"825925793676643",
  api_secret:"SxPGmh0aa_AKeFfUNs843yDeW9g", 
});


const uploadOnCloudinary = async (localPath)=>{
    try {
        if(!localPath) return null;
        // console.log(localPath);
        const response = await cloudinary.uploader.upload(localPath,
        {resource_type:"auto"} );
        
        fs.unlinkSync(localPath);
        return response.url;
    } catch (error) {
        console.log(error);
        if(localPath)
        fs.unlinkSync(localPath);
        console.log("Failed to Upload on cloudinary :(");
        return null;
    }

}

export {uploadOnCloudinary};





