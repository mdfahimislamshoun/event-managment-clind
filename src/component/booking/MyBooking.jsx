import UseAxios from "../hooks/UseAxios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const axiosUrl = UseAxios()

    const { data: booking = [] } = useQuery({
        queryKey: ["booking", email],
        queryFn: async () => {
            const res = await axiosUrl.get(`/booking?email=${email}`);
            return res.data;
        },
    });

    return (
        <div>
            <div className="mt-10">
                {booking.map((booked) => <div key={booked._id} className="container w-[90%] justify-center mx-auto" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <img className="w-full h-[400px]" src={booked.image} alt="image" />
                    <h1 className="text-4xl text-black font-bold mb-4">{booked.title}</h1>
                    <p className="text-base text-black font-medium">{booked.description}</p>
                </div>
                )}
            </div>
        </div>
    );
};

export default MyBooking;