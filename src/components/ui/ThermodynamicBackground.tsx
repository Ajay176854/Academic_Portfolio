import { useEffect, useRef } from 'react';

export function ThermodynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(25, Math.floor(width / 50));
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }> = [];

    const colors = ['#3B82F6', '#60A5FA', '#EF4444', '#F87171'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.2 + 0.05,
        pulseSpeed: 0.003 + Math.random() * 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulseSpeed;
        if (p.alpha > 0.35 || p.alpha < 0.05) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Cold Electric Blue Energy Wave Gradient - Top Left */}
      <div 
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(30, 58, 138, 0.08) 55%, transparent 75%)'
        }}
      />

      {/* Warm Thermal Red Energy Flow Gradient - Right Side */}
      <div 
        className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, rgba(248, 113, 113, 0.08) 55%, transparent 75%)'
        }}
      />

      {/* Left Blue Wave Flow Contour Lines */}
      <svg
        className="absolute top-0 left-0 w-[600px] h-[900px] opacity-25"
        viewBox="0 0 600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M -100 150 C 150 120 250 350 -50 600" stroke="#3B82F6" strokeWidth="1.2" />
        <path d="M -100 200 C 180 170 300 400 -50 700" stroke="#3B82F6" strokeWidth="1.2" />
        <path d="M -100 250 C 210 220 350 450 -50 800" stroke="#3B82F6" strokeWidth="1.2" />
        <path d="M -100 300 C 240 270 400 500 -50 900" stroke="#3B82F6" strokeWidth="1.2" />
        <path d="M -100 350 C 270 320 450 550 50 950" stroke="#3B82F6" strokeWidth="1.2" />
        <path d="M -100 100 C 120 70 200 300 -50 500" stroke="#2563EB" strokeWidth="1.5" />
      </svg>

      {/* Right Red Thermal Wave Flow Contour Lines */}
      <svg
        className="absolute top-0 right-0 w-[650px] h-[900px] opacity-25"
        viewBox="0 0 650 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 750 150 C 500 250 400 550 750 800" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M 750 100 C 450 200 350 500 750 750" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M 750 200 C 520 300 420 600 750 850" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M 750 250 C 550 350 450 650 750 900" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M 750 300 C 580 400 480 700 750 950" stroke="#EF4444" strokeWidth="1.2" />
        <path d="M 750 50 C 400 150 300 450 750 700" stroke="#F87171" strokeWidth="1.5" />
      </svg>

      {/* Animated Thermal Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
