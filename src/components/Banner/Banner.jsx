import userImage from "../../assets/user.png";

const Banner = () => {
  return (
    <div className="bg-indigo-50 pt-20">
      <div className="max-w-screen-xl mx-auto px-5 flex sm:flex-row flex-col-reverse gap-3 pt-10 ">
        <div className="flex flex-col items-center sm:items-start gap-4 justify-center">
          <h1 className="text-5xl leading-14 font-bold">
            One Step Closer To Your <span>Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div>
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
