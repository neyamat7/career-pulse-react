import { Suspense, use, useState } from "react";
import FetureJobItem from "./FetureJobItem";

const jobsResponse = fetch("/jobs.json").then((res) => res.json());

const FeaturedJobs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 mt-20 flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <Suspense>
        <ShowFeatureJobs jobsResponse={jobsResponse}></ShowFeatureJobs>
      </Suspense>
    </div>
  );
};

export default FeaturedJobs;

function ShowFeatureJobs({ jobsResponse }) {
  const allJobs = use(jobsResponse);
  const [dataShowLength, setDataShowLength] = useState(6);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
        {allJobs.slice(0, dataShowLength).map((job) => (
          <FetureJobItem key={job.id} job={job}></FetureJobItem>
        ))}
      </div>

      <button
        onClick={() => setDataShowLength(allJobs.length)}
        className="btn btn-primary self-center mb-10"
      >
        See All Jobs
      </button>
    </>
  );
}
