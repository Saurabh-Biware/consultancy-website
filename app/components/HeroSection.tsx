"use client";

import Spline from "@splinetool/react-spline/next";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
    content: {
        headline: string;
        subheadline: string;
        primaryCTA: string;
        secondaryCTA: string;
    };
}

export default function HeroSection({ content }: HeroSectionProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Grid and animation variables
        const gridSize = 40;
        const lines: Array<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            progress: number;
            speed: number;
        }> = [];

        // Create animated lines
        const createLine = () => {
            const isHorizontal = Math.random() > 0.5;
            const speed = window.innerWidth < 768 ? 0.003 : 0.005; // Slower on mobile

            if (isHorizontal) {
                const y =
                    Math.floor(Math.random() * (canvas.height / gridSize)) *
                    gridSize;
                lines.push({
                    x1: 0,
                    y1: y,
                    x2: canvas.width,
                    y2: y,
                    progress: 0,
                    speed,
                });
            } else {
                const x =
                    Math.floor(Math.random() * (canvas.width / gridSize)) *
                    gridSize;
                lines.push({
                    x1: x,
                    y1: 0,
                    x2: x,
                    y2: canvas.height,
                    progress: 0,
                    speed,
                });
            }
        };

        // Draw grid
        const drawGrid = () => {
            ctx.strokeStyle = "#FF4500";
            ctx.globalAlpha = 0.1;
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x <= canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = 0; y <= canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        // Draw animated lines
        const drawLines = () => {
            lines.forEach((line, index) => {
                line.progress += line.speed;

                if (line.progress >= 1) {
                    lines.splice(index, 1);
                    return;
                }

                const currentX = line.x1 + (line.x2 - line.x1) * line.progress;
                const currentY = line.y1 + (line.y2 - line.y1) * line.progress;

                // Gradient effect
                const gradient = ctx.createLinearGradient(
                    line.x1,
                    line.y1,
                    currentX,
                    currentY
                );
                gradient.addColorStop(0, "transparent");
                gradient.addColorStop(0.7, "#FF4500");
                gradient.addColorStop(1, "#FF4500");

                ctx.strokeStyle = gradient;
                ctx.globalAlpha = 0.8;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(line.x1, line.y1);
                ctx.lineTo(currentX, currentY);
                ctx.stroke();
            });
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawGrid();
            drawLines();

            // Create new lines randomly
            if (Math.random() < 0.02 && lines.length < 3) {
                createLine();
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <section
            className="
    relative flex items-center justify-center
    overflow-hidden bg-black
    w-screen max-w-none
    h-[70vh]
    lg:h-[90vh]
    xl:h-screen
  "
        >
            {/* Animated Grid Canvas */}
            {/* <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      /> */}
            <Spline
                scene="https://prod.spline.design/5Xit0f-64gOGXgfA/scene.splinecode"
                className="w-full h-full"
                style={{ pointerEvents: "none" }}
            />
            {/* Content Overlay */}
            {/* <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center"> */}
                {/* Micro Credo */}
                {/* <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-neon-orange-bright/10 border border-neon-orange/30 rounded-full">
          <svg 
            className="w-4 h-4 text-neon-orange" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-sm font-semibold text-neon-orange tracking-wide">STRATEGIC NAVIGATION</span>
        </div> */}

                {/* Main Headline */}
                {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
          {content.headline.split('—').map((part: string, i: number) => (
            <span key={i}>
              {i === 0 ? part : <span className="text-neon-orange">{part}</span>}
              {i === 0 && ' —'}
            </span>
          ))}
        </h1> */}

                {/* Sub-headline */}
                {/* <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
          {content.subheadline}
        </p> */}

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center"> */}
                {/* Primary CTA */}
                {/* <button 
            className="px-8 py-4 bg-neon-orange-bright text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-2xl hover:shadow-neon-orange/40 transition-all duration-500 inline-flex items-center gap-3"
            aria-label="Request a strategic assessment"
          >
            {content.primaryCTA}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> */}

                {/* Secondary CTA */}
                {/* <button 
            className="px-8 py-4 border border-neon-orange/40 text-neon-orange font-semibold text-lg rounded-full hover:bg-neon-orange/10 transition-all duration-500 inline-flex items-center gap-3"
            aria-label="View operating verticals"
          >
            {content.secondaryCTA}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button> */}
                {/* </div> */}
            {/* </div> */}

            {/* Subtle gradient overlay for depth */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"
                style={{ zIndex: 2 }}
            />
        </section>
    );
}
