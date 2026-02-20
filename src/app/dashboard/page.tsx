export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8 font-mono">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center border-b border-gray-800 pb-6 mb-8">
          <h1 className="text-2xl font-bold text-blue-500 underline uppercase tracking-tighter">
            CyberDudeBivash APE System Console
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-500 uppercase">System Optimal</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#141414] p-6 rounded-lg border border-gray-800">
            <p className="text-gray-500 text-xs uppercase mb-2">Uptime Status</p>
            <p className="text-3xl font-bold">99.99%</p>
          </div>
          <div className="bg-[#141414] p-6 rounded-lg border border-gray-800">
            <p className="text-gray-500 text-xs uppercase mb-2">Self-Healing Cycles</p>
            <p className="text-3xl font-bold">14 Active</p>
          </div>
          <div className="bg-[#141414] p-6 rounded-lg border border-gray-800">
            <p className="text-gray-500 text-xs uppercase mb-2">Auth Verification</p>
            <p className="text-3xl font-bold text-blue-400">RSA-Signed</p>
          </div>
        </div>

        <div className="bg-black border border-gray-800 rounded-lg p-4 h-64 overflow-hidden relative">
            <div className="absolute top-2 left-4 text-[10px] text-gray-600 uppercase">Live APE-Monitor Logs</div>
            <div className="mt-6 space-y-2 text-sm text-green-400/80">
                <p>[{new Date().toLocaleTimeString()}] 🛡️ cyberdudebivash-ape-monitor: Heartbeat verified.</p>
                <p>[{new Date().toLocaleTimeString()}] 🔍 Scanning cyberdudebivash-app for 500 errors...</p>
                <p>[{new Date().toLocaleTimeString()}] ✅ No anomalies detected in production cluster.</p>
                <p className="animate-pulse">_</p>
            </div>
        </div>
      </div>
    </div>
  );
}