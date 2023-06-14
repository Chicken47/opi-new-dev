import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     console.log("hah");
  //     ApiCall();
  //     console.log(articles[1], "sdadsa");
  //   }, []);
  useEffect(() => {
    ApiCall();
  }, []);
  const ApiCall = () => {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=in&" +
      "pageSize=6&" +
      "apiKey=75d5f965c53a4b9bb4f14c0fe34ddc90";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        console.log("nanimoo", articles, data.articles);
      });
  };
  useEffect(() => {});
  return (
    <div className="w-full hidden md:flex justify-center py-28">
      <div className="w-full h-screen max-w-[1366px] flex">
        <div className="h-screen w-1/3 mt-10">
          <div
            onClick={() => (window.open = articles[0]?.url)}
            id="down-to-up-fade-1"
            className="m-12 bg-ipink h-1/2 cursor-pointer hover:scale-110 transition-all duration-500 flex flex-col rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(249,_108,_150,_0.8)] hover:shadow-[0_20px_50px_rgba(249,_108,_150,_1)]"
          >
            <div className="overflow-hidden h-3/5">
              <img src={articles[0]?.urlToImage} />
            </div>
            <span className="text-black px-5 py-2 font-bold font-inter text-[18px]">
              {articles[0]?.title?.substring(0, 30)}...
            </span>
            <span className="text-white overflow-hidden px-5 text-[14px] font-jose py-1 flex-wrap">
              {articles[0]?.description?.substring(0, 200)}...
            </span>
          </div>
          <div
            onClick={() => (window.open = articles[5]?.url)}
            id="down-to-up-fade-3"
            className="m-4 bg-pblue cursor-pointer overflow-hidden rounded-xl h-1/3 flex hover:scale-110 transition-all duration-500 shadow-[0_20px_50px_rgba(23,_104,_118,_0.8)] hover:shadow-[0_20px_50px_rgba(23,_104,_118,_1)]"
          >
            <div className="bg-green-200 w-3/5">
              <img
                src={articles[5]?.urlToImage}
                className="h-full object-cover"
              />
            </div>
            <div className="bg-white-200 w-2/5 p-5 flex flex-col">
              <span className="text-ipink font-extrabold text-[12px] font-inter">
                {articles[5]?.title?.substring(0, 50)}...
              </span>
              <span className="text-white overflow-hidden text-[14px] font-jose py-1 flex-wrap">
                {articles[5]?.description?.substring(0, 150)}...
              </span>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/3 -mt-16">
          <div className="-m-10 bg-white h-1/3 flex flex-col overflow-hidden rounded-full p-10">
            <span className="text-ipink font-bold text-[40px] font-inter w-full text-center">
              News Insights
            </span>
            <span className="text-black font-bold text-[16px] font-mont w-full text-center">
              Stay Informed with Our Comprehensive News Insights: Your Source
              for Daily Updates on the Biggest Stories.
            </span>
          </div>
          <div
            onClick={() => window.open(articles[2]?.url)}
            id="up-to-down-fade"
            className="m-8 bg-black mt-10 cursor-pointer h-1/2 hover:scale-110 transition-all duration-500 flex flex-col-reverse rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.8)] hover:shadow-[0_20px_50px_rgba(0,_0,_0,_1)]"
          >
            <div className="overflow-hidden h-3/5">
              <img src={articles[2]?.urlToImage} />
            </div>
            <span className="text-white overflow-hidden px-5 mb-5 text-[14px] font-jose py-1 flex-wrap">
              {articles[2]?.title?.substring(0, 50)}...
            </span>
            <span className="text-ipink px-5 p-2 font-bold font-inter text-[24px]">
              {articles[2]?.description?.substring(0, 50)}...
            </span>
          </div>
        </div>
        <div className="h-screen w-1/3 mt-16">
          <div
            onClick={() => (window.open = articles[3]?.url)}
            id="down-to-up-fade-2"
            className="m-10 bg-white h-1/2 flex flex-col hover:scale-110 transition-all duration-500 cursor-pointer rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(179,_179,_179,_0.8)]"
          >
            <div className="overflow-hidden h-3/5">
              <img src={articles[3]?.urlToImage} />
            </div>
            <span className="text-black px-5 py-2 font-bold font-inter text-[18px]">
              {articles[3]?.title?.substring(0, 50)}...
            </span>
            <span className="text-black overflow-hidden px-5 text-[14px] font-jose py-1 flex-wrap">
              {articles[3]?.description?.substring(0, 100)}...
            </span>
          </div>
          <div
            onClick={() => (window.open = articles[4]?.url)}
            id="down-to-up-fade-4"
            className="mt-5 bg-oblue overflow-hidden hover:scale-110 transition-all duration-500 flex-row-reverse rounded-xl h-1/3 flex shadow-[0_20px_50px_rgba(69,_166,_176,_0.8)] hover:shadow-[0_20px_50px_rgba(69,_166,_176,_1)] cursor-pointer"
          >
            <div className="bg-green-200 w-3/5">
              <img
                src={articles[4]?.urlToImage}
                className="h-full object-cover w-full"
              />
            </div>
            <div className="bg-white-200 w-2/5 p-5 flex flex-col">
              <span className="text-white font-extrabold text-[12px] font-inter">
                {articles[4]?.title?.substring(0, 50)}...
              </span>
              <span className="text-black overflow-hidden text-[14px] font-jose py-1 flex-wrap">
                {articles[4]?.description?.substring(0, 130)}...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
