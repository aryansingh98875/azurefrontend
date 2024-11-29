
import { useEffect } from "react";
import "./text.css";

export default function TryAgain() {
  useEffect(() => {
    // Sprinkle generation logic for Try Again animation
    const sprinklesContainer = document.querySelector(".try-again-sprinkles");

    for (let i = 0; i < 150; i++) { // Increase the number of sprinkles
      const sprinkle = document.createElement("div");
      sprinkle.classList.add("try-again-sprinkle");
      sprinkle.style.left = `${Math.random() * 100}%`;
      sprinkle.style.top = `${Math.random() * 100}%`;
      sprinkle.style.backgroundColor = getRandomColor();

      // Append each sprinkle to the container
      sprinklesContainer.appendChild(sprinkle);
    }

    function getRandomColor() {
      const colors = [
        "#ff6347",
        "#dc143c",
        "#ff4500",
        "#ff8c00",
        "#ff1493",
        "#ffa500",
        "#b22222",
        "#8b0000",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }, []);

  return (
    <div>
      <div className="try-again-container">
        <span className="try-again-text">Try Again!</span>
        <span className="fail-text">You can do it! Give it another shot!</span>
        <div className="try-again-sprinkles"></div>
        <video
          src="https://res.cloudinary.com/dcztupol9/video/upload/v1724325858/sad_cjxyok.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="try-again-video"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
