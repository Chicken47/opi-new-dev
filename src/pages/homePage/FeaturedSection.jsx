import React from "react";
export const FeaturedSection = () => {
  const data = [
    {
      title: "Lorem Ipsem Blah BLah",
      image: "project-1",
    },
    {
      title: "Lorem Ipsem Blah BLah",
      image: "project-2",
    },
    {
      title: "Lorem Ipsem Blah BLah",
      image: "project-3",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full py-40 bg-gray-200">
      <span className={`px-20 text-[28px] font-extrabold`}>Latest News</span>
      <div className="flex items-center w-full mt-12 justify-evenly">
        {data?.map((item, key) => {
          return (
            <div key={key} className="flex items-center w-full justify-evenly">
              <div className="flex flex-col items-start">
                <img src={`/images/png/${item.image}.jpg`} alt={item.image} className="w-[300px] h-[200px] hover:scale-110 transition-all hover:shadow-2xl cursor-pointer rounded"/>
                <span className={`font-bold mt-4`}>{item.title}</span>
                <button className={`text-[13px]`}>Click to see more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};