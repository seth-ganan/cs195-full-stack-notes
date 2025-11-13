import { useState, useEffect } from "react";

function EscapeDetector() {
  const [pressed, setPressed] = useState(false);

  // TODO: Add your useEffect here
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setPressed(true);
      }
      console.log(event.key);
    }
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return <div>{pressed ? "✅ Escape pressed!" : "⌨️ Press Escape..."}</div>;
}
export default EscapeDetector;
