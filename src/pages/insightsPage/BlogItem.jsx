import { createClient } from "contentful";
import React, { useEffect } from "react";

const BlogItem = () => {
  const client = createClient({
    space: "mu27r0iaspzr",
    accessToken: "6OgcNhBJzBd-3UmkCzeffK247dZw5ZLP1w_Lf9rUIao",
    host: "cdn.contentful.com",
  });
  useEffect(() => {
    client.getEntry("<entry_id>").then(function (entry) {
      console.log(entry.sys);
      console.log(entry.fields.productName);
    });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="absolute w-full h-screen" style={{ zIndex: "-1" }} />
      <div className="w-full max-w-[1366px] items-center flex flex-col">
        <span className="text-white font-inter text-[22px] md:text-[40px] md:w-1/2 w-4/5 font-extrabold pt-[12vh]  bg-ipink">
          Saathealth: Demand Generation and Engagement
        </span>
        <div className="h-[2px] bg-white hidden md:flex w-full mt-[12vh] mb-[5vh]" />
        <span className="text-black font-jose flex-wrap px-[10vw] md:px-[20vw] text-[13px] md:text-[18px] mt-10 h-auto">
          {"sd"}
        </span>
      </div>
    </div>
  );
};

export default BlogItem;
