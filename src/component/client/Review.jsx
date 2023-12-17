import PropTypes from "prop-types";

const Review = ({ review }) => {
  const {  name, image, description } = review;

  return (
    <div  className="container w-[98%] justify-center mx-auto">
      <div className="card w-82  h-96 bg-gray-200" data-aos="zoom-in-up">
      <div className="p-8">
      <p className="text-base text-black text-center font-normal p-4">{description}</p>
          <h2 className="text-2xl text-black font-semibold text-center ">{name}</h2>
          <figure>
          <img className="w-24 h-24 mt-2 rounded-full"
            src={image}
            alt="image"
          />
        </figure>
      </div>
      </div>
    </div>
  );
};
Review.propTypes = {
  review: PropTypes.object,
};
export default Review;
