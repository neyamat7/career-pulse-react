import { useLoaderData } from "react-router";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import AppliedItem from "./AppliedItem";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [filteredJobs, setFilteredJobs] = useState(appliedJobs);
  const [prevSelectedValue, setPrevSelectedValue] = useState("all");
  const hybridRef = useRef(null);

  const notify = () => toast.warn("You did not applied any hybrid type jobs!");

  function handleFilterJobs(e) {
    const newSelectedValue = e.target.value;
    if (newSelectedValue === "all") {
      setFilteredJobs(appliedJobs);
      setPrevSelectedValue(newSelectedValue);
    } else {
      const filtered = appliedJobs.filter(
        (job) => job.remote_or_onsite.toLowerCase() === newSelectedValue
      );

      if (filtered.length < 1) {
        hybridRef.current.value = prevSelectedValue;
        notify();
        return;
      }
      setFilteredJobs(filtered);
      setPrevSelectedValue(newSelectedValue);
    }
  }

  return (
    <div>
      <div className="bg-indigo-50 h-[400px] flex justify-center items-center relative">
        <h1 className="text-5xl text-center font-bold">Applied Jobs</h1>

        <img className="absolute top-0 right-0" src={bg2} alt="" />
        <img className="absolute bottom-0 left-0" src={bg1} alt="" />
      </div>

      {/* job item card containers */}
      <div className=" max-w-screen-xl mx-auto px-5 py-20">
        {/* filter buttons */}
        <div className=" w-32 ml-auto">
          <select
            ref={hybridRef}
            onChange={handleFilterJobs}
            defaultValue={prevSelectedValue}
            className="select select-ghost bg-indigo-50 "
          >
            <option disabled={true}>Filter By</option>
            <option value="all">All</option>
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        {/* cards */}

        {filteredJobs.map((job) => (
          <AppliedItem job={job} key={job.id}></AppliedItem>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
