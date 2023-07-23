import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Lakkes-project', //folder in cloudinary in which files will be
        allowed_formats: ['jpeg', 'png', 'jpg'] //which formats will work
        //maximum size of upload in free tier is 10MB
    }
});

export default cloudinary;