import { toast } from "react-toastify";
const notify = () => toast.info("You already saved this job item!");
const addNotify = () => toast.info("Job item successfully added");

const getAppliedJobs = () => {
  const jobs = localStorage.getItem("applied-jobs");
  if (jobs) {
    return JSON.parse(jobs);
  }
  return [];
};

const saveAppliedJob = (id) => {
  const savedJobs = getAppliedJobs();
  const isExist = savedJobs.find((jobId) => jobId === id);
  if (!isExist) {
    savedJobs.push(id);
    localStorage.setItem("applied-jobs", JSON.stringify(savedJobs));
    addNotify()
  } else {
    notify();
  }
};

export { getAppliedJobs, saveAppliedJob };
