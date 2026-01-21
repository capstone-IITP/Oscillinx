import React from 'react';
import { Download, Star, Cpu, HardDrive } from 'lucide-react';
import { Button, TechBorder } from '../components/UI';

const models = [
    {
        name: "ChatGPT 5 Q8",
        size: "531 MB",
        quantization: "Q8_0",
        downloads: "12M+",
        desc: "Fast and lightweight chat model Q8 quantized for balanced performance. Perfect for quick experiments and casual conversations.",
        tags: ["Chat", "Lightweight"]
    },
    {
        name: "Llama 3.2 1B",
        size: "808 MB",
        quantization: "Q4_K_M",
        downloads: "5.5M",
        desc: "Compact and lightning-fast. Perfect for quick responses and everyday tasks on mobile devices.",
        tags: ["Mobile", "Fast"]
    },
    {
        name: "Phi 4 Mini",
        size: "2.5 GB",
        quantization: "Q4_K_M",
        downloads: "3.2M",
        desc: "Microsoft's latest compact model. Exceptional at coding, math, and logical reasoning tasks.",
        tags: ["Coding", "Math"]
    },
    {
        name: "Gemma 3 4B",
        size: "2.5 GB",
        quantization: "Q4_K_M",
        downloads: "1.9M",
        desc: "Google's latest Gemma 3 model with advanced reasoning capabilities. Optimized for efficiency with superior performance on coding, math, and conversational tasks.",
        tags: ["Reasoning", "Google"]
    },
    {
        name: "Qwen 2.5 3B",
        size: "2.1 GB",
        quantization: "Q4_K_M",
        downloads: "1.2M",
        desc: "Advanced 3B model by Alibaba with high accuracy and multilingual support. Best balance of quality and speed for production apps.",
        tags: ["Multilingual", "Balanced"]
    },
    {
        name: "Qwen 2.5 7B",
        size: "4.7 GB",
        quantization: "Q4_K_M",
        downloads: "850K",
        desc: "Exceptional at reasoning and coding tasks. Best choice for complex problem solving.",
        tags: ["Complex", "Reasoning"]
    }
];

export const ModelLibrary = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="mb-12">
                    <div className="text-[#BBB791] font-mono text-sm mb-4 tracking-widest">/// REPOSITORY</div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Model Library</h1>
                    <p className="text-white/50 text-xl max-w-2xl leading-relaxed">
                        Curated, quantized, and optimized models supported by Oscillinx.
                        <br />
                        <span className="text-sm font-mono text-white/30 mt-2 block">VERIFIED HASH · MALWARE FREE · LICENSE COMPLIANT</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {models.map((model, index) => (
                        <TechBorder key={index} className="bg-[#0a0a0a] border border-white/5 p-6 hover:bg-[#111] transition-colors flex flex-col justify-between h-full">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-2">
                                        {model.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-white/60">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1 text-[#BBB791] text-xs font-mono">
                                        <Star size={12} fill="currentColor" />
                                        {model.downloads}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                                    {model.desc}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4 text-xs font-mono text-white/40 border-t border-white/5 pt-4">
                                    <div className="flex items-center gap-2">
                                        <HardDrive size={12} />
                                        {model.size}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Cpu size={12} />
                                        {model.quantization}
                                    </div>
                                </div>
                            </div>
                        </TechBorder>
                    ))}
                </div>
            </div>
        </div>
    );
};
