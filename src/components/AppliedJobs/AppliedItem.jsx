import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const AppliedItem = ({ job }) => {
  const {
    company_name,
    id,
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
  } = job;

  return (
    <div className="border border-gray-300 rounded-lg p-4 mt-5 flex flex-col items-center md:flex-row gap-5">
      <div className=" bg-indigo-50 w-[240px] h-[240px] flex items-center justify-center p-3 rounded-lg">
        <img className="max-h-[150px]" src={logo} alt="" />
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-0 items-center justify-between flex-1">
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
        </div>

        <Link to={`/details/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedItem;
