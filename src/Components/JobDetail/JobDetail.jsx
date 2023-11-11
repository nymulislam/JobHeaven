/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from "../Providers/AuthProvider";

const JobDetail = ({ title }) => {
  const {user} = useContext(AuthContext)
  const [appliedJob, setAppliedJob] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.title = `Job Heaven | ${title}`;
  }, [location.pathname, title]);



  const job = useLoaderData();


  const handleAppliedJob = () => {
    fetch(`https://car-universe-server.vercel.app/cars/${car._id}`)
      .then((res) => res.json())
      .then((carDetails) => {
        fetch("https://car-universe-server.vercel.app/cart/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(carDetails),
        })
          .then((res) => res.json())
          .then(() => {
            swal({
              title: "Success!",
              text: "Application Submitted Successfully.",
              icon: "success",
              button: "OK",
            });

            setAppliedJob(true);
          });
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
        confirmButtonText: `
          Submit Application&nbsp;<i class="fa fa-arrow-right"></i>
        `,
        inputValidator: (result) => {
          console.log(result);
          return !result && "Please insert your resume link";
        }
      });
      if (accept) {
        Swal.fire("Your application has been submitted successfully. <br/> Thank you!");
      }
  })()
  }

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
            <button 
            onClick={handleApplyClick}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
