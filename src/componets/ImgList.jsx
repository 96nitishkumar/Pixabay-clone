import { useContext } from "react";
import ImgContextData from "../store/ImgContexData";

export const ImgList = () => {
  const { apiData } = useContext(ImgContextData);
  console.log(apiData);
  return (
    <div className="main-container">
      {apiData.map((item) => (
          <div key={item.id} className="container-item">
            <img src={`${item.largeImageURL}`}></img>
          </div>
      ))}
    </div>
  );
};
