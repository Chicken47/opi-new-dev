import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

const LatestNews = () => {
  gsap.registerPlugin(ScrollTrigger);

  const articles = [
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "Deeksha Bhardwaj",
      title:
        "Centre dismisses Jack Dorsey’s claims of Twitter shutdown over farmer protests - Hindustan Times",
      description:
        "Union minister Rajeev Chandrashekhar said that Twitter was in repeated violations of Indian law and started complying with Indian laws only from June 2022 | Latest News India",
      url: "https://www.hindustantimes.com/india-news/union-minister-disputes-twitter-co-founder-s-claims-of-government-pressure-and-threats-during-farmers-protest-101686634075229.html",
      urlToImage:
        "https://www.hindustantimes.com/ht-img/img/2023/06/13/1600x900/Twitter-co-founder-Jack-Dorsey-alleged-that-the-co_1686650328671.jpg",
      publishedAt: "2023-06-13T09:58:57Z",
      content:
        "Terming it as an outright lie, union minister of state for entrepreneurship, skill development, electronics and technology Rajeev Chandrasekhar on Tuesday hit out at the allegations levelled by Twitt… [+2669 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "The Indian Express",
      title:
        "Hubble captures a jellyfish galaxy 700 million light-years away - The Indian Express",
      description: null,
      url: "https://indianexpress.com/article/technology/science/hubble-jellyfish-galaxy-8660594/",
      urlToImage: null,
      publishedAt: "2023-06-13T09:31:17Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Livemint",
      },
      author: "Livemint",
      title:
        "Subhash Chandra, Punit Goenka move SAT against SEBI’s order on the principle of natural justice: Report | Mint - Mint",
      description:
        "The Securities & Exchange Board of India's (SEBI) in its recent order had banned Chandra and Goenka from being directors or holding a Key Managerial Personnel in any listed company or its subsidiaries until further orders.",
      url: "https://www.livemint.com/market/stock-market-news/subhash-chandra-punit-goenka-move-sat-against-sebi-s-order-on-the-principle-of-natural-justice-report-11686642499469.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/06/13/600x338/2-0-1292560_1686642882557_1686642882790.jpg",
      publishedAt: "2023-06-13T09:23:56Z",
      content:
        "Essel Group Chairman Subhash Chandra and Zee Entertainment Enterprises' (ZEEL) MD &amp; CEO Punit Goenka have moved Securities Appellate Tribunal (SAT) against the Securities &amp; Exchange Board of … [+2250 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        '"Go And Hammer West Indies 2-0, 3-0": Sunil Gavaskar Launches Scathing Attack At Indian Team - NDTV Sports',
      description:
        "India's forgettable outing at the World Test Championship final against Australia has left the legendary batter Sunil Gavaskar fuming with anger.",
      url: "https://sports.ndtv.com/cricket/go-and-hammer-west-indies-2-0-3-0-sunil-gavaskar-launches-scathing-attack-at-indian-team-4113980",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/h57hocfg_sunil-gavaskar_650x300_12_June_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-06-13T09:16:00Z",
      content:
        "India's forgettable outing at the World Test Championship final against Australia has left the legendary batter Sunil Gavaskar fuming with anger. The former India skipper spoke very critically about … [+2315 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Jigyasa Sahay",
      title: "Top 10 Indian States With High Diabetes Rate - India.com",
      description:
        "According to the recent ICMR backed research published in Lancet, India has  over 100 million people suffering from diabetes. Here are top worst affected states.",
      url: "https://www.india.com/webstories/health/top-10-indian-states-with-high-diabetes-rate-goa-puducherry-kerala-6107601/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2023/06/diabettes-state3.jpeg",
      publishedAt: "2023-06-13T08:36:46Z",
      content:
        "According to a recent study backed by ICMR and published in Lancet, over 100 million Indians are diabetic\r\n1. Goa has highest percentage of diabetic people -26.4 %\r\n2. Puducherry with - 26.3\r\n4. Chan… [+273 chars]",
    },
  ];

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
        // setArticles(data.articles);
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
              <img src={articles[0]?.urlToImage} alt="" />
            </div>
            <span className="text-black px-5 py-2 font-bold font-inter text-[18px]">
              {articles[0]?.title?.substring(0, 30)}...
            </span>
            <span className="text-white overflow-hidden px-5 text-[14px] font-jose py-1 flex-wrap">
              {articles[0]?.description?.substring(0, 200)}...
            </span>
          </div>
          <div
            onClick={() => (window.open = articles[1]?.url)}
            id="down-to-up-fade-3"
            className="m-4 bg-pblue cursor-pointer overflow-hidden rounded-xl h-1/3 flex hover:scale-110 transition-all duration-500 shadow-[0_20px_50px_rgba(23,_104,_118,_0.8)] hover:shadow-[0_20px_50px_rgba(23,_104,_118,_1)]"
          >
            <div className="bg-green-200 w-3/5">
              <img
                src={
                  "https://images.indianexpress.com/2023/06/Hubble-telescope-20230613.jpg?w=414"
                }
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="bg-white-200 w-2/5 p-5 flex flex-col">
              <span className="text-ipink font-extrabold text-[12px] font-inter">
                {articles[1]?.title?.substring(0, 50)}...
              </span>
              <span className="text-white overflow-hidden text-[14px] font-jose py-1 flex-wrap">
                {`NASA shared an image of a "jellyfish galaxy" moving thorugh a galactic cluster as the intra-cluster medium stripped its gas away, forming tendrils.`}
              </span>
            </div>
          </div>
        </div>
        <div className="h-screen w-1/3 -mt-16">
          <div className="-m-10 bg-white h-1/3 flex flex-col overflow-hidden rounded-full p-10">
            <span className="text-ipink font-bold text-[40px] font-inter w-full text-center">
              Our Research and Knowledge Products
            </span>
            <span className="text-black font-bold text-[16px] font-mont w-full text-center">
              Our knowledge creation drives partnerships and catalyzes
              innovative solutions.
            </span>
          </div>
          <div
            onClick={() => window.open(articles[2]?.url)}
            id="up-to-down-fade"
            className="m-8 bg-black mt-10 cursor-pointer h-1/2 hover:scale-110 transition-all duration-500 flex flex-col-reverse rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.8)] hover:shadow-[0_20px_50px_rgba(0,_0,_0,_1)]"
          >
            <div className="overflow-hidden h-3/5">
              <img src={articles[2]?.urlToImage} alt="" />
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
              <img src={articles[3]?.urlToImage} alt="" />
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
                alt=""
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
