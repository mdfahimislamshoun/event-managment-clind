import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAxios from "../hooks/UseAxios";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Details = () => {
  const{user}=useContext(AuthContext);
  const uemail=user?.email;
  const navigate = useNavigate();
  const events = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const event = events.find((events) => events.id === idInt);
  const axiosUrl= UseAxios()

  const handleBooking = () => {
    const image=event.image;
    const title=event.title;
    const description=event.description;
    const price=event.price;
    const email=uemail
    const eventData={image,title,description,price,email}
    axiosUrl.post("/booking",eventData)
    navigate("/pay")
    toast.success("you booked this event successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  
  return (
    <div  className="mt-10">
      <div  className="container w-[90%] justify-center mx-auto" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <img className="w-full h-[400px]" src={event.image} alt="image" />
        <h1 className="text-4xl text-black font-bold mb-4">{event.title}</h1>
        <p className="text-base text-black font-medium">{event.description}</p>
        <p className="text-base text-black font-semibold mt-2">
          Event booking price: {event.price}
        </p>
        <button onClick={handleBooking} className="btn  btn-primary w-56 mt-4 mb-4">
          book now
        </button>
        <Link to="/"> 
        <button className="btn  btn-accent w-56 ms-4 mt-4 mb-4">
          back home
        </button></Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
