"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black border-t border-neon-orange/20 overflow-hidden">
            {/* Subtle animated background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-orange rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
            </div>
            
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1 group">
                        <div className="text-2xl font-bold tracking-tight font-serif mb-6 cursor-default">
                            <span className="text-white group-hover:text-neon-orange transition-colors duration-500">Navi</span>
                            <span className="text-neon-orange group-hover:text-white transition-colors duration-500">Starq</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-serif group-hover:text-gray-300 transition-colors duration-300">
                            Strategic navigation for organizations that cannot
                            afford trial-and-error. We design systems, not
                            deliverables.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-neon-orange transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-neon-orange transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 font-serif">
                            Verticals
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('verticals');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    Brand Creative
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('verticals');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    Growth Marketing
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('verticals');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    Production Events
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('ai');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    AI Technology
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 font-serif">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('philosophy');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    Philosophy
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('how-we-work');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    How We Work
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('intelligence');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    Intelligence
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        const element = document.getElementById('engage');
                                        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="text-gray-400 hover:text-neon-orange transition-colors duration-300 text-sm font-serif text-left"
                                >
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 font-serif">
                            Strategic Contact
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-400 text-sm font-serif mb-1">
                                    Strategic Inquiries
                                </p>
                                <a
                                    href="mailto:connect@navistarq.com "
                                    className="text-neon-orange hover:text-white transition-colors duration-300 text-sm font-serif"
                                >
                                    connect@navistarq.com
                                </a>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm font-serif mb-1">
                                    Partnership Opportunities
                                </p>
                                <a
                                    href="mailto:partnerships@navistarq.com"
                                    className="text-neon-orange hover:text-white transition-colors duration-300 text-sm font-serif"
                                >
                                    partnerships@navistarq.com
                                </a>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm font-serif mb-1">
                                    Direct Line
                                </p>
                                <a
                                    href="tel:+1-555-NAVIGATE"
                                    className="text-neon-orange hover:text-white transition-colors duration-300 text-sm font-serif"
                                >
                                    +91 7083261555
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Creative Design */}
            <div className="relative border-t border-neon-orange/30 bg-black overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 107, 53, 0.15) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                
                <div className="max-w-7xl mx-auto px-6 py-6 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        {/* Left: Brand signature */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 border border-neon-orange/20 rounded-full bg-neon-orange/5">
                                <div className="w-1.5 h-1.5 bg-neon-orange rounded-full animate-pulse" />
                                <span className="text-xs font-mono text-neon-orange tracking-wider">NAVISTARQ_{currentYear}</span>
                            </div>
                        </div>

                        {/* Center: Designer credit with creative styling */}
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-600 font-mono">{'<'}</span>
                            <span className="text-gray-500">designed_by:</span>
                            <a 
                                href="https://saurabhbiware.netlify.app/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative font-mono text-neon-orange hover:text-white transition-all duration-300"
                            >
                                @saurabh
                                <span className="absolute -bottom-0.5 left-0 w-full h-px bg-neon-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                            <span className="text-gray-600 font-mono">{'/>'}</span>
                        </div>

                        {/* Right: Copyright */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs font-mono text-gray-600">
                                © {currentYear} NaviStarq. All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
