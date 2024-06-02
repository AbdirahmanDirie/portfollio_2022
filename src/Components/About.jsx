const About = () => {
  return (
    <div className=" bg-[#f1f1f1] mb-20 mt-20">
      <div className="grid lg:grid-cols-2 justify-between items-center px-5">
        {/* image */}
        <div className="flex justify-center items-center sm:mt-12 mt-10">
          <img src={require("../img/dirie.png")} className="w-96 h-auto" alt='test' />
        </div>

        {/* text */}
        <div className="items-center flex xl:items-start 2xl:items-start lg:items-start flex-col mt-10 mx-7 py-3">
          <h1 className="text-[#F20774] text-2xl font-bold uppercase tracking-widest">
            About me
          </h1>
          <p className="text-sm capitalize mt-4 mb-1 md:text-md lg:text-2xl 2xl:text-2xl tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            incidunt molestias hic doloremque facilis illum, laudantium
            distinctio quibusdam neque placeat animi, maxime libero sequi magnam
            quidem at architecto ipsum? Sunt..
          </p>
          <button className="bg-[#F20774] text-white text-lg tracking-wider px-6 py-2 rounded-full uppercase font-semibold mt-5 hover:bg-white hover:text-[#F20774] hover:shadow-md transition hover:duration-150 ease-in-out">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
