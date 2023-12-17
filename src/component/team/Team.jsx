import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Team = ({ member }) => {
  const { id, image, name, post } = member;

  return (
    <div>
     <Link to={`/aboutTeam/${id}`}>
     <div className="card w-60 bg-gray-100 shadow-xl"
     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
    >
          <figure>
            <img className="w-full h-48 " src={image} alt="img" />
          </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>{post}</h3>
        </div>
      </div>
     </Link>
    </div>
  );
};

Team.propTypes={
  member:PropTypes.object
}

export default Team;
