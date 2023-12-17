import { Link, useLoaderData, useParams } from "react-router-dom";

const LearnMore = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const service = services.find((services) => services.id === intId);

  return (
    <div className="mt-10">
      <div
        className="container w-[90%] justify-center mx-auto"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img className="w-full h-[400px]" src={service.image} alt="image" />
        <h1 className="text-4xl text-black font-bold mb-4">{service.title}</h1>
        <p className="text-base text-black font-medium">
          {service.description}
        </p>
        <Link to="/">
          <button className="btn  btn-primary w-56 mt-4 mb-4">back home</button>
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;
