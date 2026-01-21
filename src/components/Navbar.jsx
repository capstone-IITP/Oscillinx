import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            // Give React a moment to render the Home page before scrolling
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 decoration-none">
                    <img src="/logo.png" alt="Oscillinx Logo" className="h-10 w-auto object-contain font-bold" />
                    <span className="text-xl font-bold tracking-tighter text-white font-mono">OSCILLINX_</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10 text-xs font-mono tracking-widest text-white/60">
                    <button onClick={() => scrollToSection('features')} className="hover:text-[#BBB791] transition-colors uppercase cursor-pointer">[Features]</button>
                    <button onClick={() => scrollToSection('desktop')} className="hover:text-[#BBB791] transition-colors uppercase cursor-pointer">[Desktop]</button>
                    <button onClick={() => scrollToSection('mobile')} className="hover:text-[#BBB791] transition-colors uppercase cursor-pointer">[Mobile]</button>
                    <button onClick={() => scrollToSection('mobile')} className="border border-[#BBB791] text-[#BBB791] px-4 py-2 hover:bg-[#BBB791] hover:text-black transition-colors uppercase cursor-pointer">
                        Download v1.0.0
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 flex flex-col justify-center px-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col gap-8 text-2xl font-bold font-mono text-white/80">
                    <button onClick={() => scrollToSection('features')} className="flex items-center gap-4 hover:text-[#BBB791] transition-colors group text-left w-full cursor-pointer">
                        <span className="text-[#BBB791] text-sm opacity-50 group-hover:opacity-100">01</span> FEATURES
                    </button>
                    <button onClick={() => scrollToSection('desktop')} className="flex items-center gap-4 hover:text-[#BBB791] transition-colors group text-left w-full cursor-pointer">
                        <span className="text-[#BBB791] text-sm opacity-50 group-hover:opacity-100">02</span> DESKTOP
                    </button>
                    <button onClick={() => scrollToSection('mobile')} className="flex items-center gap-4 hover:text-[#BBB791] transition-colors group text-left w-full cursor-pointer">
                        <span className="text-[#BBB791] text-sm opacity-50 group-hover:opacity-100">03</span> MOBILE
                    </button>
                </div>
            </div>
        </nav>
    );
};
