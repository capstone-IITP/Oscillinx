export const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12">
                    <div className="text-[#BBB791] font-mono text-sm mb-4 tracking-widest">/// LEGAL_Protocol_01</div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-white/50 text-xl font-light">
                        Effective Date: January 1, 2026
                    </p>
                </div>

                <div className="space-y-12 text-white/70 leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. The Zero-Data Philosophy</h2>
                        <p>
                            Oscillinx is architected on a fundamental premise: <strong>We do not want your data.</strong> Our software runs entirely on your local hardware ("Edge Intelligence"). Once the application binary and model weights are downloaded to your device, no data leaves your machine.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Local Inference</h2>
                        <p>
                            All processing, token generation, and context embedding input occurs in your local RAM/VRAM. We do not maintain servers to process your prompts. There is no "cloud" component to our inference engine.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Telemetry & Analytics</h2>
                        <p>
                            Oscillinx contains <strong>zero analytics trackers</strong>. We do not track:
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>IP Addresses</li>
                            <li>Device Identifiers</li>
                            <li>Usage Patterns</li>
                            <li>Prompt Contents</li>
                        </ul>
                        <p className="mt-4">
                            The only network requests the application makes are to check for software updates (which can be disabled) and to download models explicitly selected by you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Model Weights</h2>
                        <p>
                            Models downloaded through our library are cryptographically signed to ensure integrity. We do not modify models to include surveillance capabilities.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/10">
                        <p className="text-sm font-mono text-white/40">
                            Contact: <a href="mailto:[EMAIL_ADDRESS]">official.oscillinx@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
