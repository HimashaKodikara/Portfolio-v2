import { about, education } from "../data/portfolio";

const About = () => {
  return (
    <section id="about" className="py-15 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-black dark:bg-white rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src={about.image}
                  alt="Profile"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Hello! I'm glad you're here.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {about.description}
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 px-2 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 px-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white dark:text-black"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black dark:text-white font-medium mb-1">
                        {edu.degree}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-gray-700 dark:text-gray-300 mb-1">
                          {edu.university}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
