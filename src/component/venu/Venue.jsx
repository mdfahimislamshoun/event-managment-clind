import PropTypes from "prop-types";

const Venue = ({ venue }) => {
  const { image, name, capacity, accommodation, description } = venue;
  return (
    <div className="container w-[98%] justify-center mx-auto">
      <div className="card w-82 h-[600px] bg-base-100 shadow-xl">
        <figure
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={image}
            alt="image"
            className=" w-full h-[300px]  rounded-xl "
          />
        </figure>
        <div
          className="card-body items-center text-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <h2 className="card-title">{name}</h2>
          <hr className="w-full h-[2px]  bg-slate-700" />
          <p>{description}</p>

          <p>
            <span>CAPACITY: {capacity}</span>|
            <span>Accommodation: {accommodation}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Venue.propTypes = {
  venue: PropTypes.object,
};

export default Venue;
