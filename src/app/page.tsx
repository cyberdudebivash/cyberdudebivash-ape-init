import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Navigation Header */}
      <nav className="border-b border-white/10 p-4 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-xs italic">CDB</div>
          <span className="font-bold tracking-tighter text-xl">CYBERDUDEBIVASH®</span>
        </div>
        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest text-gray-400">
          <a href="https://www.cyberdudebivash.com" className="hover:text-blue-500 transition-colors">Portal</a>
          <a href="https://github.com/cyberdudebivash" className="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="https://cyberdudebivash.github.io/CYBERDUDEBIVASH-ECOSYSTEM" className="hover:text-blue-500 transition-colors">Ecosystem</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center pt-24 pb-20 px-6 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest animate-pulse">
          Enterprise-Ready AI Infrastructure
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">UNICORN</span> ENGINE
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          The CYBERDUDEBIVASH® APE (Autonomous Platform Engineer) delivers zero-trust, production-grade automation for solo founders. Deploy, scale, and heal with the authority of a global cybersecurity leader.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="/dashboard" className="h-14 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Launch System Console
          </a>
          <a href="https://cyberdudebivash.gumroad.com" className="h-14 px-10 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg flex items-center justify-center font-bold transition-all">
            Get Premium License
          </a>
        </div>

        {/* Brand Proof Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-tighter">Threat Intel</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-tighter">AI-Driven R&D</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-tighter">Zero-Trust Architecture</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-tighter">Enterprise Services</span>
          </div>
        </div>
      </main>

      {/* Authority Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-2">CYBERDUDEBIVASH PVT LTD</p>
            <p className="text-gray-500 text-sm">Bhubaneswar, Odisha, India | © 2026</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="https://intel.cyberdudebivash.com/" className="hover:text-white">AI Threat Intel</a>
            <a href="https://cyberdudebivash.github.io/mcp-server/" className="hover:text-white">MCP Server</a>
            <a href="mailto:bivash@cyberdudebivash.com" className="hover:text-white">Collaboration</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
