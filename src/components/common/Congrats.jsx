
import { useEffect } from "react";
import "./text.css";

export default function Congrats() {
  useEffect(() => {
    // Sprinkle generation logic
    const sprinklesContainer = document.querySelector(".sprinkles");

    for (let i = 0; i < 150; i++) { // Increase the number of sprinkles
      const sprinkle = document.createElement("div");
      sprinkle.classList.add("sprinkle");
      sprinkle.style.left = `${Math.random() * 100}%`;
      sprinkle.style.top = `${Math.random() * 100}%`;
      sprinkle.style.backgroundColor = getRandomColor();

      // Append each sprinkle to the container
      sprinklesContainer.appendChild(sprinkle);
    }

    function getRandomColor() {
      const colors = [
        "#ff69b4",
        "#ff4500",
        "#32cd32",
        "#1e90ff",
        "#ffd700",
        "#8a2be2",
        "#00ced1",
        "#ff1493",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }, []);

  return (
    <div>
      <div className="hurray-container bg-[#292929]">
        <span className="hurray-text">Hurray!</span>
        <span className="success-text">You successfully completed the level!</span>
        <div className="sprinkles"></div>
      </div>
    </div>
  );
}
