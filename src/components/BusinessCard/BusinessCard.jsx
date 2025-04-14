import React, { useEffect, useRef } from 'react';
import Atropos from 'atropos/react';
import 'atropos/atropos.css';
import './BusinessCard.css';

const BusinessCard = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId;

    // Setup canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Track mouse
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Animation function
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(10, 10, 10, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add mouse glow effect
      if (mouseX && mouseY) {
        const gradient = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 300
        );
        gradient.addColorStop(0, 'rgba(51, 255, 102, 0.03)');
        gradient.addColorStop(1, 'rgba(10, 10, 10, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Scan lines
      for (let y = 0; y < canvas.height; y += 8) {
        ctx.fillStyle = 'rgba(51, 255, 102, 0.01)';
        ctx.fillRect(0, y, canvas.width, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="card-container">
      <canvas ref={canvasRef} className="background-canvas" />

      <Atropos
        className="my-atropos"
        activeOffset={40}
        shadowScale={1.05}
        highlight={false}
      >
        <div className="business-card-content">
          <div className="glitch-mask" data-atropos-offset="-5"></div>
          <div className="card-details">
            <h1 data-atropos-offset="5"><span>@</span>Pedro_Teixeira</h1>
            <p data-atropos-offset="2">
              Creative developer and digital craftsman. Building innovative solutions
              where technology meets design, code meets creativity, and problems meet solutions.
            </p>
            <div className="card-credentials" data-atropos-offset="3">
              <div className="card-credential">dev@pedroteixeira.tech</div>
              <div className="card-email">Full-Stack Developer</div>
            </div>
            <div className="card-actions" data-atropos-offset="4">
              <a href="/about" className="button primary">Learn More</a>
              <a href="/contact" className="button">Get in Touch</a>
            </div>
          </div>
        </div>
      </Atropos>
    </div>
  );
};

export default BusinessCard;
