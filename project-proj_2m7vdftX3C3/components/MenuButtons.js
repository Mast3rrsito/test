function MenuButtons() {
  const navigateTo = (page) => {
    window.location.href = page;
  };

  return (
    <div className="flex flex-col space-y-8" data-name="menu-buttons" data-file="components/MenuButtons.js">
      <MenuButton 
        text="PROJECTS" 
        onClick={() => navigateTo('projects.html')} 
        delay={200}
      />
      <MenuButton 
        text="CONTACTS" 
        onClick={() => navigateTo('contact.html')} 
        delay={400}
      />
    </div>
  );
}

function MenuButton({ text, onClick, delay }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return <div className="h-16"></div>; // Placeholder to prevent layout shift

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative px-10 py-5 text-center transition-all duration-300 ease-out
        border-2 bg-transparent outline-none rounded-full
        ${isHovered 
          ? 'scale-110 border-blue-400 shadow-[0_0_25px_rgba(0,240,255,0.4)] bg-blue-900/10' 
          : 'scale-100 border-gray-600'}
      `}
    >
      <span className={`text-xl font-bold tracking-widest transition-all duration-300 ${isHovered ? 'text-blue-300 text-shadow-glow' : 'text-gray-400'}`}>
        {text}
      </span>
    </button>
  );
}