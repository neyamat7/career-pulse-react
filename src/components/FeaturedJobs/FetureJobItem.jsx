import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const FetureJobItem = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border border-gray-300 p-6">
      <div className="max-w-[150px] h-[80px]">
        <img className="max-w-full max-h-full" src={logo} alt="" />
      </div>
      <div className="space-y-2">
        <h1 className="text-xl sm:text-2xl font-semibold">{job_title}</h1>
        <p className="text-xl text-gray-500">{company_name}</p>
        <div className="flex gap-5">
          <button className="btn">{remote_or_onsite}</button>
          <button className="btn">{job_type}</button>
        </div>
        <div className="flex flex-col gap-2  sm:flex-row sm:gap-5">
          <p className="flex gap-2 items-center">
            <FaLocationDot />
            {location}
          </p>
          <p className="flex gap-2 items-center">
            <AiFillDollarCircle /> {salary}
          </p>
        </div>
        <Link to={`/details/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default FetureJobItem;
