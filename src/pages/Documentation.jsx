import React from 'react';
import { Book, Code, Terminal, ChevronRight } from 'lucide-react';

export const Documentation = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="container mx-auto grid lg:grid-cols-12 gap-12">

                {/* Sidebar */}
                <div className="lg:col-span-3 hidden lg:block border-r border-white/10 pr-6">
                    <div className="sticky top-32 space-y-8">
                        <div>
                            <h4 className="text-[#BBB791] font-mono text-xs tracking-widest mb-4">GETTING STARTED</h4>
                            <ul className="space-y-3 text-sm text-white/50">
                                <li className="text-white font-bold cursor-pointer">Installation</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Quick Start</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Architecture</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#BBB791] font-mono text-xs tracking-widest mb-4">CORE CONCEPTS</h4>
                            <ul className="space-y-3 text-sm text-white/50">
                                <li className="hover:text-white cursor-pointer transition-colors">Model Management</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Context Window</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Inference Engine</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#BBB791] font-mono text-xs tracking-widest mb-4">API REFERENCE</h4>
                            <ul className="space-y-3 text-sm text-white/50">
                                <li className="hover:text-white cursor-pointer transition-colors">Python SDK</li>
                                <li className="hover:text-white cursor-pointer transition-colors">REST API</li>
                                <li className="hover:text-white cursor-pointer transition-colors">CLI Commands</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-9 space-y-12">
                    <div>
                        <div className="text-[#BBB791] font-mono text-sm mb-4 tracking-widest">/// DOCS_V1.0</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Installation</h1>
                        <p className="text-xl text-white/50 leading-relaxed">
                            Get up and running with Oscillinx on your local machine.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Prerequisites</h2>
                        <ul className="space-y-2 text-white/60 list-disc pl-5">
                            <li>macOS 12.0+ (Apple Silicon) or Windows 10/11 (x64)</li>
                            <li>Minimum 8GB RAM (16GB Recommended)</li>
                            <li>20GB Free Disk Space</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Quick Install (CLI)</h2>
                        <div className="bg-[#111] border border-white/10 rounded-md p-4 font-mono text-sm overflow-x-auto">
                            <div className="flex gap-2 text-white/40 mb-2 border-b border-white/5 pb-2">
                                <span className="text-green-500">$</span> shell
                            </div>
                            <code className="text-[#BBB791]">curl -sL https://oscillinx.ai/install.sh | bash</code>
                        </div>
                        <p className="text-white/50 text-sm">
                            This command downloads the latest binary and adds it to your PATH.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Manual Setup</h2>
                        <p className="text-white/60 leading-relaxed">
                            Download the installer for your platform from the Downloads page. Run the installer and follow the on-screen instructions. Oscillinx will automatically detect your hardware acceleration capabilities (Metal, CUDA, or ROCm).
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};
