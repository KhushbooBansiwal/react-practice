import { useState } from "react";

const data = [
  "https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg",
  "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?cs=srgb&dl=pexels-pixabay-36753.jpg&fm=jpg",
  "https://static.pexels.com/photos/133464/pexels-photo-133464.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmSGGN_-ofcMrbHKUasv7IBBVWyh7uhnE1CWvLK8z6e-WyYF1MSn11EX68u_z9I65ZMM&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkG89iqBm3f0Vvg8nep3DzHKMp2Ya2kMc7nryIwndibLZM86wI2MgmfgTdn1BFXeB064&usqp=CAU",
];

const ImageCarousal = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  const handlePreviousClick = () => {
    if(activeImageIndex === 0) setActiveImageIndex(data.length -1);
    else setActiveImageIndex(activeImageIndex -1)
    }

    const handleNextClick =() => {
        setActiveImageIndex((activeImageIndex +1)% data.length);
    }

  return (
    <div className="flex justify-center">
      <button className="font-bold p-4 m-10" onClick={handlePreviousClick}>Previous</button>
      <img
        src={data[activeImageIndex]}
        className="w-[700px]"
        alt="flowers images"
      ></img>
      <button className="font-bold p-4 m-10" onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageCarousal;
