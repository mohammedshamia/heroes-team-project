import axios from "axios";
import { FC, useState } from "react";
import SppinerLoading from "../Elements/SppinerLoading";
import { FileInput } from "./style";

interface IPorps {
  bgColor?: string;
  width?: string;
  height?: string;
  setImage: Function;
}

//  const [image, setImage] = useState<string>("");

const UploadImage: FC<IPorps> = ({ setImage, bgColor, width, height }) => {
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://prohop-express.herokuapp.com/api/upload",
        formData,
        config
      );
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <FileInput bgColor={bgColor} width={width} height={height}>
      {uploading ? (
        <SppinerLoading height="100%" width="100%" bgColor="#99999933" />
      ) : (
        <input type={"file"} onChange={uploadFileHandler} />
      )}
    </FileInput>
  );
};

export default UploadImage;
