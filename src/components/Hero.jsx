import React, { useState } from 'react';
import { Copy, Check, Terminal, ShieldCheck, Zap, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenSetup, setActiveTab }) {
  const [copied, setCopied] = useState(false);
  const installCmd = "pipx run analytics-mcp";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 border-b border-slate-800/60 py-10 sm:py-16">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Google Analytics Model Context Protocol (MCP)</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 font-semibold">Python 3.10+</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect AI Assistants directly to <span className="gradient-text">Google Analytics</span>
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Run reports, analyze real-time streaming activity, inspect funnel conversion rates, and retrieve account metadata seamlessly using Gemini CLI, Claude Code, Cursor, or VS Code.
          </p>

          {/* Command Copy Box & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            
            {/* Pipx Copy Box */}
            <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-2.5 w-full sm:w-auto font-mono text-sm shadow-inner">
              <Terminal className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-slate-400">$</span>
              <span className="text-amber-200 font-semibold">{installCmd}</span>
              <button
                onClick={handleCopy}
                className="ml-2 p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="Copy install command"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Setup Modal Trigger */}
            <button
              onClick={onOpenSetup}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all transform hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Interactive Config Generator</span>
            </button>

            {/* Playground Button */}
            <button
              onClick={() => setActiveTab('playground')}
              className="w-full sm:w-auto flex items-center justify-center space-x-1.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-200 hover:text-white font-medium transition-colors"
            >
              <span>Test Tools Live</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>

          </div>

          {/* Quick Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-left">
            <div className="glass-panel p-3.5 rounded-xl border-slate-800/80">
              <div className="text-xs text-amber-400 font-mono font-medium">7 MCP Tools</div>
              <div className="text-sm font-semibold text-slate-200">Admin & Data APIs</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl border-slate-800/80">
              <div className="text-xs text-emerald-400 font-mono font-medium">Authentication</div>
              <div className="text-sm font-semibold text-slate-200">OAuth / gcloud ADC</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl border-slate-800/80">
              <div className="text-xs text-blue-400 font-mono font-medium">LLM Native</div>
              <div className="text-sm font-semibold text-slate-200">Gemini & Claude</div>
            </div>
            <div className="glass-panel p-3.5 rounded-xl border-slate-800/80">
              <div className="text-xs text-purple-400 font-mono font-medium">Realtime API</div>
              <div className="text-sm font-semibold text-slate-200">Live Traffic Pulse</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
