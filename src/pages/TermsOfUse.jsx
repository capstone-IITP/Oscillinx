import React from 'react';

export const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12">
                    <div className="text-[#BBB791] font-mono text-sm mb-4 tracking-widest">/// LEGAL_Protocol_02</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Use</h1>
                    <p className="text-white/50 text-xl font-light">
                        Last Updated: January 1, 2026
                    </p>
                </div>

                <div className="space-y-12 text-white/70 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, or using Oscillinx ("the Software"), you agree to be bound by these Terms. If you do not agree, do not use the Software.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Permitted Use</h2>
                        <p>
                            You are granted a revocable, non-exclusive, non-transferable, limited license to download, install, and use the Software strictly in accordance with these Terms.
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>You may use the Software for personal or commercial purposes.</li>
                            <li>You are responsible for the content you generate.</li>
                            <li>You must comply with the licenses of any third-party models (e.g., Llama 3 Community License) you load into the Software.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Restrictions</h2>
                        <p>
                            You agree not to, and you will not permit others to:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Reverse engineer, decompile, or disassemble the Software.</li>
                            <li>Use the Software to generate illegal content or content that promotes harm.</li>
                            <li>Redistribute the binary without explicit permission.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer of Warranties</h2>
                        <p>
                            The Software is provided "AS IS", without warranty of any kind. The output of Large Language Models (LLMs) can be unpredictable and inaccurate. Oscillinx Inc. is not responsible for any actions taken based on generated output.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/10">
                        <p className="text-sm font-mono text-white/40">
                            Oscillinx Inc. // San Francisco, CA
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
