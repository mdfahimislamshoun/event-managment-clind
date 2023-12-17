import { useEffect, useState } from "react";
import Banner from "../header/Banner";
import Events from "../events/Events";
import Service from "../eventService/Service";
import Team from "../team/Team";


const Home = () => {
  const [events, setEvents] = useState([]);
  const [services, setServices] = useState([]);
  const [members, setMembers] = useState([]);

  // Event data fetch here
  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  // services data fetch here
  useEffect(() => {
    fetch("servicesOnEvent.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // team data fetch hear
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <div className="container w-[90%] justify-center m-0 mx-auto">
      
      <Banner></Banner>
      <div className="mt-20 mb-20">
        <div className="mb-16">
          <h2 className="text-3xl text-black text-center font-semibold"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
         >
            Hello there!
          </h2>
          <h1 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center font-semibold"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
            We’ll make your next celebration very special!
          </h1>
        </div>
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Events key={event.id} event={event}></Events>
          ))}
        </div>
      </div>
      <div className="mb-20">
        <div className="mb-16">
          <h1 className="text-3xl text-black text-center font-semibold"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
            Our Service
          </h1>
          <h1 className="text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center font-semibold"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
         >
            What We Offer
          </h1>
        </div>
        <div className="grid gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className=" mb-20">
        <div className="mb-16">
          <h2 className="text-3xl text-black text-center font-semibold"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          >
            Our best team
          </h2>
          <h1 className="text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center font-semibold"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
         >
            Our Team of Professionals
          </h1>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <Team key={member.id} member={member}></Team>
          ))}
        </div>
      </div>
      <footer className=" m-0 my-0 footer p-10 bg-base-300 text-base-content mx-auto"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      >
        <aside>
          <img className="text-xl h-28 " src="https://i.ibb.co/c1sBzYP/event.png" alt="" />
          <p>
          SOCIAL EVENT Ltd.
            <br />
            Providing event service since 2018
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
        <input type="text" placeholder="username@" className="input input-bordered w-44 pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-12 rounded-l-none">Subscribe</button>
      </div>
          </fieldset>
          <nav>
            <header className="footer-title">Social</header>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </form>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
        <aside>
          <p>Copyright © 2023 - All right reserved by SOCIAL EVENT Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Home;
