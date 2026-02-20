import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl">
          CYBERDUDEBIVASH <span className="text-blue-500">APE</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-[600px] text-center sm:text-left">
          The Individual Unicorn Engine is now <span className="text-green-400 font-mono">ONLINE</span>. 
          Powered by Autonomous Platform Engineering and Self-Healing Infrastructure.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-12 px-8 font-bold"
            href="/dashboard"
            target="_blank"
          >
            Launch Dashboard
          </a>
          <a
            className="rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-12 px-8"
            href="#docs"
          >
            APE Monitor Status: ACTIVE
          </a>
        </div>
      </main>
      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 text-xs uppercase tracking-widest">
        © 2026 CYBERDUDEBIVASH. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
