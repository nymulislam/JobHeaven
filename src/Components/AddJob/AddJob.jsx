/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AddJob.css";
import swal from "sweetalert";
const AddJob = ({ title }) => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Job Heaven | ${title}`;
  }, [location.pathname, title]);

  const [selectedType, setSelectedType] = useState("");

  const handleJob = (e) => {
    e.preventDefault();
    const form = e.target;

    const user = form.elements.user.value;
    const title = form.elements.title.value;
    const url = form.elements.url.value;
    const salary = form.elements.salary.value;
    const description = form.elements.description.value;
    const applicant = form.elements.applicant.value;
    const postingDate = form.elements.date.value;
    const deadline = form.elements.deadline.value;

    form.reset();

    const getValue = {
      user,
      title,
      userId: user,
      url,
      type: selectedType,
      salary,
      postingDate,
      deadline,
      applicant,
      description,
    };

    console.log(getValue);

    fetch("http://localhost:5000/allJobs/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "You added a Job!",
            icon: "success",
            button: "ok!",
          });
        }
      });
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 mb-20">
      <div>
        <div className="p-5 rounded-t-lg text-white text-lg font-medium bg-gradient-to-br from-[#2b68e0] to-[#e710ea]">
          <h2>Add A Job Form</h2>
        </div>
        <div className="bg-white rounded-b-lg p-6">
          <form onSubmit={handleJob}>
            <label>
              <span>
                User Name <span className="text-red-600">*</span>
              </span>
              <input 
              type="text" 
              name="user" 
              className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
              required />
            </label>
            <label>
              <span>
                Job Title <span className="text-red-600">*</span>
              </span>
              <input 
              type="text" 
              name="title" 
              className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
              required />
            </label>
            <label>
              <span>Job Banner / Picture URL</span>
              <input 
              type="text" 
              name="url" 
              className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
              required />
            </label>
            <label>
              <span>
                Category <span className="text-red-600">*</span>
              </span>
              <select
                name="type"
                value={selectedType}
                onChange={handleTypeChange}
                className="w-[70%] h-11 py-2 px-3 mb-3 text-[#888] border-[1px] border-[#dadada]"
                required
              >
                <option value="select">Select a job category...</option>
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </label>
            <label>
              <span>
                Salary <span className="text-red-600">*</span>
              </span>
              <input
                type="number"
                name="salary"
                min="0"
                pattern="[$-]{2}-[0-9]{2}-[$-]{3}"
                placeholder="$75,000 - $95,000"
                className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
                required
              />
            </label>
            <label>
              <span>
                Applicants Number <span className="text-red-600">*</span>
              </span>
              <input
                type="number"
                min="0"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                name="applicant"
                className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
                required
              />
            </label>
            <label>
              <span>
                Posting Date <span className="text-red-600">*</span>
              </span>
              <input 
              type="date" 
              name="date" 
              className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
              required />
            </label>
            <label>
              <span>
                Application Deadline <span className="text-red-600">*</span>
              </span>
              <input 
              type="date" 
              name="deadline"
              className="w-[70%] h-8 mb-3 py-2 px-3 text-[#888] border-[1px] border-[#dadada]"
               required />
            </label>
            <label>
              <span>
                Description <span className="text-red-600">*</span>
              </span>
              <textarea
                type="text"
                name="description"
                className="w-[70%] h-24 pt-1 px-2 text-[#888] border-[1px] border-[#dadada]"
                required
              />
            </label>
            <div className="w-full text-center">
              <button
                type="submit"
                className="btn w-1/2 bg-gradient-to-br from-[#2b68e0] to-[#e710ea] text-white text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
