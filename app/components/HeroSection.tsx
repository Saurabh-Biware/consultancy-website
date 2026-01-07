"use client";

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
        const gridSize = 60; // Larger grid for more organized look
        const lines: Array<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            progress: number;
            speed: number;
            type: 'horizontal' | 'vertical';
        }> = [];

        // Predefined strategic positions for more organized randomness
        const strategicPositions = {
            horizontal: [0.2, 0.35, 0.5, 0.65, 0.8], // 20%, 35%, 50%, 65%, 80% of height
            vertical: [0.15, 0.3, 0.45, 0.6, 0.75, 0.9] // Strategic vertical positions
        };

        let lastHorizontalIndex = -1;
        let lastVerticalIndex = -1;

        // Create organized animated lines
        const createLine = () => {
            const isHorizontal = Math.random() > 0.4; // Slight preference for horizontal
            const speed = window.innerWidth < 768 ? 0.002 : 0.004; // Slower, more deliberate

            if (isHorizontal) {
                // Use strategic positions with some variation
                let positionIndex;
                do {
                    positionIndex = Math.floor(Math.random() * strategicPositions.horizontal.length);
                } while (positionIndex === lastHorizontalIndex && strategicPositions.horizontal.length > 1);
                
                lastHorizontalIndex = positionIndex;
                const baseY = canvas.height * strategicPositions.horizontal[positionIndex];
                const variation = (Math.random() - 0.5) * gridSize * 0.5; // Small variation
                const y = Math.max(gridSize, Math.min(canvas.height - gridSize, baseY + variation));
                
                lines.push({
                    x1: -100, // Start off-screen
                    y1: y,
                    x2: canvas.width + 100, // End off-screen
                    y2: y,
                    progress: 0,
                    speed,
                    type: 'horizontal'
                });
            } else {
                // Vertical lines with strategic positioning
                let positionIndex;
                do {
                    positionIndex = Math.floor(Math.random() * strategicPositions.vertical.length);
                } while (positionIndex === lastVerticalIndex && strategicPositions.vertical.length > 1);
                
                lastVerticalIndex = positionIndex;
                const baseX = canvas.width * strategicPositions.vertical[positionIndex];
                const variation = (Math.random() - 0.5) * gridSize * 0.5;
                const x = Math.max(gridSize, Math.min(canvas.width - gridSize, baseX + variation));
                
                lines.push({
                    x1: x,
                    y1: -100,
                    x2: x,
                    y2: canvas.height + 100,
                    progress: 0,
                    speed,
                    type: 'vertical'
                });
            }
        };

        // Draw organized grid
        const drawGrid = () => {
            ctx.strokeStyle = "#FF4500";
            ctx.globalAlpha = 0.08; // More subtle
            ctx.lineWidth = 1;

            // Strategic grid lines - not every line
            for (let x = gridSize; x < canvas.width; x += gridSize * 2) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            for (let y = gridSize; y < canvas.height; y += gridSize * 2) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        // Draw animated lines with better effects
        const drawLines = () => {
            lines.forEach((line, index) => {
                line.progress += line.speed;
                
                if (line.progress >= 1.2) { // Extend beyond screen
                    lines.splice(index, 1);
                    return;
                }

                let currentX, currentY, startX, startY;
                
                if (line.type === 'horizontal') {
                    const totalDistance = line.x2 - line.x1;
                    currentX = line.x1 + totalDistance * line.progress;
                    currentY = line.y1;
                    startX = Math.max(0, line.x1 + totalDistance * Math.max(0, line.progress - 0.3));
                    startY = line.y1;
                } else {
                    const totalDistance = line.y2 - line.y1;
                    currentX = line.x1;
                    currentY = line.y1 + totalDistance * line.progress;
                    startX = line.x1;
                    startY = Math.max(0, line.y1 + totalDistance * Math.max(0, line.progress - 0.3));
                }

                // Enhanced gradient effect
                const gradient = line.type === 'horizontal' 
                    ? ctx.createLinearGradient(startX, startY, currentX, currentY)
                    : ctx.createLinearGradient(startX, startY, currentX, currentY);
                
                gradient.addColorStop(0, "rgba(255, 69, 0, 0)");
                gradient.addColorStop(0.3, "rgba(255, 69, 0, 0.3)");
                gradient.addColorStop(0.7, "rgba(255, 69, 0, 0.8)");
                gradient.addColorStop(1, "rgba(255, 69, 0, 1)");

                ctx.strokeStyle = gradient;
                ctx.globalAlpha = 0.9;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";
                
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.lineTo(currentX, currentY);
                ctx.stroke();
            });
        };

        // Animation loop with controlled timing
        let lastLineTime = 0;
        const lineInterval = 2000; // 2 seconds between lines
        
        const animate = (currentTime: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawGrid();
            drawLines();
            
            // Create new lines with controlled timing
            if (currentTime - lastLineTime > lineInterval && lines.length < 2) {
                createLine();
                lastLineTime = currentTime;
            }
            
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

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
    pt-20
  "
        >
            {/* Animated Grid Canvas */}
            <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
            {/* Content Overlay */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                {/* Micro Credo */}
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-neon-orange-bright/10 border border-neon-orange/30 rounded-full">
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
        </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
          {content.headline.split('—').map((part: string, i: number) => (
            <span key={i}>
              {i === 0 ? part : <span className="text-neon-orange">{part}</span>}
              {i === 0 && ' —'}
            </span>
          ))}
        </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
          {content.subheadline}
        </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* Primary CTA */}
                <button 
            className="px-8 py-4 bg-neon-orange-bright text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-2xl hover:shadow-neon-orange/40 transition-all duration-500 inline-flex items-center gap-3"
            aria-label="Request a strategic assessment"
          >
            {content.primaryCTA}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

                {/* Secondary CTA */}
                <button 
            className="px-8 py-4 border border-neon-orange/40 text-neon-orange font-semibold text-lg rounded-full hover:bg-neon-orange/10 transition-all duration-500 inline-flex items-center gap-3"
            aria-label="View operating verticals"
          >
            {content.secondaryCTA}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
                </div>
            </div>

            {/* Subtle gradient overlay for depth */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"
                style={{ zIndex: 2 }}
            />
        </section>
    );
}
