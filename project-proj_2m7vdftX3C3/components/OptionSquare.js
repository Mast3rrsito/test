function OptionSquare() {
  const [selected, setSelected] = React.useState(0);
  
  const options = [
    { icon: 'icon-code', label: 'Develop', desc: 'Full Stack' },
    { icon: 'icon-pen-tool', label: 'Design', desc: 'UI/UX' },
    { icon: 'icon-cpu', label: 'System', desc: 'Architecture' },
    { icon: 'icon-globe', label: 'Deploy', desc: 'Global Scale' }
  ];

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96" data-name="option-square" data-file="components/OptionSquare.js">
      {/* The Rounded Square Container */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-[48px] border border-white/10 flex flex-wrap p-4 shadow-2xl">
        
        {options.map((opt, idx) => (
          <div 
            key={idx}
            onClick={() => setSelected(idx)}
            className={`
              w-1/2 h-1/2 p-2 cursor-pointer transition-all duration-300
            `}
          >
            <div className={`
              w-full h-full rounded-2xl flex flex-col items-center justify-center gap-2
              transition-all duration-300 border
              ${selected === idx 
                ? 'bg-green-900/40 border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]' 
                : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'}
            `}>
              <div className={`${opt.icon} text-3xl ${selected === idx ? 'text-green-400' : 'text-gray-400'}`}></div>
              <span className={`text-sm font-semibold tracking-wider ${selected === idx ? 'text-white' : 'text-gray-500'}`}>
                {opt.label}
              </span>
            </div>
          </div>
        ))}

        {/* Central Hub decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-full border border-white/20 flex items-center justify-center shadow-lg z-10 pointer-events-none">
           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
        </div>
      </div>
    </div>
  );
}