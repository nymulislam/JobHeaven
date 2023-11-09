/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const JobDetail = ({ title }) => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Job Heaven | ${title}`;
  }, [location.pathname, title]);

  const job = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto mb-20 mt-10">
      <div>
        <div
          key={job._id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 m-4"
        >
          {/* Image */}
          <img
            src={job.pictureUrl}
            alt={`${job.employer} - ${job.title}`}
            className="w-full h-80 object-cover mb-4 rounded-md"
          />

          <h2 className="text-xl font-semibold text-gray-800">
            {job.employer}
          </h2>
          <p className="text-lg font-semibold text-indigo-600 my-2">
            {job.title}
          </p>
          <p className="text-gray-600 text-sm mb-4">
            <span className="font-semibold">Posting Date:</span>{" "}
            {job.postingDate}
            <br />
            <span className="font-semibold">Application Deadline:</span>{" "}
            {job.applicationDeadline}
            <br />
            <span className="font-semibold">Salary Range:</span>{" "}
            {job.salaryRange}
            <br />
            <span className="font-semibold">Applicants:</span>{" "}
            {job.applicantsNumber}
          </p>

          {/* Description */}
          <p className="text-gray-700">
            <span className="font-semibold">Description: </span>
            {job.description}
          </p>
          <div className="text-center mt-5">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
