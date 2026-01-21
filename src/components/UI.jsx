import React, { useState } from 'react';
import {
    X,
    Activity,
    Terminal,
    Download
} from 'lucide-react';

// --- Assets & Icons ---
export const AppleLogo = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.86-1.09 1.44-2.59 1.28-4.11-1.24.05-2.74.83-3.63 1.89-.8.93-1.49 2.43-1.3 3.84 1.39.11 2.8-.57 3.65-1.62" />
    </svg>
);

export const WindowsLogo = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.551L24 0v11.4H10.949V1.898zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.898V12.6z" /></svg>
);

export const AndroidLogo = ({ className }) => (
    <img
        src="https://cdn-icons-png.flaticon.com/128/5968/5968993.png"
        className={className}
        alt="Android Logo"
        style={{ filter: 'brightness(0) invert(1)' }}
    />
);

// --- Components ---
export const TechBorder = ({ children, className = "" }) => (
    <div className={`relative group ${className}`}>
        {/* Corner accents */}
        <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
        <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
        <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
        <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
        {children}
    </div>
);

export const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
    const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-300 font-mono text-sm tracking-wide relative overflow-hidden group cursor-pointer";

    const variants = {
        primary: "bg-[#BBB791] text-black hover:bg-[#D4D0AA]",
        secondary: "bg-transparent border border-white/20 text-white hover:border-[#BBB791] hover:text-[#BBB791]",
        outline: "bg-transparent border border-[#BBB791] text-[#BBB791] hover:bg-[#BBB791] hover:text-black",
    };

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            <span className="relative z-10 flex items-center gap-2">
                {Icon && <Icon size={16} />}
                {children}
            </span>
        </button>
    );
};

export const Badge = ({ children }) => (
    <span className="inline-flex items-center gap-2 px-2 py-1 text-[10px] font-mono font-bold text-[#BBB791] uppercase tracking-widest border-b border-[#BBB791]/30">
        <div className="w-1.5 h-1.5 bg-[#BBB791] animate-pulse"></div>
        {children}
    </span>
);

export const TerminalWindow = ({ className }) => {
    const [lines, setLines] = useState([
        { text: "> INITIATING LOCAL CORE...", color: "text-white/40" },
        { text: "> LOADING MODEL: LLAMA-3-8B-Q4", color: "text-[#BBB791]" },
        { text: "> ALLOCATING VRAM... 4.2GB RESERVED", color: "text-white/60" },
        { text: "> DISCONNECTING NETWORK SOCKETS...", color: "text-white/60" },
        { text: "> AIR-GAP MODE: ACTIVE", color: "text-green-500" },
        { text: "> READY FOR INPUT.", color: "text-white" },
    ]);

    return (
        <div className={`font-mono text-xs p-4 bg-black/90 border border-white/10 rounded-sm shadow-2xl backdrop-blur-md ${className}`}>
            <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                </div>
                <div className="text-white/20 ml-auto">bash — 80x24</div>
            </div>
            <div className="space-y-1.5">
                {lines.map((line, i) => (
                    <div key={i} className={`${line.color} transition-opacity duration-500`}>
                        {line.text}
                    </div>
                ))}
                <div className="flex items-center gap-1 mt-4">
                    <span className="text-[#BBB791]">{">"}</span>
                    <div className="w-2 h-4 bg-[#BBB791] animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export const GlitchText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789!@#$%^&*()";

    const handleMouseOver = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    };

    return (
        <div onMouseOver={handleMouseOver} className={className}>
            {displayText}
        </div>
    );
};

export const ComingSoonPopup = ({ onClose }) => (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-[#111] border border-white/10 p-8 max-w-sm w-full relative shadow-2xl transform transition-all scale-100">
            <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer">
                <X size={20} />
            </button>
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#BBB791]/10 flex items-center justify-center">
                    <Activity className="text-[#BBB791]" size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">Coming Soon</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                        This version is currently in final testing. Join our waitlist to get notified when it drops.
                    </p>
                </div>
                <div className="pt-2 w-full">
                    <button onClick={onClose} className="w-full py-3 bg-[#BBB791] text-black font-bold text-sm tracking-wider hover:bg-[#D4D0AA] transition-colors cursor-pointer">
                        ACKNOWLEDGE
                    </button>
                </div>
            </div>
        </div>
    </div>
);
