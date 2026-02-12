function TopNav() {
  const navItemClass = "px-4 py-2 text-sm md:text-base font-medium transition-colors duration-300 hover:text-white tracking-wider";
  const activeClass = "text-white";
  const inactiveClass = "text-gray-400";

  return (
    <div className="absolute top-8 left-0 w-full flex justify-center z-50 pointer-events-auto" data-name="top-nav" data-file="components/TopNav.js">
      {/* Container: Dark gray square/box with rounded corners */}
      <div className="bg-gray-900/90 border border-gray-800 rounded-2xl flex items-center p-2 shadow-[0_0_20px_rgba(0,240,255,0.1)] backdrop-blur-sm hover:border-blue-900/50 transition-colors">
        
        <a href="index.html" className={`${navItemClass} ${activeClass}`}>HOME</a>
        
        {/* Separator: Gray bar with rounded corners */}
        <div className="w-1.5 h-5 bg-gray-700 rounded-full mx-2"></div>

        <div className="flex space-x-1">
            <a href="projects.html" className={`${navItemClass} ${inactiveClass} hover:text-blue-400`}>PROJECTS</a>
            <a href="contact.html" className={`${navItemClass} ${inactiveClass} hover:text-blue-400`}>CONTACT</a>
        </div>
      </div>
    </div>
  );
}
