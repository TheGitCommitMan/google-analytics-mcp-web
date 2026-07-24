import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Key, Cpu, ShieldCheck, HelpCircle } from 'lucide-react';

export default function SetupWizard({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [clientType, setClientType] = useState('gemini'); // gemini, claude, cursor
  const [projectId, setProjectId] = useState('my-analytics-gcp-project');
  const [credPath, setCredPath] = useState('/Users/username/.config/gcloud/application_default_credentials.json');
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const gcloudCmd = `gcloud auth application-default login \\
  --scopes https://www.googleapis.com/auth/analytics.readonly,https://www.googleapis.com/auth/cloud-platform`;

  const geminiConfig = JSON.stringify({
    mcpServers: {
      "analytics-mcp": {
        "command": "pipx",
        "args": ["run", "analytics-mcp"],
        "env": {
          "GOOGLE_APPLICATION_CREDENTIALS": credPath,
          "GOOGLE_PROJECT_ID": projectId
        }
      }
    }
  }, null, 2);

  const claudeCmd = `claude mcp add analytics-mcp \\
  --scope user \\
  -e "GOOGLE_APPLICATION_CREDENTIALS=${credPath}" \\
  -e "GOOGLE_PROJECT_ID=${projectId}" \\
  -- pipx run analytics-mcp`;

  const cursorConfig = JSON.stringify({
    mcpServers: {
      "analytics-mcp": {
        "command": "pipx",
        "args": ["run", "analytics-mcp"],
        "env": {
          "GOOGLE_APPLICATION_CREDENTIALS": credPath,
          "GOOGLE_PROJECT_ID": projectId
        }
      }
    }
  }, null, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-slate-700/80 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Google Analytics MCP Configuration Generator</h3>
              <p className="text-xs text-slate-400">Configure credentials & MCP server JSON for your AI Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Step 1: GCP Credentials */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-heading font-semibold text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">1</span>
              <span>Authenticate Google Cloud Application Default Credentials (ADC)</span>
            </div>
            <p className="text-xs text-slate-300">
              Enable the <strong className="text-slate-100">Google Analytics Admin API</strong> and <strong className="text-slate-100">Google Analytics Data API</strong> in your GCP console, then run:
            </p>
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-3.5 font-mono text-xs text-amber-200">
              <pre className="whitespace-pre-wrap">{gcloudCmd}</pre>
              <button
                onClick={() => handleCopy(gcloudCmd, 'gcloud')}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy gcloud command"
              >
                {copiedKey === 'gcloud' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Step 2: Custom Parameters */}
          <div className="space-y-3 pt-2 border-t border-slate-800/60">
            <div className="flex items-center space-x-2 text-amber-400 font-heading font-semibold text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">2</span>
              <span>Customize Environment Variables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">GCP Project ID</label>
                <input
                  type="text"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-100 focus:outline-none focus:border-amber-500"
                  placeholder="my-gcp-project-id"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Path to Credentials JSON</label>
                <input
                  type="text"
                  value={credPath}
                  onChange={(e) => setCredPath(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs font-mono text-slate-100 focus:outline-none focus:border-amber-500"
                  placeholder="/path/to/credentials.json"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Target Client Selection */}
          <div className="space-y-3 pt-2 border-t border-slate-800/60">
            <div className="flex items-center space-x-2 text-amber-400 font-heading font-semibold text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">3</span>
              <span>Select Your AI Assistant Client</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setClientType('gemini')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                  clientType === 'gemini'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Gemini CLI / Code Assist
              </button>
              <button
                onClick={() => setClientType('claude')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                  clientType === 'claude'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Claude Code
              </button>
              <button
                onClick={() => setClientType('cursor')}
                className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                  clientType === 'cursor'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Cursor / VS Code
              </button>
            </div>

            {/* Generated Snippet Output */}
            <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200">
              <div className="text-slate-400 text-[11px] mb-2 font-sans font-medium">
                {clientType === 'gemini' && 'Add to ~/.gemini/settings.json:'}
                {clientType === 'claude' && 'Run in terminal:'}
                {clientType === 'cursor' && 'Add to .cursor/mcp.json or VS Code settings:'}
              </div>

              <pre className="overflow-x-auto whitespace-pre text-amber-300">
                {clientType === 'gemini' && geminiConfig}
                {clientType === 'claude' && claudeCmd}
                {clientType === 'cursor' && cursorConfig}
              </pre>

              <button
                onClick={() => {
                  const content = clientType === 'gemini' ? geminiConfig : clientType === 'claude' ? claudeCmd : cursorConfig;
                  handleCopy(content, 'config');
                }}
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy configuration snippet"
              >
                {copiedKey === 'config' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/60">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Read-only Analytics scope (<code className="text-slate-300">analytics.readonly</code>)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
}
