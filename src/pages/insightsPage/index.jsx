import React, { useState, useEffect } from "react";
import useContentful from "../../hooks/useContentful";
import BlogCard from "../../components/BlogCard";
import InsightsHero from "./InsightsHero";
import Footer from "../../components/Footer";
import LatestNews from "./LatestNews";

const InsightsPage = () => {
  const { getData } = useContentful();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      console.log("custom hook response", response.items);
      setPostData(response.items);
      console.log(postData);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-evenly">
      <InsightsHero />
      <LatestNews />
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
      <Footer />
    </div>
  );
};

export default InsightsPage;
