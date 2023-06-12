const BlogCard = () => {
  return (
    <div className="max-w-[400px] mt-10 bg-green-200">
      <div className="w-full flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <img
            src="/images/png/about-focus-three.png"
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="flex flex-col items-start mt-8 p-5">
          <span className="font-bold text-[24px] font-inter text-ipink">
            Is Apple a design company?
          </span>
          <span className="mt-5 font-jose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
            luctus augue. Nam eu neque accumsan, vehicula nisl sed, tempor nibh.
            Morbi lacinia nisl in tortor aliquam dignissim. Phasellus maximus,
            enim vitae volutpat dignissim, dui urna vulputate tellus, in
            fringilla orci mi quis sapien. In egestas quis dui non dignissim....
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
