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

    // Particle representation for thermal energy dynamics
    const particleCount = Math.min(35, Math.floor(width / 40));
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

    // Electric Blue (#3B82F6), Thermal Red (#EF4444), Soft Coral (#F87171), Deep Blue (#1E3A8A)
    const colors = ['#3B82F6', '#EF4444', '#F87171', '#1E3A8A', '#60A5FA'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.1,
        pulseSpeed: 0.005 + Math.random() * 0.01,
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
        if (p.alpha > 0.45 || p.alpha < 0.08) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowBlur = 8;
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
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(30, 58, 138, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Warm Thermal Red Energy Flow Gradient - Bottom Right */}
      <div 
        className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.35) 0%, rgba(248, 113, 113, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* Center Subtle Energy Core */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.2) 0%, rgba(239, 68, 68, 0.15) 40%, transparent 75%)'
        }}
      />

      {/* Thermodynamic Flow Vector Lines (Subtle SVG Pattern) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.035] stroke-current text-slate-800"
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
      >
        <defs>
          <pattern id="thermo-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="1.5" fill="#3B82F6" opacity="0.6" />
          </pattern>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#1E3A8A" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#thermo-grid)" />
        <path 
          d="M -100,200 C 300,50 600,400 1200,100 C 1800,-200 2100,500 2600,300" 
          fill="none" 
          stroke="url(#flowGradient)" 
          strokeWidth="2"
        />
        <path 
          d="M -100,600 C 400,400 800,800 1400,450 C 2000,100 2200,700 2800,500" 
          fill="none" 
          stroke="url(#flowGradient)" 
          strokeWidth="1.5"
        />
      </svg>

      {/* Animated Thermal Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
