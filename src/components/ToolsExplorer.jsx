import React, { useState } from 'react';
import { Play, Code, LayoutGrid, CheckCircle2, ChevronRight, RefreshCw, BarChart2, Layers, Filter, Shield } from 'lucide-react';
import {
  MCP_TOOLS_LIST,
  MOCK_ACCOUNTS,
  MOCK_ADS_LINKS,
  MOCK_CUSTOM_DIMENSIONS_METRICS,
  MOCK_REPORT_DATA,
  MOCK_FUNNEL_DATA,
  MOCK_REALTIME_DATA
} from '../data/mockData';

export default function ToolsExplorer() {
  const [selectedToolId, setSelectedToolId] = useState('get_account_summaries');
  const [selectedProperty, setSelectedProperty] = useState('310492851');
  const [activeTab, setActiveTab] = useState('visual'); // visual, json
  const [isLoading, setIsLoading] = useState(false);
  const [executedCount, setExecutedCount] = useState(1);

  const selectedTool = MCP_TOOLS_LIST.find(t => t.id === selectedToolId) || MCP_TOOLS_LIST[0];

  const handleRunTool = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setExecutedCount(prev => prev + 1);
    }, 400);
  };

  // Generate simulated JSON RPC payload
  const jsonRpcRequest = {
    jsonrpc: "2.0",
    id: executedCount,
    method: "tools/call",
    params: {
      name: selectedTool.name,
      arguments: selectedTool.params.length > 0 ? { property_id: `properties/${selectedProperty}` } : {}
    }
  };

  const getToolResponse = () => {
    switch (selectedToolId) {
      case 'get_account_summaries':
        return MOCK_ACCOUNTS;
      case 'get_property_details':
        return MOCK_ACCOUNTS[0].properties[0];
      case 'list_google_ads_links':
        return MOCK_ADS_LINKS;
      case 'run_report':
        return MOCK_REPORT_DATA;
      case 'run_funnel_report':
        return MOCK_FUNNEL_DATA;
      case 'get_custom_dimensions_and_metrics':
        return MOCK_CUSTOM_DIMENSIONS_METRICS;
      case 'run_realtime_report':
        return MOCK_REALTIME_DATA;
      default:
        return MOCK_ACCOUNTS;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div>
          <h2 className="font-heading text-2xl font-bold text-white flex items-center space-x-2">
            <LayoutGrid className="w-6 h-6 text-amber-400" />
            <span>Interactive GA4 MCP Tool Playground</span>
          </h2>
          <p className="text-sm text-slate-400">
            Execute tools directly against the official Google Analytics Admin API v1beta & Data API v1beta specification.
          </p>
        </div>

        {/* Global Property Selector & Custom Input */}
        <div className="flex flex-wrap items-center gap-2 glass-panel p-2 rounded-xl border border-slate-800">
          <Filter className="w-4 h-4 text-amber-400 ml-1" />
          <span className="text-xs text-slate-400 font-medium">Target GA4 Property:</span>
          <select
            value={selectedProperty}
            onChange={(e) => setSelectedProperty(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-amber-300 font-mono text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
          >
            <option value="213025502">properties/213025502 (Google Merchandise Store GA4)</option>
            <option value="213029999">properties/213029999 (Google Store Mobile App)</option>
            <option value="245810239">properties/245810239 (Flood-it! Gaming Stream)</option>
            <option value="custom">Custom Property ID...</option>
          </select>

          {selectedProperty === 'custom' && (
            <input
              type="text"
              placeholder="e.g. 310492851"
              onChange={(e) => setSelectedProperty(e.target.value || '310492851')}
              className="bg-slate-950 border border-amber-500/50 text-amber-200 font-mono text-xs rounded-lg px-2.5 py-1.5 focus:outline-none w-32"
            />
          )}
        </div>
      </div>

      {/* Main Grid: Tools List sidebar + Output Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar: Tool Selector */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider px-1">
            Available MCP Tools ({MCP_TOOLS_LIST.length})
          </div>

          <div className="space-y-2">
            {MCP_TOOLS_LIST.map((tool) => {
              const isSelected = selectedToolId === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 glass-panel ${
                    isSelected
                      ? 'bg-amber-500/10 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">{tool.description}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Workbench */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Tool Card Header & Controls */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-heading font-bold text-xl text-white">{selectedTool.name}</h3>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {selectedTool.apiGroup}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1">{selectedTool.description}</p>
              </div>

              {/* Run Tool Button */}
              <button
                onClick={handleRunTool}
                disabled={isLoading}
                className="flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-500/20 transition-all disabled:opacity-50 shrink-0"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Play className="w-4 h-4 fill-slate-950" />
                )}
                <span>Run Tool Call</span>
              </button>
            </div>

            {/* Parameters List */}
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Required / Optional Arguments</div>
              {selectedTool.params.length === 0 ? (
                <div className="text-xs text-slate-500 italic bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/60">
                  No parameters required for this tool call.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTool.params.map(param => (
                    <div key={param.name} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono text-amber-300 font-semibold">{param.name}</span>
                        <span className="text-slate-500 ml-1.5">({param.type})</span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                        {param.example}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Response Inspector Tabs */}
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            
            {/* Tab Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'visual'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Visual Result</span>
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'json'
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>JSON Payload</span>
                </button>
              </div>

              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>200 OK (0.04s)</span>
              </div>
            </div>

            {/* Tab Content Body */}
            <div className="p-5">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-3">
                  <RefreshCw className="w-8 h-8 text-amber-400 animate-spin" />
                  <p className="text-xs font-mono text-slate-400">Communicating with Google Analytics API...</p>
                </div>
              ) : activeTab === 'json' ? (
                <div className="space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-1">MCP Request JSON-RPC:</div>
                    <pre className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-amber-300 overflow-x-auto">
                      {JSON.stringify(jsonRpcRequest, null, 2)}
                    </pre>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 mb-1">MCP Response Data:</div>
                    <pre className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto max-h-[300px]">
                      {JSON.stringify(getToolResponse(), null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                /* Visual Renderers */
                <RenderVisualResult toolId={selectedToolId} data={getToolResponse()} />
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function RenderVisualResult({ toolId, data }) {
  if (toolId === 'get_account_summaries') {
    return (
      <div className="space-y-4">
        <div className="text-xs font-mono text-slate-400">Accounts Found ({data.length})</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((acc) => (
            <div key={acc.name} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-slate-100 text-sm">{acc.displayName}</h4>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {acc.name}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400">Associated Properties:</div>
                {acc.properties.map((prop) => (
                  <div key={prop.name} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-medium text-slate-200">{prop.displayName}</div>
                      <div className="text-[11px] font-mono text-slate-500">{prop.name}</div>
                    </div>
                    <div className="text-right font-mono text-[11px]">
                      <span className="text-emerald-400">{prop.currencyCode}</span>
                      <div className="text-slate-500">{prop.timeZone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (toolId === 'get_property_details') {
    return (
      <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div>
            <h4 className="font-heading font-bold text-slate-100 text-base">{data.displayName}</h4>
            <p className="text-xs font-mono text-amber-400">{data.name}</p>
          </div>
          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono font-medium">
            Active Property
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Currency</span>
            <span className="font-bold text-amber-300 font-mono text-sm">{data.currencyCode}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Timezone</span>
            <span className="font-bold text-slate-200 font-mono text-xs">{data.timeZone}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Data Streams</span>
            <span className="font-bold text-emerald-400 font-mono text-sm">{data.dataStreamsCount}</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-[11px]">Property Type</span>
            <span className="font-bold text-slate-300 font-mono text-[11px] truncate block">{data.propertyType}</span>
          </div>
        </div>
      </div>
    );
  }

  if (toolId === 'list_google_ads_links') {
    return (
      <div className="space-y-3">
        <div className="text-xs font-mono text-slate-400">Connected Google Ads Accounts ({data.length})</div>
        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/60">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 font-mono">
              <tr>
                <th className="p-3">Ads Customer ID</th>
                <th className="p-3">Personalization</th>
                <th className="p-3">Creator Email</th>
                <th className="p-3">Linked Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {data.map((link) => (
                <tr key={link.name} className="hover:bg-slate-800/40">
                  <td className="p-3 font-mono font-semibold text-amber-300">{link.googleAdsAccountId}</td>
                  <td className="p-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Enabled
                    </span>
                  </td>
                  <td className="p-3 text-slate-400">{link.creatorEmailAddress}</td>
                  <td className="p-3 font-mono text-slate-500 text-[11px]">{new Date(link.createTime).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (toolId === 'run_report') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">GA4 Data API v1beta Report (<code className="text-emerald-400">analyticsData#runReport</code>)</div>
          <div className="text-xs font-mono text-amber-400">Date Range: 30daysAgo - today</div>
        </div>

        <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-900/60">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 font-mono">
              <tr>
                {data.dimensionHeaders.map((dh, i) => (
                  <th key={i} className="p-3">{dh.name}</th>
                ))}
                {data.metricHeaders.map((mh, i) => (
                  <th key={i} className="p-3 text-right">{mh.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200 font-mono">
              {data.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/40">
                  {row.dimensionValues.map((dv, i) => (
                    <td key={i} className={`p-3 ${i === 0 ? 'font-sans font-medium text-amber-300' : 'text-slate-300'}`}>
                      {dv.value}
                    </td>
                  ))}
                  {row.metricValues.map((mv, i) => {
                    const isCurrency = data.metricHeaders[i]?.name === 'purchaseRevenue';
                    const isFloat = data.metricHeaders[i]?.type === 'TYPE_FLOAT';
                    const numVal = parseFloat(mv.value);
                    const formatted = isCurrency
                      ? `$${numVal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
                      : isFloat
                      ? `${(numVal * 100).toFixed(1)}%`
                      : parseInt(mv.value, 10).toLocaleString();
                    return (
                      <td key={i} className={`p-3 text-right ${isCurrency ? 'font-bold text-amber-400' : i === 0 ? 'font-bold text-slate-100' : 'text-slate-300'}`}>
                        {formatted}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  if (toolId === 'run_funnel_report') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">Checkout Conversion Funnel</div>
          <div className="text-xs font-mono text-emerald-400">Overall Conversion: {data.overallConversionRate}</div>
        </div>

        <div className="space-y-3">
          {data.funnelSteps.map((step, idx) => {
            const maxUsers = data.funnelSteps[0].users;
            const pct = Math.round((step.users / maxUsers) * 100);
            return (
              <div key={idx} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-semibold text-slate-200">{step.stepName}</span>
                  <div className="space-x-3 font-mono">
                    <span className="text-amber-300 font-bold">{step.users.toLocaleString()} users</span>
                    {idx > 0 && <span className="text-rose-400">({step.dropoff} drop-off)</span>}
                  </div>
                </div>

                {/* Funnel Progress Bar */}
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (toolId === 'get_custom_dimensions_and_metrics') {
    return (
      <div className="space-y-6">
        <div>
          <div className="text-xs font-mono text-slate-400 mb-2">Custom Dimensions ({data.customDimensions.length})</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.customDimensions.map((dim) => (
              <div key={dim.name} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-300">{dim.parameterName}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 text-slate-400 rounded">
                    {dim.scope}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{dim.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-mono text-slate-400 mb-2">Custom Metrics ({data.customMetrics.length})</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.customMetrics.map((met) => (
              <div key={met.name} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-emerald-400">{met.parameterName}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 text-slate-400 rounded">
                    {met.measurementUnit}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{met.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (toolId === 'run_realtime_report') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-slate-900/90 p-4 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <div className="text-xs text-slate-400">Active Users in Last 30 Minutes</div>
              <div className="text-2xl font-bold font-mono text-emerald-400">{data.activeUsersLast30Min}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-slate-400">Top Active Pages</div>
            <div className="space-y-2">
              {data.topActivePages.map((page, i) => (
                <div key={i} className="flex items-center justify-between text-xs bg-slate-950 p-2 rounded-lg border border-slate-800">
                  <span className="font-mono text-slate-200 truncate max-w-[200px]">{page.pagePath}</span>
                  <span className="font-mono text-amber-300 font-bold">{page.activeUsers} users</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-slate-400">Top Geographic Locations</div>
            <div className="space-y-2">
              {data.topCountries.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-xs bg-slate-950 p-2 rounded-lg border border-slate-800">
                  <span className="text-slate-200">{c.flag} {c.country}</span>
                  <span className="font-mono text-emerald-400 font-bold">{c.activeUsers} users</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
