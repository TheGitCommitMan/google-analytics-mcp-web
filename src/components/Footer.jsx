import React from 'react';
import { BarChart3, Heart, Shield, Globe } from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-base">Google Analytics MCP Web Suite</span>
              <p className="text-xs text-slate-500">
                Interactive Model Context Protocol playground & setup assistant.
              </p>
            </div>
          </div>

          {/* Links & License */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-amber-400 hover:underline"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>CC BY-SA 4.0 License</span>
            </a>

            <a
              href="https://github.com/TheGitCommitMan/google-analytics-mcp-web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-slate-300 hover:text-white"
            >
              <GithubIcon className="w-4 h-4 text-amber-400" />
              <span>TheGitCommitMan/google-analytics-mcp-web</span>
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>Built with React, Vite & TailwindCSS. Designed for Google Analytics MCP Server integration with Gemini CLI & Claude Code.</p>
        </div>
      </div>
    </footer>
  );
}
