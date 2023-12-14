const CareerAdvice = () => {
  return (
    <div className="my-40">
      <div className="m-5 mt-20 text-center text-4xl font-semibold mb-10 bg-clip-text text-transparent bg-gradient-to-br from-[#2b68e0] to-[#b64bb8]">
        <h2>Top Career Advice</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 max-w-xs mx-auto md:max-w-2xl lg:max-w-6xl">
        {/* Card One */}
        <div className="card p-4 w-full bg-base-100 shadow-lg hover:shadow-2xl">
          <figure>
            <img
              src="https://i.postimg.cc/nV1Fzbpg/interview.png"
              alt="Interview"
              className="h-32"
            />
          </figure>
          <div className="card-body">
            <div className="badge bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-semibold">
              INTERVIEW
            </div>
            <p>Mastering the Art of Interviews</p>
          </div>
        </div>

        {/* Card Two */}
        <div className="card p-4 w-full bg-base-100 shadow-lg hover:shadow-2xl">
          <figure>
            <img
              src="https://i.postimg.cc/qqQ6XNnC/resume.png"
              alt="Resume"
              className="h-32"
            />
          </figure>
          <div className="card-body">
            <div className="badge bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-semibold">
              RESUME
            </div>
            <p>Creating Standout Resumes</p>
          </div>
        </div>

        {/* Card Three */}
        <div className="card p-4 w-full bg-base-100 shadow-lg hover:shadow-2xl">
          <figure>
            <img
              src="https://i.postimg.cc/CKJ75xrd/jobs.png"
              alt="Jobs"
              className="h-32"
            />
          </figure>
          <div className="card-body">
            <div className="badge bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-semibold">
              JOBS
            </div>
            <p>Navigating the World of Job Opportunities</p>
          </div>
        </div>

        {/* Card Four */}
        <div className="card p-4 w-full bg-base-100 shadow-lg hover:shadow-2xl">
          <figure>
            <img
              src="https://i.postimg.cc/dVGvzzH5/assessment.png"
              alt="Assessment"
              className="h-32"
            />
          </figure>
          <div className="card-body">
            <div className="badge bg-gradient-to-r from-[#2b68e0] to-[#e710ea] text-white font-semibold">
              ASSESSMENTS
            </div>
            <p>Acing Assessments and Tests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
