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

        const gridSize = 40;
        const lines: Array<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
            progress: number;
            speed: number;
            type: 'horizontal' | 'vertical';
        }> = [];

        const strategicPositions = {
            horizontal: [0.2, 0.35, 0.5, 0.65, 0.8],
            vertical: [0.15, 0.3, 0.45, 0.6, 0.75, 0.9]
        };

        let lastHorizontalIndex = -1;
        let lastVerticalIndex = -1;

        const createLine = () => {
            const speed = 0.008 + Math.random() * 0.004;
            const isHorizontal = Math.random() > 0.5;

            if (isHorizontal) {
                let positionIndex;
                do {
                    positionIndex = Math.floor(Math.random() * strategicPositions.horizontal.length);
                } while (positionIndex === lastHorizontalIndex && strategicPositions.horizontal.length > 1);
                
                lastHorizontalIndex = positionIndex;
                const baseY = canvas.height * strategicPositions.horizontal[positionIndex];
                const variation = (Math.random() - 0.5) * gridSize * 0.5;
                const y = Math.max(gridSize, Math.min(canvas.height - gridSize, baseY + variation));
                
                lines.push({
                    x1: -100,
                    y1: y,
                    x2: canvas.width + 100,
                    y2: y,
                    progress: 0,
                    speed,
                    type: 'horizontal'
                });
            } else {
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

        const drawGrid = () => {
            ctx.strokeStyle = "#FF4500";
            ctx.globalAlpha = 0.15; // Increased opacity for better visibility
            ctx.lineWidth = 1;

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

        const drawLines = () => {
            lines.forEach((line, index) => {
                line.progress += line.speed;
                
                if (line.progress >= 1.2) {
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

        let lastLineTime = 0;
        const lineInterval = 2000;
        
        const animate = (currentTime: number) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawGrid();
            drawLines();
            
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
        <section className="relative flex items-center justify-center overflow-hidden bg-black w-screen max-w-none h-[70vh] lg:h-[90vh] xl:h-screen pt-20">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} />
            
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-neon-orange-bright/10 border border-neon-orange/30 rounded-full">
                    <svg className="w-4 h-4 text-neon-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-semibold text-neon-orange tracking-wide">STRATEGIC NAVIGATION</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
                    {content.headline.split('—').map((part: string, i: number) => (
                        <span key={i}>
                            {i === 0 ? part : <span className="text-neon-orange">{part}</span>}
                            {i === 0 && ' —'}
                        </span>
                    ))}
                </h1>

                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
                    {content.subheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-8 py-4 bg-neon-orange-bright text-black font-bold text-lg rounded-full hover:bg-white hover:shadow-2xl hover:shadow-neon-orange/40 transition-all duration-500 inline-flex items-center gap-3" aria-label="Request a strategic assessment">
                        {content.primaryCTA}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>

                    <button className="px-8 py-4 border border-neon-orange/40 text-neon-orange font-semibold text-lg rounded-full hover:bg-neon-orange/10 transition-all duration-500 inline-flex items-center gap-3" aria-label="View operating verticals">
                        {content.secondaryCTA}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" style={{ zIndex: 2 }} />
        </section>
    );
}