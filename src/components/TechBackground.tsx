import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  hue: number;
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  angleX: number;
  angleY: number;
  speedX: number;
  speedY: number;
}

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let nodes3D: Node3D[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize 3D nodes that form a wireframe sphere/rotating structure
    const nodeCount = 30;
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 180 + Math.random() * 120;
      nodes3D.push({
        x: radius * Math.cos(theta) * Math.sin(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(phi),
        angleX: Math.random() * Math.PI * 2,
        angleY: Math.random() * Math.PI * 2,
        speedX: 0.002 + Math.random() * 0.004,
        speedY: 0.002 + Math.random() * 0.004,
      });
    }

    // Initialize floating particles
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 600 - 300,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.3,
        size: 1 + Math.random() * 2.5,
        opacity: 0.15 + Math.random() * 0.35,
        hue: 130 + Math.random() * 40,
      });
    }

    const project = (x: number, y: number, z: number) => {
      const scale = 400 / (400 + z);
      const cx = canvas.width / 2 + x * scale;
      const cy = canvas.height / 2 + y * scale;
      return { x: cx, y: cy, scale };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw floating particles with connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;
        if (p.z > 300) p.z = -300;
        if (p.z < -300) p.z = 300;

        const scale = 400 / (400 + p.z);
        const px = canvas.width / 2 + (p.x - canvas.width / 2) * scale;
        const py = canvas.height / 2 + (p.y - canvas.height / 2) * scale;

        // Draw particle
        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 50%, 60%, ${p.opacity * scale})`;
        ctx.fill();

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const qScale = 400 / (400 + q.z);
          const qx = canvas.width / 2 + (q.x - canvas.width / 2) * qScale;
          const qy = canvas.height / 2 + (q.y - canvas.height / 2) * qScale;

          const dx = px - qx;
          const dy = py - qy;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(qx, qy);
            const alpha = (1 - dist / 120) * 0.08;
            ctx.strokeStyle = `hsla(${p.hue}, 40%, 50%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update and draw 3D wireframe structure
      const projectedNodes: { x: number; y: number; scale: number }[] = [];
      for (const node of nodes3D) {
        node.angleX += node.speedX;
        node.angleY += node.speedY;

        const cosX = Math.cos(node.angleX);
        const sinX = Math.sin(node.angleX);
        const cosY = Math.cos(node.angleY);
        const sinY = Math.sin(node.angleY);

        // Rotate around Y
        let rx = node.x * cosY - node.z * sinY;
        let rz = node.x * sinY + node.z * cosY;
        // Rotate around X
        let ry = node.y * cosX - rz * sinX;
        rz = node.y * sinX + rz * cosX;

        projectedNodes.push(project(rx, ry, rz + 200));
      }

      // Draw wireframe connections
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const a = projectedNodes[i];
          const b = projectedNodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const alpha = (1 - dist / 200) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(157, 211, 170, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw wireframe nodes
      for (const node of projectedNodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 * node.scale, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 8 * node.scale);
        glow.addColorStop(0, "rgba(157, 211, 170, 0.4)");
        glow.addColorStop(0.5, "rgba(157, 211, 170, 0.1)");
        glow.addColorStop(1, "rgba(157, 211, 170, 0)");
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5 * node.scale, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(157, 211, 170, 0.7)";
        ctx.fill();
      }

      // Subtle grid lines on floor plane
      ctx.save();
      const gridSpacing = 60;
      const gridOffset = (Date.now() * 0.01) % gridSpacing;
      ctx.strokeStyle = "rgba(157, 211, 170, 0.03)";
      ctx.lineWidth = 0.5;
      for (let x = -gridOffset; x < canvas.width + gridSpacing; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, canvas.height * 0.6);
        ctx.lineTo(x + (x - canvas.width / 2) * 0.3, canvas.height);
        ctx.stroke();
      }
      for (let y = canvas.height * 0.6; y < canvas.height; y += gridSpacing / 2) {
        const progress = (y - canvas.height * 0.6) / (canvas.height * 0.4);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - (canvas.width / 2) * progress * 0.6, y);
        ctx.lineTo(canvas.width / 2 + (canvas.width / 2) * progress * 0.6, y);
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}