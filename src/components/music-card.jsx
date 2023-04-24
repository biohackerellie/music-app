import { older } from "../assets";
import { IoPlayCircle, IoPlanet } from "react-icons/io5";

const MusicCard = (props) => {
  return(

    <div className=" max-w-[250px]  height-auto bg-purple-900 px-5 pt-5 pb-2  rounded-md shadow-lg">
      <img src = {older} alt="older" className=" bg-transparent"/>
      
      <div className="flex justify-evenly items-center bg-transparent drop-shadow">
        <h2 className=" p-0 text-gray-400"> 
        {props.releaseDate} 
        <br />
        {props.type}
        </h2>
        <strong className=" justify-center text-primary">{props.title}</strong>
        <IoPlayCircle className="bg-transparent scale-150   " />
        </div>
        
      
    </div>

  )
}
export default MusicCard;
