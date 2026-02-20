import React from 'react';

const PRODUCTS = [
  { name: "TrustGov Sentinel", price: "$49", url: "https://gum.new/gum/cmkti44bu001q04kzbb3d7cn8" },
  { name: "APE Enterprise License", price: "$199", url: "https://gum.new/gum/cml6zequ1001r04ikb9e683f3" },
  { name: "Threat Intel API Access", price: "$99", url: "https://gum.new/gum/cml8cu8je000604jv8rkj1l8z" }
];

export default function UnicornConsole() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {/* GUMROAD PRODUCT FEED */}
      <div className="bg-[#111] border border-blue-900/30 rounded-xl p-6">
        <h3 className="text-blue-400 font-bold uppercase tracking-tighter mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Premium Ecosystem Assets
        </h3>
        <div className="space-y-4">
          {PRODUCTS.map((prod, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-transparent hover:border-blue-500/30 group">
              <div>
                <p className="font-bold text-sm">{prod.name}</p>
                <p className="text-xs text-gray-500">{prod.price}</p>
              </div>
              <a href={prod.url} target="_blank" className="bg-blue-600 px-4 py-1.5 rounded text-xs font-bold group-hover:bg-blue-500">Deploy</a>
            </div>
          ))}
        </div>
      </div>

      {/* LIVE THREAT INTEL STREAM */}
      <div className="bg-[#111] border border-red-900/30 rounded-xl p-6">
        <h3 className="text-red-500 font-bold uppercase tracking-tighter mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          Live Threat Intel Feed
        </h3>
        <div className="font-mono text-[11px] space-y-2 opacity-80 h-40 overflow-hidden">
          <p className="text-red-400">[CRITICAL] Zero-day detected in AI-Agent Auth layer.</p>
          <p className="text-gray-500">[INFO] Scanning global nodes for CVE-2026-X...</p>
          <p className="text-green-400">[SECURE] CYBERDUDEBIVASH® Sentinel patched 4k nodes.</p>
          <p className="text-blue-400">[INTEL] New malware variant "APE-Breaker" analyzed.</p>
          <a href="https://intel.cyberdudebivash.com/" className="block pt-4 text-blue-500 underline uppercase tracking-widest text-[10px]">Access Full Intel Platform →</a>
        </div>
      </div>
    </div>
  );
}