import React, { useState, useEffect } from "react";
import useContentful from "../../hooks/useContentful";
import BlogCard from "../../components/BlogCard";
import ServicesHero from "../servicesPage/ServicesHero";
import InsightsHero from "./InsightsHero";

const InsightsPage = () => {
  const { getData } = useContentful();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      console.log("custom hook response", response);
      setPostData(response); // Assuming `response` is the data you want to store in `postData`
      console.log(postData);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      <InsightsHero />
      <div className="p-10 w-full flex flex-wrap justify-evenly">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default InsightsPage;
