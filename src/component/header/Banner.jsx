

const Banner = () => {
    return (
        <div className="container w-[95%] justify-center mx-auto">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/grMKZYB/bride-groom-pose-large-circle-lilac-garden.jpg"
            className="w-full  h-screen "
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#0b0b0bb5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center ">
              <img
                className=" justify-center ml-24 mb-4"
                src="https://i.ibb.co/1KZ1tZn/pic10-free-img.png"
                alt=""
              />
              <h2 className="text-2xl text-[#f7eaea] mb-2">
                Country Best Luxury
              </h2>
              <h1 className="text-2xl md:text-5xl text-white font-bold mb-2">
                WEDDING
              </h1>
              <h2 className="text-3xl text-white">
                Planners & Event Organizers!
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* carousel 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/V2tsM9M/happy-friends-with-birthday-cake.jpg"
            className="w-full h-screen"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#0b0b0bb5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center ">
              <img
                className=" justify-center ml-20 md:ml-32 mb-4"
                src="https://i.ibb.co/1KZ1tZn/pic10-free-img.png"
                alt=""
              />
              <h2 className="text-2xl  text-[#f7eaea] mb-2">
                Country Best Luxury
              </h2>
              <h1 className="text-xl md:text-5xl text-white font-bold mb-2">
                BIRTHDAY PARTIES
              </h1>
              <h2 className="text-3xl text-white">
                Planners & Event Organizers!
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* carousel 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/85HtyvP/groom-putting-ring-bride-s-finger.jpg"
            className="w-full h-screen"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#0b0b0bb5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center ">
              <img
                className=" justify-center ml-20 md:ml-40 lg:ml-40 mb-4"
                src="https://i.ibb.co/1KZ1tZn/pic10-free-img.png"
                alt=""
              />
              <h2 className="text-2xl  text-[#f7eaea] mb-2">
                Country Best Luxury
              </h2>
              <h1 className="text-xl md:text-5xl text-white font-bold mb-2">
                ENGAGEMENT PARTIES
              </h1>
              <h2 className="text-3xl text-white">
                Planners & Event Organizers!
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* carousel 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Ypqzyyq/senior-people-celebrating-together.jpg"
            className="w-full h-screen"
          />
          <div className="absolute flex justify-center transform -translate-y-1/2 w-full h-full bg-[#0b0b0bb5]   bg-blend-overlay left-[0.2px] right-5 top-1/2"></div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-center ">
              <img
                className=" justify-center ml-20 md:ml-40 lg:ml-40 mb-4"
                src="https://i.ibb.co/1KZ1tZn/pic10-free-img.png"
                alt=""
              />
              <h2 className="text-2xl text-[#f7eaea] mb-2">
                Country Best Luxury
              </h2>
              <h1 className="text-xl md:text-5xl text-white font-bold mb-2">
              RETIREMENT PARTIES
              </h1>
              <h2 className="text-3xl text-white">
                Planners & Event Organizers!
              </h2>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;