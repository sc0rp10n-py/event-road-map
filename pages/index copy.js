import { useEffect, useState } from "react";

const Home = () => {
    // const [currentTime, setCurrentTime] = useState("");
    // const [currentTimeSlot, setCurrentTimeSlot] = useState("");

    const data = [
        {
            id: 1,
            dayName: "DAY 1",
            dayData: {
                "9:00 AM": "Event 1",
                "11:00 AM": "Event 2",
                "12:00 PM": "Event 3",
                "1:00 PM": "Event 4",
                "3:00 PM": "Event 5",
                "4:00 PM": "Event 6",
                "5:00 PM": "Event 7",
                "6:00 PM": "Event 8",
            },
        },
        {
            id: 2,
            dayName: "DAY 2",
            dayData: {
                "9:00 AM": "Event 1",
                "11:00 AM": "Event 2",
                "12:00 PM": "Event 3",
                "1:00 PM": "Event 4",
                "3:00 PM": "Event 5",
                "4:00 PM": "Event 6",
                "5:00 PM": "Event 7",
                "6:00 PM": "Event 8",
            },
        },
        {
            id: 3,
            dayName: "DAY 3",
            dayData: {
                "9:00 AM": "Event 1",
                "11:00 AM": "Event 2",
                "12:00 PM": "Event 3",
                "1:00 PM": "Event 4",
                "3:00 PM": "Event 5",
                "4:00 PM": "Event 6",
                "5:00 PM": "Event 7",
                "6:00 PM": "Event 8",
            },
        },
        {
            id: 4,
            dayName: "DAY 4",
            dayData: {
                "9:00 AM": "Event 1",
                "11:00 AM": "Event 2",
                "12:00 PM": "Event 3",
                "1:00 PM": "Event 4",
                "3:00 PM": "Event 5",
                "4:00 PM": "Event 6",
                "5:00 PM": "Event 7",
                "6:00 PM": "Event 8",
            },
        },
    ];

    const time = [
        "9:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
    ];

    useEffect(() => {
        // Simulate real-time behavior by updating the currentTimeSlot every minute
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();

            // Convert the current time to the format used in the time array
            const formattedTime = `${hours % 12 || 12}:${
                minutes < 10 ? "0" : ""
            }${minutes} ${hours >= 12 ? "PM" : "AM"}`;

            // Find the corresponding time slot based on the current time
            let currentSlot = "";
            for (let i = 1; i < time.length; i++) {
                if (time[i] === formattedTime) {
                    currentSlot = time[i];
                    break;
                } else if (
                    time[i - 1] < formattedTime &&
                    formattedTime < time[i]
                ) {
                    currentSlot = time[i - 1];
                    break;
                }
            }

            setCurrentTimeSlot(currentSlot);
        }, 60000); // Update every minute (60000 milliseconds)

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container mx-auto flex flex-row justify-center items-center">
                <div className="flex flex-row my-32">
                    <div className="">
                        {time.map((item, i) => (
                            <div
                                key={i}
                                className={`w-32 h-14 ${
                                    item === currentTimeSlot
                                        ? "bg-green-300"
                                        : "bg-yellow-200"
                                }`}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row">
                        {data.map((item, i) => (
                            <div key={i} className="mx-7">
                                <div
                                    className={`w-14 h-14 bg-black text-white rotate-90 text-center py-3 ${
                                        item.dayData[currentTimeSlot]
                                            ? "bg-green-500"
                                            : "bg-yellow-300"
                                    }`}
                                >
                                    {item.dayName}
                                </div>
                                <div className="">
                                    {Object.keys(item.dayData).map((key, i) => (
                                        <div
                                            key={i}
                                            className={`w-24 h-14 text-right ${
                                                key === currentTimeSlot
                                                    ? "bg-green-100"
                                                    : "bg-yellow-50"
                                            }`}
                                        >
                                            {item.dayData[key]}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
