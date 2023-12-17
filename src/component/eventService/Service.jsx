import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Service = ({ service }) => {
  const { id,image, name, button } = service;
  return (
    <div className="container w-[98%] justify-center mx-auto">
      <div className="card w-82  h-96 bg-gray-200"
     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
      >
        <figure>
          <img className="w-full h-48 " src={image} alt="" />
        </figure>
        <div className="card-body">
          <h1 className="text-3xl text-black ">{name}</h1>
        </div>
        <Link to={`/learnMore/${id}`}>
          <button className="btn btn-primary w-full">{button}</button>
        </Link>
      </div>
    </div>
  );
};
Service.propTypes={
  service:PropTypes.object
}
export default Service;
