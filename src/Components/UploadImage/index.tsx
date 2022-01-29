import axios from "axios";
import { FC, ReactNode, useState } from "react";
import SppinerLoading from "../Elements/SppinerLoading";
import { FileInput } from "./style";

interface IPorps {
  bgColor?: string;
  width?: string;
  height?: string;
  setImage: Function;
  children?: ReactNode;
  bg?: string;
  setError?: Function;
}

const UploadImage: FC<IPorps> = ({
  setImage,
  bgColor,
  width,
  height,
  children,
  bg,
  setError,
}) => {
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
    } catch (error: any) {
      console.error(error);
      setUploading(false);
      setError && setError(error.message);
    }
  };

  return (
    <FileInput bgColor={bgColor} width={width} height={height} bg={bg}>
      {uploading ? (
        <>
          <SppinerLoading height="100%" width="100%" bgColor="#99999933" />
        </>
      ) : (
        <>
          {children}
          <input type={"file"} onChange={uploadFileHandler} />
        </>
      )}
    </FileInput>
  );
};

export default UploadImage;
