const BlogCard = () => {
  return (
    <div className="max-w-[400px] mt-10 rounded-xl bg-gray-200 overflow-hidden shadow-xl shadow-gray-400">
      <div className="w-full flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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
