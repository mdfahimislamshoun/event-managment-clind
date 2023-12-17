import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Events = ({ event }) => {
  const { id, title, image } = event;

  return (
    <div className="container w-[98%] justify-center mx-auto">
      <div
        className="card w-82  h-82 bg-gray-200"
        data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      >
        <figure>
          <img className="w-full h-48 " src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-black">{title}</h2>
        </div>
        <Link to={`/details/${id}`}>
          <button className="btn btn-primary w-full">details</button>
        </Link>
      </div>
    </div>
  );
};
Events.propTypes = {
  event: PropTypes.object,
};
export default Events;
