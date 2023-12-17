import { useQuery } from "@tanstack/react-query";
import UseAxios from "../hooks/UseAxios";

const AllBooking = () => {
    const axiosUrl = UseAxios()

    const { data: booking = [] } = useQuery({
        queryKey: ["booking",],
        queryFn: async () => {
            const res = await axiosUrl.get("/booking");
            return res.data;
        },
    });
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {booking.map((booked) => <div key={booked._id} className="card w-76 bg-base-100 shadow-xl">
                <figure><img src={booked.image} alt="image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">{booked.title}</div>
                    </h2>
                    <h3>{booked.email}</h3>
                    <p>{booked.description}</p>
                </div>
            </div>)}
        </div>
    );
};

export default AllBooking;