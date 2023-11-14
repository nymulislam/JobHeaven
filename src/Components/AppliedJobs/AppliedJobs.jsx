/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { usePDF } from "react-to-pdf";

const AppliedJobs = ({ title }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/appliedJobs/add?email=${user.email}`;
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  console.log(appliedJobs);

  useEffect(() => {
    document.title = `Job Heaven | ${title}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppliedJobs(data);
      });
  }, [location.pathname, title, url]);

  const filterJobsByCategory = () => {
    if (selectedCategory === "All") {
      return appliedJobs;
    } else {
      return appliedJobs.filter(job => job.jobs.category === selectedCategory);
    }
  }

  // React to PDF
  const {toPDF, targetRef} = usePDF({filename: 'Applied_Jobs_Summery.pdf'})

  return (
    <div className="max-w-6xl h-screen mx-auto mb-20 mt-10">
      {/* select implement */}
      <div className="flex items-center gap-5 md:justify-around flex-col-reverse md:flex-row">
        <select 
        className="select select-primary w-full max-w-xs"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
        >
          <option value="All" disabled selected>
            Select A Category
          </option>
          <option value="On Site Job">On Site Job</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote Job">Remote Job</option>
          <option value="Part Time">Part Time</option>
        </select>
        <div>
          <button 
          onClick={() => toPDF()}
          className="btn hover:glass btn-outline btn-primary text-lg font-semibold">Download Summary</button>
        </div>
      </div>

      <div className="form-control my-6"></div>
      <div 
      ref={targetRef}
      className="grid grid-cols-1 md:rid-cols-2 lg:grid-cols-2 gap-5">
        {filterJobsByCategory().map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 m-4"
          >
            {/* Image */}
            <img
              src={job.jobs.pictureUrl}
              alt={`${job.jobs.employer} - ${job.jobs.title}`}
              className="w-full h-56 object-cover mb-4 rounded-md"
            />

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                {job.jobs.employer}
              </h2>
              <div className="badge bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-semibold uppercase">
                {job.jobs.category}
              </div>
            </div>

            <p className="text-lg font-semibold text-indigo-600 my-2">
              {job.jobs.title}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-semibold">Posting Date:</span>{" "}
              {job.jobs.postingDate}
              <br />
              <span className="font-semibold">Application Deadline:</span>{" "}
              {job.jobs.applicationDeadline}
              <br />
              <span className="font-semibold">Salary Range:</span>{" "}
              {job.jobs.salaryRange}
              <br />
              <span className="font-semibold">Applicants:</span>{" "}
              {job.jobs.applicantsNumber}
            </p>

            {/* Description */}
            <p className="text-gray-700">
              <span className="font-semibold">Description: </span>
              {job.jobs.description}
            </p>
            <div className="text-center mt-5">
              <button className="btn-disabled bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
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
