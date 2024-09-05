import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import ImgContextData from "../store/ImgContexData";

export const Navbar = () => {
  const { buttonHandler } = useContext(ImgContextData);
  return (
    <div className="container">
      <div className="input-container"> 
      <input type="text"
        placeholder="Search Picture"
        onChange={(event)=>{buttonHandler(event.target.value)}}
      /> <span className="search-icon"><IoIosSearch /></span>
      </div>
    <div className="btn-container">
      <button type="button" onClick= {()=>buttonHandler("nature")} className="btn">
      Nature
      </button>
      <button type="button"  onClick= {()=>buttonHandler("computer")} className="btn">
      Computer
      </button>
      <button type="button" onClick= {()=>buttonHandler("food")} className="btn">
      Food
      </button>
      <button type="button" onClick= {()=>buttonHandler("sports")} className="btn">
      Sports
      </button>
      <button type="button" onClick= {()=>buttonHandler("travel")} className="btn">
      Travel
      </button>
      <button type="button" onClick= {()=>buttonHandler("buildings")} className="btn">
      Buildings
      </button>
      <button type="button" onClick= {()=>buttonHandler("transportation")} className="btn">
      Transportation
      </button>
      <button type="button" onClick= {()=>buttonHandler("fashion")} className="btn">
      Fashion
      </button>
    </div>
    </div>
  );
};
