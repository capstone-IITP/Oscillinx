import React, { useState, useEffect } from 'react';
import {
  Download,
  Shield,
  WifiOff,
  Zap,
  Smartphone,
  Monitor,
  Menu,
  X,
  Terminal,
  ArrowDown,
  Layers,
  Activity,
  Share2,
  ChevronDown,
  Paperclip,
  Box,
  CornerDownLeft,
} from 'lucide-react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// --- Assets & Icons (Inline SVGs for strict single-file) ---
const AppleLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.86-1.09 1.44-2.59 1.28-4.11-1.24.05-2.74.83-3.63 1.89-.8.93-1.49 2.43-1.3 3.84 1.39.11 2.8-.57 3.65-1.62" />
  </svg>
);

const WindowsLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.551L24 0v11.4H10.949V1.898zM0 12.6h9.75v9.451L0 20.699V12.6zm10.949 0H24V24l-13.051-1.898V12.6z" /></svg>
);

const AndroidLogo = ({ className }) => (
  <img
    src="https://cdn-icons-png.flaticon.com/128/5968/5968993.png"
    className={className}
    alt="Android Logo"
    style={{ filter: 'brightness(0) invert(1)' }}
  />
);

// --- Styled Components ---

const TechBorder = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    {/* Corner accents */}
    <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t border-l border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
    <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t border-r border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
    <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b border-l border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
    <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b border-r border-[#BBB791] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:w-4 group-hover:h-4"></div>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
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

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-2 py-1 text-[10px] font-mono font-bold text-[#BBB791] uppercase tracking-widest border-b border-[#BBB791]/30">
    <div className="w-1.5 h-1.5 bg-[#BBB791] animate-pulse"></div>
    {children}
  </span>
);

// --- Device Mockups ---

const TerminalWindow = ({ className }) => {
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

const GlitchText = ({ text, className }) => {
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

// --- Components ---
const ComingSoonPopup = ({ onClose }) => (
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

// --- Main App Component ---
const OscillinxApp = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll Listener
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleComingSoon = () => setShowComingSoon(true);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#BBB791] selection:text-black overflow-x-hidden">

      {showComingSoon && <ComingSoonPopup onClose={() => setShowComingSoon(false)} />}

      {/* --- Technical Grid Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        }}>
      </div>

      {/* Decorative Glow */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#BBB791]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Oscillinx Logo" className="h-10 w-auto object-contain font-bold" />
            <span className="text-xl font-bold tracking-tighter text-white font-mono">OSCILLINX_</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest text-white/60">
            <button onClick={() => scrollToSection('features')} className="hover:text-[#BBB791] transition-colors uppercase cursor-pointer">[Features]</button>
            <button onClick={() => scrollToSection('desktop')} className="hover:text-[#BBB791] transition-colors uppercase cursor-pointer">[Desktop]</button>
            <button onClick={() => scrollToSection('mobile')} className="hover:text-[#BBB791] transition-colors uppercase cursor-pointer">[Mobile]</button>
            <button className="border border-[#BBB791] text-[#BBB791] px-4 py-2 hover:bg-[#BBB791] hover:text-black transition-colors uppercase cursor-pointer">
              Download v1.0.0
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 md:pt-40 px-6 z-10">
        <div className="container mx-auto grid md:grid-cols-12 gap-12 items-center">

          {/* Hero Text */}
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest text-white/70 font-mono">Systems Online</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
              INTELLIGENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-transparent">OFF THE GRID</span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-xl font-light leading-relaxed border-l-2 border-[#BBB791] pl-6">
              A sovereign AI environment running entirely on your local hardware. No servers. No telemetry. Just raw intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" icon={Activity} onClick={() => scrollToSection('features')}>
                RUN SIMULATION
              </Button>
              <Button variant="secondary" icon={Terminal} onClick={() => scrollToSection('features')}>
                VIEW SPECS
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-xs font-mono text-white/30">
              <div>COMPATIBILITY:</div>
              <div className="flex gap-4 text-white/60">
                <span className="flex items-center gap-1"><Monitor size={12} /> WIN/MAC</span>
                <span className="flex items-center gap-1"><Smartphone size={12} /> IOS/ANDROID</span>
              </div>
            </div>
          </div>

          {/* Hero Visual (Terminal) */}
          <div className="md:col-span-5 relative">
            <div className="absolute -inset-1 bg-[#BBB791] opacity-20 blur-2xl"></div>
            <TechBorder>
              <TerminalWindow className="relative z-10 bg-[#050505] min-h-[400px]" />
            </TechBorder>

            {/* Floating Elements */}
            <div className="absolute -right-8 top-20 bg-[#1a1a1a] border border-white/10 p-3 shadow-xl backdrop-blur-md hidden md:block">
              <div className="text-[10px] text-white/40 uppercase mb-1">Inference Speed</div>
              <div className="text-xl font-mono text-[#BBB791]">48 tok/s</div>
            </div>
            <div className="absolute -left-4 bottom-10 bg-[#1a1a1a] border border-white/10 p-3 shadow-xl backdrop-blur-md hidden md:block">
              <div className="text-[10px] text-white/40 uppercase mb-1">Privacy Level</div>
              <div className="text-xl font-mono text-green-500">AIR-GAPPED</div>
            </div>
          </div>

        </div>
      </section>

      {/* --- Bento Grid Features --- */}
      <section id="features" className="py-20 md:py-32 px-6 border-t border-white/5 bg-[#030303] relative">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-2">System Capabilities</h2>
              <p className="text-white/40 font-mono text-sm">ARCH: NEURAL_ENGINE_V2</p>
            </div>
            <div className="hidden md:block text-right text-xs font-mono text-white/30">
              <div>STATUS: OPTIMIZED</div>
              <div>LATENCY: &lt;15ms</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

            {/* Main Feature - Offline */}
            <TechBorder className="sm:col-span-2 lg:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
              <div>
                <div className="w-12 h-12 bg-[#BBB791]/10 flex items-center justify-center mb-6">
                  <WifiOff className="text-[#BBB791]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">True Offline Architecture</h3>
                <p className="text-white/50 leading-relaxed">
                  Disconnect with confidence. Oscillinx downloads the model weights once and runs inference locally using your CPU, GPU, or NPU. Your data never touches the internet.
                </p>
              </div>
              <div className="mt-8 relative h-32 w-full bg-[#111] border border-white/5 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[#BBB791]/20 text-2xl md:text-4xl font-bold tracking-[0.5em] md:tracking-[1em]">
                  OFFLINE
                </div>
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#BBB791] animate-[scan_2s_linear_infinite]"></div>
              </div>
            </TechBorder>

            {/* Feature - Security */}
            <div className="sm:col-span-2 lg:col-span-2 bg-[#0a0a0a] border border-white/5 p-8 flex items-start gap-6 hover:bg-[#0f0f0f] transition-colors relative group">
              <div className="absolute top-4 right-4 text-white/10 group-hover:text-[#BBB791] transition-colors">
                <Shield size={40} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zero-Trust Privacy</h3>
                <p className="text-white/50 text-sm mb-4">
                  Sandboxed environment. No analytics. No history syncing. AES-256 encrypted local storage.
                </p>
                <div className="flex gap-2">
                  <div className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-white/60 font-mono">NO_LOGS</div>
                  <div className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-white/60 font-mono">LOCAL_VAULT</div>
                </div>
              </div>
            </div>

            {/* Feature - Speed */}
            <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
              <Zap className="text-[#BBB791] mb-4" size={24} />
              <div>
                <h3 className="font-bold mb-1">Silicon Optimized</h3>
                <p className="text-xs text-white/50">Metal, CUDA, & AVX2 Acceleration.</p>
              </div>
            </div>

            {/* Feature - Models */}
            <div className="bg-[#0a0a0a] border border-white/5 p-6 flex flex-col justify-between hover:bg-[#0f0f0f] transition-colors">
              <Layers className="text-[#BBB791] mb-4" size={24} />
              <div>
                <h3 className="font-bold mb-1">Multi-Model</h3>
                <p className="text-xs text-white/50">Llama 3, Mistral, Gemma ready.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Desktop Section --- */}
      <section id="desktop" className="py-20 md:py-32 px-6 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">

            <div className="lg:w-1/3 pt-12">
              <div className="text-[#BBB791] font-mono text-sm mb-4 tracking-widest">/// DESKTOP_ENV</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Workstation Command Center</h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                A professional-grade interface for managing local models, organizing contexts, and integrating with your development workflow.
              </p>

              <div className="space-y-4">
                <a href="/downloads/Oscillinx.exe" download className="w-full flex items-center justify-between p-4 border border-white/10 hover:border-[#BBB791] hover:bg-[#BBB791]/5 transition-all group text-left">
                  <div className="flex items-center gap-4">
                    <WindowsLogo className="w-6 h-6 text-white/60 group-hover:text-[#BBB791]" />
                    <div>
                      <div className="font-bold text-sm">Windows Installer</div>
                      <div className="text-[10px] font-mono text-white/40">v0.0.0 | .EXE | x64</div>
                    </div>
                  </div>
                  <Download size={16} className="text-white/30 group-hover:text-[#BBB791]" />
                </a>
                <button
                  onClick={handleComingSoon}
                  className="w-full flex items-center justify-between p-4 border border-white/10 hover:border-[#BBB791] hover:bg-[#BBB791]/5 transition-all group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <AppleLogo className="w-6 h-6 text-white/60 group-hover:text-[#BBB791]" />
                    <div>
                      <div className="font-bold text-sm">macOS Image</div>
                      <div className="text-[10px] font-mono text-white/40">v0.0.0 | .DMG | ARM64/Intel</div>
                    </div>
                  </div>
                  <Download size={16} className="text-white/30 group-hover:text-[#BBB791]" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/3 relative">
              {/* Abstract decorative lines */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-[#BBB791]/20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-[#BBB791]/20"></div>

              {/* Desktop UI Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#BBB791]/10 blur-2xl rounded-full opacity-20 -z-10"></div>
                <div className="border border-white/10 shadow-2xl rounded-lg overflow-hidden bg-[#050505]">
                  {/* Coded Window Header */}
                  <div className="h-9 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 justify-between select-none">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                      <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    </div>
                    <div className="text-[10px] font-mono font-medium text-white/30 tracking-wider">Oscillinx Pro</div>
                  </div>

                  {/* App Content */}
                  <div className="relative">
                    <img
                      src="/assets/app_screenshot.png"
                      alt="Oscillinx Desktop Interface"
                      className="w-full h-auto block"
                    />
                    {/* Overlay to blend the image border if needed */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Mobile Section --- */}
      <section id="mobile" className="py-20 md:py-32 px-6 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div className="relative order-2 md:order-1 flex justify-center">
              <div className="absolute inset-0 bg-[#BBB791]/5 blur-3xl rounded-full"></div>
              <div className="relative w-full max-w-[320px] h-[640px] bg-black border-[1px] border-white/10 rounded-[3rem] shadow-2xl p-2">
                <div className="w-full h-full bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-20"></div>

                  {/* App UI */}
                  <div className="h-full flex flex-col bg-black text-white">
                    {/* Header */}
                    <div className="p-6 pt-12 flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Menu className="text-white mt-1" size={24} strokeWidth={2.5} />
                        <div>
                          <div className="font-bold tracking-wider text-sm">OSCILLINX</div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                            <span className="text-[10px] text-white/50 font-medium">No Model Loaded</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Share2 className="text-white" size={20} />
                        <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full">
                          <span className="text-xs font-medium">Models</span>
                          <ChevronDown size={14} />
                        </div>
                      </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex-1 flex items-center justify-center">
                      <h1 className="text-3xl font-bold tracking-[0.2em] text-[#BBB791]">
                        OSCILLINX
                      </h1>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6 pb-8 space-y-6">
                      {/* Input Area */}
                      <div className="bg-[#1c1c1c] rounded-[2rem] p-4 pr-2">
                        <div className="px-2 mb-8 text-white/50 text-base">Ask anything...</div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 px-2">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                              <Paperclip size={20} className="text-white/70" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                              <Box size={20} className="text-white/70" />
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-[#BBB791] flex items-center justify-center">
                            <CornerDownLeft size={24} className="text-black" />
                          </div>
                        </div>
                      </div>

                      {/* Footer Toggle */}
                      <div className="flex justify-center">
                        <div className="bg-[#1c1c1c] rounded-full p-1 flex items-center border border-white/5">
                          <div className="bg-[#BBB791] text-black px-6 py-2 rounded-full text-xs font-bold font-mono">
                            Offline
                          </div>
                          <div className="text-white/40 px-6 py-2 rounded-full text-xs font-bold font-mono">
                            Online
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="text-[#BBB791] font-mono text-sm mb-4 tracking-widest">/// MOBILE_UNIT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Intelligence Anywhere</h2>
              <p className="text-white/50 mb-10 leading-relaxed">
                A highly optimized runtime for ARM processors. Carry your custom models in your pocket with zero battery drain when idle.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-4 border border-white/10 bg-[#0a0a0a]">
                  <div className="text-2xl font-bold text-white mb-1">1.2GB</div>
                  <div className="text-xs text-white/40 font-mono">APP SIZE (CORE)</div>
                </div>
                <div className="p-4 border border-white/10 bg-[#0a0a0a]">
                  <div className="text-2xl font-bold text-white mb-1">0%</div>
                  <div className="text-xs text-white/40 font-mono">DATA LEAKAGE</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleComingSoon}
                  className="flex items-center gap-3 bg-white text-black px-6 py-3 font-bold hover:bg-[#e0e0e0] transition-colors cursor-pointer"
                >
                  <AppleLogo className="w-5 h-5" />
                  iOS App
                </button>
                <a
                  href="https://drive.google.com/uc?export=download&id=1xZQlAzSUaQ4OzfC4S2AiDM8gmk92bdr4"
                  className="flex items-center gap-3 bg-transparent border border-white/20 text-white px-6 py-3 font-bold hover:bg-white/5 transition-colors"
                >
                  <AndroidLogo className="w-5 h-5" />
                  Android
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Technical Footer --- */}
      <footer className="pt-24 px-6 border-t border-white/10 bg-black text-xs font-mono relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[#BBB791]"></div>
                <span className="text-[#BBB791] tracking-widest uppercase">System Status: Online</span>
              </div>
              <p className="text-white/40 leading-relaxed max-w-sm">
                Decentralized Intelligence Solutions.<br />
                Built for privacy sovereignty and offline-first execution.
              </p>
            </div>

            <div className="md:col-span-8 flex flex-wrap justify-between gap-12">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Platform</h4>
                <ul className="space-y-2 text-white/50">
                  <li onClick={() => scrollToSection('desktop')} className="hover:text-[#BBB791] cursor-pointer">Desktop (x64/ARM)</li>
                  <li onClick={() => scrollToSection('mobile')} className="hover:text-[#BBB791] cursor-pointer">Mobile (iOS/Android)</li>
                  <li onClick={handleComingSoon} className="hover:text-[#BBB791] cursor-pointer">CLI Tools</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Resources</h4>
                <ul className="space-y-2 text-white/50">
                  <li onClick={handleComingSoon} className="hover:text-[#BBB791] cursor-pointer">Model Library</li>
                  <li onClick={handleComingSoon} className="hover:text-[#BBB791] cursor-pointer">Documentation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Legal</h4>
                <ul className="space-y-2 text-white/50">
                  <li onClick={handleComingSoon} className="hover:text-[#BBB791] cursor-pointer">Privacy Policy</li>
                  <li onClick={handleComingSoon} className="hover:text-[#BBB791] cursor-pointer">Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-white/30">
            <div className="flex gap-6 uppercase tracking-wider">
              <button onClick={handleComingSoon} className="hover:text-white transition-colors cursor-pointer">Privacy</button>
              <button onClick={handleComingSoon} className="hover:text-white transition-colors cursor-pointer">Terms</button>
              <button onClick={handleComingSoon} className="hover:text-white transition-colors cursor-pointer">Security</button>
            </div>
            <div>© 2026 OSCILLINX INC.</div>
          </div>
        </div>

        {/* Big Footer Text */}
        <div className="w-full text-center border-t border-white/10 pt-4 pb-2">
          <GlitchText
            text="OSCILLINX_"
            className="text-[18vw] leading-none font-bold text-transparent bg-clip-text bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.1)_0px,rgba(255,255,255,0.1)_2px,transparent_2px,transparent_4px)] tracking-tighter select-none cursor-default"
          />
        </div>
      </footer>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center px-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col gap-8 text-2xl font-bold font-mono text-white/80">
          <button onClick={() => scrollToSection('features')} className="flex items-center gap-4 hover:text-[#BBB791] transition-colors group">
            <span className="text-[#BBB791] text-sm opacity-50 group-hover:opacity-100">01</span> FEATURES
          </button>
          <button onClick={() => scrollToSection('desktop')} className="flex items-center gap-4 hover:text-[#BBB791] transition-colors group">
            <span className="text-[#BBB791] text-sm opacity-50 group-hover:opacity-100">02</span> DESKTOP
          </button>
          <button onClick={() => scrollToSection('mobile')} className="flex items-center gap-4 hover:text-[#BBB791] transition-colors group">
            <span className="text-[#BBB791] text-sm opacity-50 group-hover:opacity-100">03</span> MOBILE
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <a
            href="https://drive.google.com/uc?export=download&id=1xZQlAzSUaQ4OzfC4S2AiDM8gmk92bdr4"
            className="w-full flex items-center justify-between p-4 bg-[#BBB791] text-black font-medium font-mono text-sm tracking-wide hover:bg-[#D4D0AA] transition-all group"
          >
            <span className="flex items-center gap-2">
              <Download size={16} />
              DOWNLOAD v1.0.0
            </span>
          </a>
        </div>

        <div className="absolute bottom-12 left-0 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">System Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OscillinxApp;