import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layouts from "./Layouts.jsx";
import { AppliedJobs, Home, JobDetails } from "./components/index.js";
import { getAppliedJobs } from "./utility/localStorage.js";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "details/:jobId",
        loader: async ({ params }) => {
          try {
            const response = await fetch("/jobs.json");
            const data = await response.json();
            const job = data.find((job) => job.id.toString() === params.jobId);
            return job;
          } catch (error) {
            throw new Response("Failed to load Job Details", {
              status: 500,
              error: error,
            });
          }
        },
        Component: JobDetails,
      },
      {
        path: "applied",
        loader: async () => {
          const appliedJobs = getAppliedJobs();
          try {
            const response = await fetch("/jobs.json");
            const data = await response.json();
            const jobToShow = data.filter((job) =>
              appliedJobs.includes(job.id)
            );
            return jobToShow;
          } catch (error) {
            throw new Response("Failed to load Job Details", {
              status: 500,
              error: error,
            });
          }
        },
        Component: AppliedJobs,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
