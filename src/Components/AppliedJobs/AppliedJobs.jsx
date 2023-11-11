/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppliedJobs = ({title}) => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        document.title = `Job Heaven | ${title}`
    },[location.pathname, title])
    
    const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
        <div className="max-w-6xl mx-auto mb-20 mt-10">
      <div className="form-control my-6">
        <form 
        onSubmit={e => {
          e.preventDefault();
          this.reset()
        }}
        >
          <div className="input-group justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button type="submit" className="btn btn-square btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:rid-cols-2 lg:grid-cols-2 gap-5">
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 m-4"
          >
            {/* Image */}
            <img
              src={job.pictureUrl}
              alt={`${job.employer} - ${job.title}`}
              className="w-full h-56 object-cover mb-4 rounded-md"
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
              <button
                onClick={() => handleViewDetails(job)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default AppliedJobs;