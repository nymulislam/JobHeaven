/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const JobDetail = ({ title }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    document.title = `Job Heaven | ${title}`;
  }, [location.pathname, title]);

  const job = useLoaderData();

  let resumeLinkValue;

  const handleAppliedJob = () => {
    const email = user?.email;
    const name = user?.displayName;
    const appliedData = {
      jobs: job,
      email,
      name,
      resumeLink: resumeLinkValue,
    };

    console.log(appliedData);

    fetch(`http://localhost:5000/appliedJobs/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appliedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleApplyClick = () => {
    (async () => {
      const { value: accept } = await Swal.fire({
        title: "Multiple inputs",
        html: `
        <input value="${user.displayName}" id="swal-input1" class="swal2-input">
        <input value="${user.email}" id="swal-input2" class="swal2-input">
        `,
        input: "text",
        inputAttributes: {
          style: "width: 50%; margin: 10px  auto; left: 25%;",
        },
        inputPlaceholder: "Place Your Resume Link...",
        confirmButtonText: "Submit Application",
        inputValidator: (result) => {
          console.log(result);
          resumeLinkValue = result;
          return !result && "Please insert your resume link";
        },
      });
      if (accept) {
        handleAppliedJob();
        Swal.fire(
          "Your application has been submitted successfully. <br/> Thank you!"
        );
      }
    })();
  };

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

          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">
              {job.employer}
            </h2>
            <div className="badge bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-semibold uppercase">
              {job.category}
            </div>
          </div>

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
              onClick={handleApplyClick}
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
