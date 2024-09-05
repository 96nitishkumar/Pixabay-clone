import { useEffect, useState } from "react";
import ImgContextData from "./ImgContexData";

export const ContextState = (props) => {
  const [apiData, setApiData] = useState([]);
  const [category, setCategory] = useState("nature");
  const apiKey = "45799125-7a36fca85a47674fa1ee04259";

  const buttonHandler = (category_data) => {
    console.log("event_clicked==>", category_data);
    setCategory(category_data);
  };

  const fetchData = async () => {
    try {
      const apiResponse = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${category}&image_type=photo`
      );
      const data = await apiResponse.json();
      setApiData(data.hits);
    } catch (error) {
      console.log("Something went wrong !", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [buttonHandler]);

  return (
    <ImgContextData.Provider
      value={{
        apiData,
        buttonHandler,
      }}
    >
      {props.children}
    </ImgContextData.Provider>
  );
};
