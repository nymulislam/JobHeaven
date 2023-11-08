import { Link } from "react-router-dom";

const Blog2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative">
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7))",
            }}
          ></div>
          <img
            src="https://i.postimg.cc/VkKTwqTT/express-nest.png"
            className="left-0 top-0 w-full z-0 object-cover"
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <Link
              to="/"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Web Development
            </Link>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Exploring Express.js and Nest.js: A Beginner&apos;s Comparison
            </h2>
            <div className="flex mt-3">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">
                  {" "}
                  Naymul Islam{" "}
                </p>
                <p className="font-semibold text-gray-400 text-xs"> 08 Nov </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Express.js vs. Nest.js: Which One Should Beginners Choose?
          </h2>
          <p className="pb-6">
            Choosing the right web application framework is a pivotal decision
            for beginners in the world of web development. Two popular options,
            Express.js and Nest.js, offer distinct features and approaches. In
            this article, we&apos;ll explore both frameworks, making it easier
            for beginners to decide which one best suits their needs.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Express.js - The Lightweight Workhorse
          </h2>
          <p className="pb-6">
            Express.js is known for its simplicity and minimalism. It&apos;s
            like a versatile toolbox with just the essential tools. Developers
            often appreciate its unopinionated approach, making it suitable for
            various use cases. It&apos;s a great choice for those who prefer
            more control over their application&apos;s structure.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Nest.js - The Opinionated Contender
          </h2>
          <p className="pb-6">
            On the other hand, Nest.js provides a more structured and
            opinionated development experience. It&apos;s like a well-organized
            workshop with predefined tools. Nest.js encourages the use of
            TypeScript and follows architectural patterns like MVC. This can be
            especially helpful for beginners looking for a guided approach.
          </p>

          <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            Choosing a web development framework can be daunting for beginners,
            but it&apos;s an essential decision. Express.js and Nest.js
            represent two distinct paths to web development. Express.js, the
            minimalistic workhorse, offers simplicity and flexibility, while
            Nest.js, the opinionated contender, provides a structured approach.
            This article helps beginners navigate this choice, encouraging them
            to consider project complexity, personal preferences, and the
            learning experience each framework offers.
          </div>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Comparing Features - What Matters Most?
          </h2>
          <p className="pb-6">
            When choosing between Express.js and Nest.js, consider factors like
            project complexity, your familiarity with TypeScript, and your
            preferred development style. Express.js is often favored for smaller
            projects and developers who prefer freedom. Nest.js is a great fit
            for more extensive projects and developers who value convention and
            structure.
          </p>
          <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
            Conclusion - Making the Right Choice
          </h2>
          <p className="pb-6">
            In the end, the choice between Express.js and Nest.js depends on
            your specific project and personal preferences. As a beginner, both
            frameworks offer valuable learning opportunities. Try them out,
            experiment, and decide which one aligns better with your web
            development journey.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Blog2;
