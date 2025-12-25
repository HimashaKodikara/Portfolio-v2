import { useState } from "react";
import { experiences } from "../data/portfolio";

const Experience = () => {
  // State to track which experience items have expanded responsibilities
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle function for expanding/collapsing responsibilities
  const toggleExpanded = (expId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [expId]: !prev[expId],
    }));
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black dark:bg-white"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedItems[exp.id];
              const displayedResponsibilities = isExpanded
                ? exp.responsibilities
                : exp.responsibilities.slice(0, 4);
              const hasMore = exp.responsibilities.length > 4;

              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      {/* Duration Badge */}
                      <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-white text-sm font-semibold rounded-full mb-4">
                        {exp.duration}
                      </span>

                      {/* Title and Company */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-black dark:text-white font-semibold mb-4">
                        {exp.company}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-4">
                        {displayedResponsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-600 dark:text-gray-400 text-sm"
                          >
                            <svg
                              className="w-5 h-5 text-black dark:text-white mr-2 flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* See More/See Less Button */}
                      {hasMore && (
                        <button
                          onClick={() => toggleExpanded(exp.id)}
                          className="text-black dark:text-white font-semibold text-sm hover:underline mb-4 flex items-center gap-1 transition-all duration-200"
                        >
                          {isExpanded ? (
                            <>
                              See Less
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 15l7-7 7 7"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              See More ({exp.responsibilities.length - 4} more)
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
