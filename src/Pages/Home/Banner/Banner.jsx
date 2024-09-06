// import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


// import { FaMagnifyingGlass } from "react-icons/fa6";

const Banner = ({ onSearch }) => {
  // const [query, setQuery] = useState("");

  // const handleInputChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(query);
  // };

  return (
    <div className="mb-8 mt-36">
      {/* <div className='mb-4 mt-24'>
        <form
          onSubmit={handleSubmit}
          className=' relative flex justify-end gap-2 ml-4 lg:ml-1'>
          <input
            type='text'
            className='  input  input-bordered grow max-w-[250px] lg:max-w-sm'
            placeholder='Search by tag'
            value={query}
            onChange={handleInputChange}
          />
          <button className='absolute top-4 right-4' type='submit'>
            <FaMagnifyingGlass />
          </button>
        </form>
      </div> */}

      <Carousel
        className="top-0 h-full"
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
      >
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co.com/MB7GqH6/HD-wallpaper-people-business-meeting-talking-others.jpg"
            alt="banner1"
          />
        </div>
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co.com/PW5rn2c/istockphoto-1297168907-612x612.jpg"
            alt="banner2"
          />
        </div>
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co.com/521QqtM/istockphoto-1272690621-612x612.jpg"
            alt="banner3"
          />
        </div>
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co.com/P59ZBYp/depositphotos-96557742-stock-photo-business-team-with-hands-together.jpg"
            alt="banner4"
          />
        </div>
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co.com/W5Jcgy1/A0-A14528-398-D-4-A47-9494-5038-CD72-B0-B6.jpg"
            alt="banner5"
          />
        </div>
        <div className="h-full">
          <img
            className="h-full"
            src="https://i.ibb.co.com/P656MW5/istockphoto-863497498-612x612.jpg"
            alt="banner6"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
