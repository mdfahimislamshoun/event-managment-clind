import { useEffect, useState } from "react";
import Venue from "./Venue";

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("venue.json")
      .then((res) => res.json())
      .then((data) => setVenues(data));
  }, []);
  return (
    <div className="container w-[98%] justify-center mx-auto">
      <div className="mt-16">
        <h2 className="text-xl text-black text-center font-normal"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">
          Our Exclusive Wedding
        </h2>
        <h1 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center font-bold"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
          VENUES
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20">
        {show
          ? venues.map((venue) => <Venue key={venue.id} venue={venue}></Venue>)
          : venues
              .slice(0, 4)
              .map((venue) => <Venue key={venue.id} venue={venue}></Venue>)}
      </div>
      <div className="w-28 justify-center mt-5 mx-auto">
        <div className={!show ? "" : "hidden"}>
          {
            <button
              onClick={() => setShow(!show)}
              className="btn bg-[#009444] hover:bg-[#2dc9f5] text-white"
            >
              show all
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default Venues;
