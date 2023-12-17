
import { useEffect, useState } from "react";
import Review from "./Review";

const Client = () => {
  const [reviews, setReviews] = useState([]);
  const[show ,setShow]=useState(false)
  useEffect(() => {
    fetch("clients.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container w-[98%] justify-center mt-20 mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl text-black font-semibold text-center mb-3"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500">Testimonials</h1>
       <h2 className="text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center font-semibold"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">Satisfied Clients About Us</h2>
       </div>
       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
           show?reviews.map((review)=><Review key={review.id} review={review}></Review>):
           reviews.slice(0,6).map((review)=><Review key={review.id} review={review}></Review>)
        }
       </div>
       <div className="w-28 justify-center mt-5 mx-auto" >
       <div className={!show?"":'hidden'} >
       {
         <button onClick={()=>setShow(!show)}   className="btn bg-[#009444] hover:bg-[#2dc9f5] text-white">show all</button> 
        }
       </div>
        </div>
    </div>
  );
};

export default Client;
