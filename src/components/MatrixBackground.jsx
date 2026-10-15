
import { useEffect, useRef } from "react";

function MatrixBackground({ enabled }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // When disabled, erase every character and stop.
    if (!enabled) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animationId;
    let columns = 0;
    let drops = [];

    const fontSize = 16;
    const characters =
      "アイウエオカキクケコサシスセソタチツテト012345789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function resizeCanvas() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      columns = Math.ceil(window.innerWidth / fontSize);

      drops = Array.from(
        { length: columns },
        () => Math.random() * -50
      );
    }

    function draw() {
      // Fade previous characters without painting a black background.
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = "rgba(0, 0, 0, 0.12)";
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw new characters on a transparent canvas.
      context.globalCompositeOperation = "source-over";
      context.font = `${fontSize}px monospace`;
      context.fillStyle = "#00ff41";

      for (let i = 0; i < drops.length; i++) {
        const character =
          characters[Math.floor(Math.random() * characters.length)];

        const x = i * fontSize;
        const y = drops[i] * fontSize;

        context.fillText(character, x, y);

        if (
          y > window.innerHeight &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i] += 0.45;
      }

      animationId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}

export default MatrixBackground;
