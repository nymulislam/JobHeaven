import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyTabs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://job-heaven-server.vercel.app/allJobs/add")
      .then((res) => res.json())
      .then((data) => setJobsData(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const filterJobsByCategory = (category) => {
    if (category === "All Jobs") {
      return showAllJobs ? jobsData : jobsData.slice(0, 2);
    } else {
      return jobsData.filter((job) => job.category === category);
    }
  };

  const handleViewDetails = (job) => {
    if (!user) {
      toast.error("You have to login first to view details");
      navigate("/login");
    } else {
      console.log("Viewing details of:", job.title);
      navigate(`/jobDetail/${job._id}`);
    }
  };
  return (
    <Tabs className="max-w-6xl mx-auto mt-24 md:mt-20 mb-10">
      <TabList>
        <Tab>All Jobs</Tab>
        <Tab>On Site Job</Tab>
        <Tab>Remote Job</Tab>
        <Tab>Hybrid</Tab>
        <Tab>Part Time</Tab>
      </TabList>

      {["All Jobs", "On Site Job", "Remote Job", "Hybrid", "Part Time"].map(
        (category) => (
          <TabPanel key={category}>
            {/* Render Job Cards based on the selected category */}

            <div className="grid grid-cols-1 md:rid-cols-2 lg:grid-cols-2 gap-5">
              {filterJobsByCategory(category).map((job) => (
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
                    <span className="font-semibold">
                      Application Deadline:
                    </span>{" "}
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
            {/* Show All Button */}
            {jobsData.length > 2 && !showAllJobs && (
              <div className="text-center mt-5">
                <button
                  onClick={() => setShowAllJobs(true)}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  Show All
                </button>
              </div>
            )}
          </TabPanel>
        )
      )}
    </Tabs>
  );
};

export default MyTabs;
