import { personalInfo } from '../data/portfolio';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const roles = personalInfo.title.split('*').map(role => role.trim());
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pr-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-200/30 dark:bg-gray-800/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-200/30 dark:bg-gray-800/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-30 items-center">
          {/* Left Side - Profile Card */}
          <div className="flex justify-center lg:justify-end animate-slide-right">
            <div className="relative group">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-black dark:bg-white rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Profile Card */}
              <div className="relative bg-white dark:bg-gray-800 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                {/* Profile Image Placeholder */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 bg-black dark:bg-white rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-black dark:from-gray-300 dark:to-white flex items-center justify-center text-white dark:text-black text-6xl font-bold">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Available for opportunities</span>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-center lg:text-left animate-slide-left">
            {/* Greeting */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium text-sm">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-black dark:text-white whitespace-nowrap">
              {personalInfo.name}
            </h1>

            {/* Animated Role */}
            <div className="mb-6 h-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
                I'm a <span className="text-black dark:text-white underline decoration-4 decoration-gray-400 dark:decoration-gray-600">{typedText}</span>
                <span className="animate-blink">|</span>
              </h2>
            </div>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {roles.map((role, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-black dark:text-white font-semibold rounded-xl border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Connect
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-3xl font-bold text-black dark:text-white">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black dark:text-white">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Awards</div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
