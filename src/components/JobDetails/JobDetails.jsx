import { useLoaderData } from "react-router";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { saveAppliedJob } from "../../utility/localStorage";

const JobDetails = () => {
  const {
    id,
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = useLoaderData();

  const { phone, email, address } = contact_information;

  return (
    <div>
      <div className="bg-indigo-50 h-[400px] flex justify-center items-center relative">
        <h1 className="text-5xl text-center font-bold">Job Details</h1>

        <img className="absolute top-0 right-0" src={bg2} alt="" />
        <img className="absolute bottom-0 left-0" src={bg1} alt="" />
      </div>
      {/* description */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] lg:md:grid-cols-[1fr_350px]  gap-5 max-w-screen-xl mx-auto px-5 py-20">
        <div className="flex flex-col gap-5">
          <h3>
            <span className="font-semibold">Job Description:</span>
            {job_description}
          </h3>

          <h3>
            <span className="font-semibold">Job Responsibility:</span>
            {job_responsibility}
          </h3>

          <div>
            <p className="font-semibold">Educational Requirements:</p>
            <p>{educational_requirements}</p>
          </div>

          <div>
            <p className="font-semibold">Experience:</p>
            <p>{experiences}</p>
          </div>
        </div>

        <div>
          <div className="bg-indigo-50 px-5 py-8 rounded-lg space-y-3">
            <h3 className="text-xl font-semibold">Job Details</h3>

            <hr className="border-gray-300" />

            <div className="flex flex-col gap-1">
              <p className="flex gap-2 items-center">
                <AiFillDollarCircle className="text-indigo-400" />
                <span className="font-medium">Salary :</span> {salary}
              </p>

              <p className="flex gap-2 items-center">
                <AiFillDollarCircle className="text-indigo-400" />{" "}
                <span className="font-medium">Job Title :</span> {job_title}
              </p>
            </div>

            <h3 className="text-xl font-semibold">Contact Information</h3>

            <hr className="border-gray-300" />

            <div className="flex flex-col gap-1">
              <p className="flex gap-1 items-center">
                <span className="text-xl text-indigo-500">
                  <CiPhone />
                </span>
                <span className="font-medium"> Phone:</span> {phone}
              </p>

              <p className="flex gap-1 items-center">
                <span className="text-xl text-indigo-500">
                  <MdOutlineEmail />
                </span>
                <span className="font-medium">Email:</span> {email}
              </p>

              <p className="flex gap-1 md:items-center">
                <span className="text-xl text-indigo-500">
                  <CiLocationOn />
                </span>
                <span className="font-medium">Address:</span> {address}
              </p>
            </div>
          </div>

          <button
            onClick={() => saveAppliedJob(id)}
            className="btn btn-primary w-full mt-5"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
