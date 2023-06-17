const BlogCard = () => {
  return (
    <div className="max-w-[400px] mt-10 rounded-xl bg-gray-200 overflow-hidden shadow-xl shadow-gray-400">
      <div className="w-full flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <img
            src="/images/png/about-focus-three.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start p-5 md:p-10">
          <span className="font-bold md:text-[24px] font-inter text-ipink">
            Is Apple a design company?
          </span>
          <span className="mt-2 md:mt-5 text-[12px] md:text-[16px] font-jose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            luctus augue. Nam eu neque accumsan, vehicula nisl sed, tempor nibh.
            ...
          </span>
          <span className="bg-pblue py-2 px-6 mt-5 rounded text-white font-inter text-[14px] font-bold cursor-pointer hover:scale-110 transition-all">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
