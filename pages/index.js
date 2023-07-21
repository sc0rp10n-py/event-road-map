import { useEffect, useState } from "react";

const Home = () => {
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
        "",
        "9:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
    ];

    return (
        <>
            <div className="container mx-auto flex flex-row justify-center items-center">
                <div className="flex flex-row my-32">
                    <div className="my-9">
                        {time.map((item, i) => (
                            <div key={i} className="w-24 h-14 text-right">
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row">
                        {data.map((item, i) => (
                            <div key={i} className="mx-7 relative">
                                <div className="w-24 h-14 bg-black text-white rounded-xl shadow-xl rotate-90 text-center py-4">
                                    {item.dayName}
                                </div>
                                <div className="mt-4">
                                    {Object.keys(item.dayData).map((key, i) => (
                                        <div
                                            key={i}
                                            className="relative flex items-center justify-end ml-11 w-20 h-14 pl-4 text-right border-l-4 border-black"
                                        >
                                            {item.dayData[key]}
                                            <div
                                                className={`absolute top-1/2 left-0 z-10 -ml-[10px] transform -translate-y-1/2 w-4 h-4 rounded-full 
                                            ${
                                                i === 0
                                                    ? "bg-green-500"
                                                    : "bg-black"
                                            }`}
                                            ></div>
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
