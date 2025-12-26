import { useState } from "react";
import { experiences } from "../data/portfolio";

const Experience = () => {
  // State to track which experience items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle function for expanding/collapsing entire card
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
                    <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm">
                      {/* White Accent Line at Top */}
                      <div className="h-1 bg-gradient-to-r from-white via-gray-200 to-white dark:from-gray-700 dark:via-white dark:to-gray-700"></div>

                      {/* Card Content */}
                      <div className="p-6">
                        {/* Title and Company - Always Visible */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-black dark:text-white font-semibold text-base">
                              {exp.company}
                            </p>
                          </div>

                          {/* Expand/Collapse Arrow Button */}
                          <button
                            onClick={() => toggleExpanded(exp.id)}
                            className="flex-shrink-0 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label={
                              isExpanded ? "Collapse details" : "Expand details"
                            }
                          >
                            <svg
                              className={`w-6 h-6 text-black dark:text-white transform transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
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
                          </button>
                        </div>

                        {/* Expandable Content */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded
                              ? "max-h-[2000px] opacity-100 mt-4"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          {/* Duration Badge */}
                          <span className="inline-block px-4 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-white text-sm font-semibold rounded-full mb-4">
                            {exp.duration}
                          </span>

                          {/* Responsibilities */}
                          <ul className="space-y-2 mb-4">
                            {exp.responsibilities.map((resp, idx) => (
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
