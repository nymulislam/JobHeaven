/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyJobs = ({ title }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const url = `https://job-heaven-server.vercel.app/allJobs/user?email=${user.email}`;

  const [myJobs, setMyJobs] = useState([]);

  console.log(myJobs);

  useEffect(() => {
    document.title = `Job Heaven | ${title}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyJobs(data);
      });
  }, [location.pathname, title, url]);

  const handleRemove = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://job-heaven-server.vercel.app/allJobs/user/${id}`, {
            method: "DELETE",
          });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          setMyJobs(myJobs.filter((job) => job._id !== id));
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto mb-20 mt-10">
      <div className="form-control my-6"></div>
      <div className="grid grid-cols-1 md:rid-cols-2 lg:grid-cols-2 gap-5">
        {myJobs.map((job) => (
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
            <div className="text-center mt-5 flex justify-evenly">
              <button
                onClick={() => handleRemove(job._id)}
                className="btn btn-warning text-base"
              >
                Remove
              </button>
              <Link to={`/updateJob/${job._id}`}>
                <button className="btn btn-primary text-base text-white">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
