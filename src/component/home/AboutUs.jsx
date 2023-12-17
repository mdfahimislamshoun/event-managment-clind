import React from 'react';

const AboutUs = () => {
    return (
        <div className='container w-[98%] justify-center mt-10 mx-auto'>
            <div className='mb-8'
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <img className='w-full h-[75vh]' src="https://i.ibb.co/V2tsM9M/happy-friends-with-birthday-cake.jpg" alt="" />
            </div>
            <h1 className='text-xl text-black font-normal'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" >We are an innovative and passionate event management company dedicated to transforming your ideas into remarkable experiences. With years of expertise, we specialize in crafting memorable events tailored to your unique vision. Our team excels in meticulous planning, creative design, and flawless execution. From corporate conferences to weddings and everything in between, we pride ourselves on exceeding expectations. Let us take the stress out of event planning, ensuring your special moments are unforgettable. Choose us as your event partner and let's create extraordinary memories together.</h1>
        </div>
    );
};

export default AboutUs;