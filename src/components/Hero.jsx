import { personalInfo } from '../data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* IT Workspace Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/it-workspace-bg.png" 
          alt="IT Workspace" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-primary-50/85 to-purple-50/90 dark:from-gray-900/95 dark:via-slate-900/90 dark:to-indigo-950/95"></div>
        
        {/* Animated gradient orbs for depth */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 animate-slide-down">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up text-black dark:text-white">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {personalInfo.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-black dark:text-white font-semibold rounded-lg border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
