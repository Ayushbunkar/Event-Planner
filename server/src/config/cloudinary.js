import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.dx7ztr9i3,
  api_key: process.env.313846931262354,
  api_secret: process.env.f1TAhJDmQ9FWAu9HTnWacMy9Rn0,
});

export default cloudinary;
