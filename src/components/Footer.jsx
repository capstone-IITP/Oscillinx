import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { GlitchText } from './UI';

export const Footer = ({ onComingSoon }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
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
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Resources</h4>
                            <ul className="space-y-2 text-white/50">
                                <li><Link to="/models" className="hover:text-[#BBB791] cursor-pointer block">Model Library</Link></li>
                                <li><Link to="/docs" className="hover:text-[#BBB791] cursor-pointer block">Documentation</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Legal</h4>
                            <ul className="space-y-2 text-white/50">
                                <li><Link to="/privacy" className="hover:text-[#BBB791] cursor-pointer block">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="hover:text-[#BBB791] cursor-pointer block">Terms of Use</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 pb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-white/30">
                    <div className="flex gap-6 uppercase tracking-wider">
                        <Link to="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
                        <Link to="/security" onClick={onComingSoon} className="hover:text-white transition-colors cursor-pointer">Security</Link>
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
    );
};
