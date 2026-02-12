function ScrambleText({ text, delay = 0, className = "" }) {
  const [displayText, setDisplayText] = React.useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  React.useEffect(() => {
    let interval;
    let timeout;
    let iteration = 0;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText(prev => 
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; 
      }, 30);
    };

    if (delay > 0) {
      timeout = setTimeout(startScramble, delay);
    } else {
      startScramble();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay]);

  return (
    <span className={className} data-name="scramble-text" data-file="components/ScrambleText.js">
      {displayText}
    </span>
  );
}