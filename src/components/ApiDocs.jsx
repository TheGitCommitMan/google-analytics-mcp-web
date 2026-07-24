import React from 'react';
import { BookOpen, ShieldCheck, Terminal, Server, Key, Cpu, ExternalLink, Code2 } from 'lucide-react';

export default function ApiDocs() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Title */}
      <div className="border-b border-slate-800 pb-4">
        <h2 className="font-heading text-2xl font-bold text-white flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-amber-400" />
          <span>Google Analytics MCP Architecture & API Guide</span>
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Technical specifications for connecting Model Context Protocol clients with Google Analytics APIs.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-white">Google Analytics Admin API v1</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Provides administrative access for querying accounts, property details, data streams, custom dimension metadata, and Google Ads link configurations.
          </p>
          <div className="text-[11px] font-mono text-amber-300">
            Scope: https://www.googleapis.com/auth/analytics.readonly
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-lg text-white">Google Analytics Data API v1</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Delivers reporting data including standard core reports, conversion funnel analysis, custom metric reports, and streaming realtime active user reports.
          </p>
          <div className="text-[11px] font-mono text-emerald-300">
            Scope: https://www.googleapis.com/auth/analytics.readonly
          </div>
        </div>
      </div>

      {/* Protocol Specs Section */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="font-heading font-bold text-lg text-white flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-amber-400" />
          <span>MCP JSON-RPC Protocol standard</span>
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          The Model Context Protocol (MCP) communicates over standard input/output (stdio) using JSON-RPC 2.0 messages. Below is the specification for listing tools and calling tool endpoints.
        </p>

        <div className="space-y-4">
          <div>
            <div className="text-xs font-mono text-slate-400 mb-1">Requesting Available Tools (<code className="text-amber-300">tools/list</code>):</div>
            <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 overflow-x-auto">
{`{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list"
}`}
            </pre>
          </div>

          <div>
            <div className="text-xs font-mono text-slate-400 mb-1">Invoking a Report Tool (<code className="text-amber-300">tools/call</code>):</div>
            <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
{`{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "run_report",
    "arguments": {
      "property_id": "properties/310492851",
      "date_range": "30daysAgo - today",
      "dimensions": ["sessionDefaultChannelGroup", "country"],
      "metrics": ["activeUsers", "sessions", "conversions"]
    }
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Upstream links */}
      <div className="flex items-center justify-between glass-panel p-4 rounded-xl border border-slate-800">
        <div className="flex items-center space-x-3">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
          <span className="text-xs text-slate-300">Official Open Source Repository on GitHub</span>
        </div>
        <a
          href="https://github.com/googleanalytics/google-analytics-mcp"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-xs font-mono text-amber-400 hover:underline"
        >
          <span>googleanalytics/google-analytics-mcp</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
