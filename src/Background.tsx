import React, { useEffect, useRef } from 'react';

interface BackgroundCirclesProps {
  currentSlide: number;
  totalSlides: number;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({
  currentSlide,
  totalSlides,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the x position based on current slide
    const progress = totalSlides > 1 ? currentSlide / (totalSlides - 1) : 0;
    const xPosition = (0.2 + progress * 0.6) * canvas.width; // Keep within 20-80% of screen width

    // Draw concentric circles
    const maxRadius = Math.max(canvas.width, canvas.height) * 1.2;
    const numCircles = 6;

    // Define muted dark colors
    const baseColors = [
      '#121420', // Dark blue-black
      '#1B2432', // Dark navy
      '#242535', // Dark slate
      '#2D2B36', // Dark purple-gray
      '#1E1E2C', // Dark indigo
      '#232234', // Dark violet
    ];

    for (let i = 0; i < numCircles; i++) {
      const radius = maxRadius * (1 - i * 0.15);

      // Shift color based on current slide
      const colorIndex = (i + currentSlide) % baseColors.length;
      const color = baseColors[colorIndex];

      ctx.beginPath();
      ctx.arc(xPosition, canvas.height / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.8 - i * 0.1;
      ctx.fill();
    }

    ctx.globalAlpha = 1;

    // Handle window resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide, totalSlides]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default BackgroundCircles;
