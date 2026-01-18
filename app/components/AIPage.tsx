"use client";

import { useEffect, useRef, useState } from "react";

export default function AIPage() {
    const evolutionCanvasRef = useRef<HTMLCanvasElement>(null);
    const [currentEra, setCurrentEra] = useState(0);
    const [evolutionProgress, setEvolutionProgress] = useState(0);
    const [aiCapabilities, setAiCapabilities] = useState<
        Array<{
            id: number;
            capability: string;
            level: number;
            unlocked: boolean;
        }>
    >([]);
    const [futureVision, setFutureVision] = useState<
        Array<{
            id: number;
            vision: string;
            probability: number;
            timeline: string;
        }>
    >([]);

    useEffect(() => {
        // Simulate AI evolution progress
        const progressInterval = setInterval(() => {
            setEvolutionProgress((prev) => (prev + 1) % 100);
        }, 100);

        // Simulate capability unlocking
        const capabilityInterval = setInterval(() => {
            setAiCapabilities([
                {
                    id: 1,
                    capability: "Pattern Recognition",
                    level: Math.random() * 100,
                    unlocked: true,
                },
                {
                    id: 2,
                    capability: "Strategic Reasoning",
                    level: Math.random() * 100,
                    unlocked: Math.random() > 0.3,
                },
                {
                    id: 3,
                    capability: "Predictive Modeling",
                    level: Math.random() * 100,
                    unlocked: Math.random() > 0.5,
                },
                {
                    id: 4,
                    capability: "Executive Synthesis",
                    level: Math.random() * 100,
                    unlocked: Math.random() > 0.7,
                },
                {
                    id: 5,
                    capability: "Autonomous Strategy",
                    level: Math.random() * 100,
                    unlocked: Math.random() > 0.9,
                },
            ]);
        }, 2000);

        // Simulate future visions
        const visionInterval = setInterval(() => {
            const visions = [
                "AI-driven market prediction with 99.7% accuracy",
                "Autonomous strategic planning systems",
                "Real-time competitive intelligence networks",
                "Predictive brand reputation management",
                "Self-optimizing business models",
            ];
            setFutureVision([
                {
                    id: 1,
                    vision: visions[Math.floor(Math.random() * visions.length)],
                    probability: 85 + Math.random() * 10,
                    timeline: "2025",
                },
                {
                    id: 2,
                    vision: visions[Math.floor(Math.random() * visions.length)],
                    probability: 70 + Math.random() * 20,
                    timeline: "2027",
                },
                {
                    id: 3,
                    vision: visions[Math.floor(Math.random() * visions.length)],
                    probability: 60 + Math.random() * 25,
                    timeline: "2030",
                },
            ]);
        }, 3500);

        // Evolution Timeline Canvas
        const canvas = evolutionCanvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Evolution particles
        const particles = Array.from({ length: 80 }, (_, i) => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            evolution: Math.random(),
            phase: Math.random() * Math.PI * 2,
        }));

        let frame = 0;

        const animateEvolution = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update particles
            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.evolution =
                    0.3 + Math.sin(frame * 0.02 + particle.phase) * 0.4;
                particle.phase += 0.01;

                // Bounce off edges
                if (particle.x <= 0 || particle.x >= canvas.width)
                    particle.vx *= -1;
                if (particle.y <= 0 || particle.y >= canvas.height)
                    particle.vy *= -1;
            });

            // Draw evolution timeline
            const timelineY = canvas.height / 2;
            ctx.strokeStyle = "#FF6B35";
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.6;
            ctx.beginPath();
            ctx.moveTo(50, timelineY);
            ctx.lineTo(canvas.width - 50, timelineY);
            ctx.stroke();

            // Draw evolution stages
            const stages = [
                "AUTOMATION",
                "INTELLIGENCE",
                "STRATEGY",
                "AUTONOMY",
                "SINGULARITY",
            ];
            stages.forEach((stage, i) => {
                const x = 50 + (i * (canvas.width - 100)) / (stages.length - 1);
                const isActive = i === currentEra;

                ctx.globalAlpha = isActive ? 1 : 0.4;
                ctx.fillStyle = isActive ? "#FF6B35" : "#666";
                ctx.beginPath();
                ctx.arc(
                    x,
                    timelineY,
                    Math.max(3, isActive ? 8 : 5),
                    0,
                    Math.PI * 2,
                );
                ctx.fill();

                // Stage labels
                ctx.fillStyle = isActive ? "#FF6B35" : "#888";
                ctx.font = "10px monospace";
                ctx.textAlign = "center";
                ctx.fillText(stage, x, timelineY - 20);
            });

            // Draw evolution particles
            particles.forEach((particle) => {
                ctx.globalAlpha = particle.evolution;

                // Color based on evolution level
                const hue = particle.evolution * 60; // From red to yellow
                ctx.fillStyle = `hsl(${hue}, 100%, 60%)`;

                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    Math.max(0.1, particle.size * particle.evolution),
                    0,
                    Math.PI * 2,
                );
                ctx.fill();

                // Evolution connections
                if (particle.evolution > 0.7) {
                    ctx.globalAlpha = 0.2;
                    ctx.strokeStyle = "#FF6B35";
                    ctx.lineWidth = 1;
                    particles.forEach((other) => {
                        const distance = Math.sqrt(
                            (particle.x - other.x) ** 2 +
                                (particle.y - other.y) ** 2,
                        );
                        if (distance < 60 && other.evolution > 0.6) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                        }
                    });
                }
            });

            frame++;
            requestAnimationFrame(animateEvolution);
        };

        animateEvolution();

        // Cycle through evolution eras
        const eraInterval = setInterval(() => {
            setCurrentEra((prev) => (prev + 1) % 5);
        }, 4000);

        return () => {
            clearInterval(progressInterval);
            clearInterval(capabilityInterval);
            clearInterval(visionInterval);
            clearInterval(eraInterval);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    const evolutionStages = [
        {
            era: "AUTOMATION ERA",
            year: "2020-2022",
            description: "Basic task automation and process optimization",
            capabilities: [
                "Task Automation",
                "Data Processing",
                "Simple Analytics",
            ],
        },
        {
            era: "INTELLIGENCE ERA",
            year: "2023-2024",
            description: "Pattern recognition and intelligent decision support",
            capabilities: [
                "Pattern Recognition",
                "Predictive Analytics",
                "Decision Support",
            ],
        },
        {
            era: "STRATEGY ERA",
            year: "2025-2026",
            description: "Strategic planning and executive-level reasoning",
            capabilities: [
                "Strategic Planning",
                "Executive Reasoning",
                "Market Intelligence",
            ],
        },
        {
            era: "AUTONOMY ERA",
            year: "2027-2029",
            description: "Autonomous strategic execution and optimization",
            capabilities: [
                "Autonomous Strategy",
                "Self-Optimization",
                "Adaptive Learning",
            ],
        },
        {
            era: "SINGULARITY ERA",
            year: "2030+",
            description: "Superintelligent business transformation",
            capabilities: [
                "Superintelligence",
                "Reality Modeling",
                "Infinite Optimization",
            ],
        },
    ];

    const currentStage = evolutionStages[currentEra];

    return (
        <main className="overflow-x-hidden w-full pt-20 bg-black min-h-screen">
            {/* AI Evolution Header */}
            <section className="relative py-12 md:py-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-xs md:text-sm text-neon-orange font-mono mb-4 animate-pulse">
                            AI_EVOLUTION_TIMELINE // {currentStage.year}
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                            The Evolution of Strategic AI
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-serif leading-relaxed max-w-3xl mx-auto">
                            From basic automation to superintelligent strategy.
                            Watch AI evolve from task executor to strategic
                            architect.
                        </p>
                    </div>

                    {/* Evolution Timeline Canvas */}
                    <div className="relative mb-12">
                        <canvas
                            ref={evolutionCanvasRef}
                            className="w-full h-64 md:h-80 border border-neon-orange/20 bg-gradient-to-b from-black to-gray-900"
                        />
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 text-xs text-neon-orange font-mono">
                            EVOLUTION_PROGRESS // {evolutionProgress}%
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Era Display */}
            <section className="py-8 md:py-12 px-4 md:px-6 border-y border-neon-orange/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="text-xs md:text-sm text-neon-orange font-mono mb-2">
                            CURRENT_ERA
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-serif">
                            {currentStage.era}
                        </h2>
                        <p className="text-lg text-gray-300 font-serif mb-6">
                            {currentStage.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {currentStage.capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="bg-gray-900/50 border border-gray-700 p-6 text-center relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-orange/5 to-transparent animate-pulse"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 mx-auto mb-4 bg-neon-orange/20 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-6 bg-neon-orange rounded-full animate-pulse"></div>
                                    </div>
                                    <h3 className="text-white font-bold font-serif text-lg mb-2">
                                        {capability}
                                    </h3>
                                    <div className="text-xs text-neon-orange font-mono">
                                        ACTIVE
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Capability Matrix */}
            <section className="py-12 md:py-16 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-xs md:text-sm text-neon-orange font-mono mb-6 md:mb-8">
                        CAPABILITY_EVOLUTION // REAL_TIME
                    </div>
                    <div className="space-y-4">
                        {aiCapabilities.map((capability) => (
                            <div
                                key={capability.id}
                                className={`border p-6 transition-all duration-500 ${
                                    capability.unlocked
                                        ? "border-neon-orange/40 bg-gray-900/30"
                                        : "border-gray-700 bg-gray-900/10"
                                }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3
                                        className={`font-bold font-serif text-lg ${
                                            capability.unlocked
                                                ? "text-white"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {capability.capability}
                                    </h3>
                                    <div
                                        className={`w-4 h-4 rounded-full ${
                                            capability.unlocked
                                                ? "bg-neon-orange animate-pulse"
                                                : "bg-gray-600"
                                        }`}
                                    ></div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-400 font-mono mb-1">
                                            EVOLUTION_LEVEL
                                        </div>
                                        <div className="h-2 bg-gray-700 rounded">
                                            <div
                                                className={`h-full rounded transition-all duration-1000 ${
                                                    capability.unlocked
                                                        ? "bg-neon-orange"
                                                        : "bg-gray-600"
                                                }`}
                                                style={{
                                                    width: `${capability.unlocked ? capability.level : 0}%`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div
                                        className={`text-sm font-mono ${
                                            capability.unlocked
                                                ? "text-neon-orange"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {capability.unlocked
                                            ? Math.round(capability.level)
                                            : 0}
                                        %
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Vision */}
            <section className="py-12 md:py-16 px-4 md:px-6 border-t border-neon-orange/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-xs md:text-sm text-neon-orange font-mono mb-6 md:mb-8">
                        FUTURE_VISION // PREDICTIVE
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {futureVision.map((vision) => (
                            <div
                                key={vision.id}
                                className="bg-gradient-to-b from-gray-900/50 to-black border border-neon-orange/20 p-6 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 to-transparent opacity-50"></div>
                                <div className="relative z-10">
                                    <div className="text-xs text-neon-orange font-mono mb-2">
                                        {vision.timeline}
                                    </div>
                                    <p className="text-white font-serif text-lg mb-4 leading-relaxed">
                                        {vision.vision}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs text-gray-400 font-mono">
                                            PROBABILITY
                                        </div>
                                        <div className="text-neon-orange font-mono font-bold">
                                            {Math.round(vision.probability)}%
                                        </div>
                                    </div>
                                    <div className="mt-2 h-1 bg-gray-700 rounded">
                                        <div
                                            className="h-full bg-neon-orange rounded transition-all duration-1000"
                                            style={{
                                                width: `${vision.probability}%`,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Evolution Consultation */}
            <section className="py-12 md:py-16 px-4 md:px-6 border-t border-neon-orange/20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-xs md:text-sm text-neon-orange font-mono mb-4 md:mb-6">
                        EVOLUTION_CONSULTATION
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 font-serif">
                        Position Your Business at the Forefront of AI Evolution
                    </h2>
                    <p className="text-gray-300 font-serif text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                        Don't wait for AI to evolve around you. Partner with us
                        to architect your organization's AI evolution strategy
                        and stay ahead of each transformative era.
                    </p>

                    {/* Evolution Progress Indicator */}
                    <div className="mb-8">
                        <div className="w-64 h-2 bg-gray-700 rounded mx-auto mb-4">
                            <div
                                className="h-full bg-gradient-to-r from-neon-orange to-yellow-400 rounded transition-all duration-100"
                                style={{ width: `${evolutionProgress}%` }}
                            ></div>
                        </div>
                        <div className="text-xs text-neon-orange font-mono">
                            AI_EVOLUTION_PROGRESS // CONTINUOUS
                        </div>
                    </div>

                    <button className="btn-primary font-mono text-sm md:text-base">
                        ARCHITECT_AI_EVOLUTION_STRATEGY
                    </button>
                </div>
            </section>
        </main>
    );
}
