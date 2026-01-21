import React, { useState } from 'react';
import { Terminal, Copy, Check, ChevronRight, Server, Cpu, Code } from 'lucide-react';
import { Button, TechBorder } from '../components/UI';

const CommandBlock = ({ command, label }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#050505] border border-white/10 rounded-md overflow-hidden mb-6">
            {label && <div className="bg-white/5 px-4 py-2 text-[10px] font-mono text-white/40 uppercase tracking-widest border-b border-white/5">{label}</div>}
            <div className="p-4 flex items-center justify-between group">
                <code className="font-mono text-sm text-[#BBB791] flex-1 mr-4">
                    <span className="text-white/30 select-none">$ </span>
                    {command}
                </code>
                <button
                    onClick={handleCopy}
                    className="text-white/20 hover:text-white transition-colors cursor-pointer"
                    title="Copy to clipboard"
                >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
            </div>
        </div>
    );
};

export const CLITools = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-mono">
            <div className="container mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-16 border-b border-white/10 pb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <Terminal className="text-[#BBB791]" size={24} />
                        <span className="text-white/40 text-xs tracking-widest uppercase">Developer Interface</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
                        Headless Engine
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed">
                        Run Oscillinx models directly from your terminal. Integrate local intelligence into your workflow with zero overhead.
                    </p>
                </div>

                {/* Quick Install */}
                <section className="mb-20">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <ChevronRight className="text-[#BBB791]" />
                        Quick Install
                    </h2>
                    <CommandBlock
                        label="BASH / ZSH (macOS & Linux)"
                        command="curl -fsSL https://oscillinx.ai/install.sh | sh"
                    />
                    <CommandBlock
                        label="PowerShell (Windows)"
                        command="iwr https://oscillinx.ai/install.ps1 -useb | iex"
                    />
                </section>

                {/* Core Commands Grid */}
                <section className="mb-20">
                    <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                        <ChevronRight className="text-[#BBB791]" />
                        Core Commands
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <TechBorder className="p-6 bg-[#0a0a0a] border border-white/5 hover:bg-[#111] transition-colors">
                            <div className="text-[#BBB791] font-bold mb-2">oscillinx run</div>
                            <p className="text-white/40 text-sm mb-4 font-sans">Start an interactive chat session with the default model.</p>
                            <div className="bg-black p-3 rounded text-xs text-white/60">
                                $ oscillinx run llama-3
                            </div>
                        </TechBorder>

                        <TechBorder className="p-6 bg-[#0a0a0a] border border-white/5 hover:bg-[#111] transition-colors">
                            <div className="text-[#BBB791] font-bold mb-2">oscillinx pull</div>
                            <p className="text-white/40 text-sm mb-4 font-sans">Download a model from the registry to local storage.</p>
                            <div className="bg-black p-3 rounded text-xs text-white/60">
                                $ oscillinx pull mistral-7b
                            </div>
                        </TechBorder>

                        <TechBorder className="p-6 bg-[#0a0a0a] border border-white/5 hover:bg-[#111] transition-colors">
                            <div className="text-[#BBB791] font-bold mb-2">oscillinx serve</div>
                            <p className="text-white/40 text-sm mb-4 font-sans">Start the OpenAI-compatible API server.</p>
                            <div className="bg-black p-3 rounded text-xs text-white/60">
                                $ oscillinx serve --port 11434
                            </div>
                        </TechBorder>

                        <TechBorder className="p-6 bg-[#0a0a0a] border border-white/5 hover:bg-[#111] transition-colors">
                            <div className="text-[#BBB791] font-bold mb-2">oscillinx list</div>
                            <p className="text-white/40 text-sm mb-4 font-sans">List all downloaded models and their sizes.</p>
                            <div className="bg-black p-3 rounded text-xs text-white/60">
                                $ oscillinx list
                            </div>
                        </TechBorder>
                    </div>
                </section>

                {/* API Integration */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                        <ChevronRight className="text-[#BBB791]" />
                        API Integration
                    </h2>
                    <p className="text-white/50 mb-6 font-sans">
                        Oscillinx provides a drop-in replacement for the OpenAI API. Point your existing client to localhost.
                    </p>

                    <div className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/5">
                            <div className="flex items-center gap-2 text-xs text-white/60">
                                <Code size={14} />
                                <span>python_client.py</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                            </div>
                        </div>
                        <div className="p-6 overflow-x-auto">
                            <pre className="text-xs md:text-sm leading-relaxed text-white/70">
                                {`from openai import OpenAI

client = OpenAI(
    base_url='http://localhost:11434/v1',
    api_key='oscillinx-key' # API key is ignored for local use
)

response = client.chat.completions.create(
    model="llama-3",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing in one sentence."}
    ]
)

print(response.choices[0].message.content)`}
                            </pre>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
