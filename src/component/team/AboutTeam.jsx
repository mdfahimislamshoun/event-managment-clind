import { useLoaderData, useParams } from "react-router-dom";

const AboutTeam = () => {
  const teams = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const team = teams.find((teams) => teams.id === idInt);
  console.log(teams, idInt, team);
  return (
    <div className=" container w-[95%] justify-center mt-20 flex mx-auto">
      <div data-aos="fade-up"
     data-aos-duration="3000">
        <img className="w-80" src={team.image} alt="" />
      </div>
      <div className="flex-1 " 
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <h1 className="text-3xl text-black font-semibold ps-5">{team.name}</h1>
        <h1 className="text-2xl text-black  font-normal ps-5">{team.post}</h1>
        <p className="text-xl text-black font-light ps-5">{team.description}</p>
      </div>
    </div>
  );
};

export default AboutTeam;
