import React, { useState, useEffect } from 'react';
import { Activity, Radio, Globe2, Monitor, Smartphone, RefreshCw, Zap, TrendingUp } from 'lucide-react';
import { MOCK_REALTIME_DATA } from '../data/mockData';

export default function RealtimeStream() {
  const [activeUsers, setActiveUsers] = useState(MOCK_REALTIME_DATA.activeUsersLast30Min);
  const [pulse, setPulse] = useState(false);

  // Simulate periodic user count changes
  useEffect(() => {
    const interval = setInterval(() => {
      const delta = Math.floor(Math.random() * 9) - 4; // -4 to +4
      setActiveUsers(prev => Math.max(120, prev + delta));
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <h2 className="font-heading text-xl font-bold text-white">Live Streaming Realtime Monitor</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Simulating live Data API <code className="text-amber-300">run_realtime_report</code> event stream for the last 30 minutes.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-right">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Active Right Now</div>
            <div className={`font-mono text-2xl font-extrabold transition-all duration-300 ${pulse ? 'text-emerald-300 scale-105' : 'text-emerald-400'}`}>
              {activeUsers}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Top Pages */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-heading font-bold text-sm text-slate-100 flex items-center space-x-2">
              <Monitor className="w-4 h-4 text-amber-400" />
              <span>Active Page Paths</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-500">30 min</span>
          </div>

          <div className="space-y-2.5">
            {MOCK_REALTIME_DATA.topActivePages.map((page, idx) => (
              <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-mono text-amber-200 font-medium">{page.pagePath}</div>
                  <div className="text-[10px] text-slate-500">{page.device}</div>
                </div>
                <span className="font-mono text-emerald-400 font-bold">{page.activeUsers} users</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Locations */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-heading font-bold text-sm text-slate-100 flex items-center space-x-2">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>Geographic Distribution</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-500">Top Countries</span>
          </div>

          <div className="space-y-2.5">
            {MOCK_REALTIME_DATA.topCountries.map((c, idx) => (
              <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-base">{c.flag}</span>
                  <span className="font-medium text-slate-200">{c.country}</span>
                </div>
                <span className="font-mono text-amber-300 font-bold">{c.activeUsers}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Realtime Event Stream */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-heading font-bold text-sm text-slate-100 flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-400 animate-bounce" />
              <span>Event Stream Ticker</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-500">Count / 30m</span>
          </div>

          <div className="space-y-2.5">
            {MOCK_REALTIME_DATA.realtimeEvents.map((evt, idx) => (
              <div key={idx} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-bold">{evt.eventName}</span>
                <span className="text-slate-300">{evt.countIn30Min.toLocaleString()} ops</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
