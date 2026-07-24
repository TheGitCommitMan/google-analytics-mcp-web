import React, { useState } from 'react';
import { Sparkles, Bot, User, Send, ArrowRight, CheckCircle2, CornerDownRight, BarChart3, HelpCircle } from 'lucide-react';
import { SAMPLE_PROMPTS, MOCK_REPORT_DATA, MOCK_REALTIME_DATA, MOCK_FUNNEL_DATA, MOCK_ACCOUNTS } from '../data/mockData';

export default function PromptAssistant() {
  const [promptText, setPromptText] = useState(SAMPLE_PROMPTS[1].prompt);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: SAMPLE_PROMPTS[1].prompt
    },
    {
      id: 2,
      sender: 'assistant',
      toolCalled: 'run_report',
      toolArgs: {
        property_id: "properties/310492851",
        dimensions: ["sessionDefaultChannelGroup", "country", "deviceCategory"],
        metrics: ["activeUsers", "sessions", "conversions", "purchaseRevenue"]
      },
      text: "Based on the Google Analytics Data API, here is the breakdown of your most popular acquisition channels and revenue over the last 180 days:",
      reportData: MOCK_REPORT_DATA
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSendPrompt = (textToSend) => {
    const text = textToSend || promptText;
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setPromptText('');
    setIsThinking(true);

    setTimeout(() => {
      let toolToCall = 'run_report';
      let reportData = MOCK_REPORT_DATA;
      let textResponse = "Here are the query results from your Google Analytics property:";

      if (text.toLowerCase().includes('account') || text.toLowerCase().includes('propert')) {
        toolToCall = 'get_account_summaries';
        textResponse = "I retrieved your Google Analytics accounts and associated properties:";
      } else if (text.toLowerCase().includes('realtime') || text.toLowerCase().includes('active right now')) {
        toolToCall = 'run_realtime_report';
        textResponse = `There are currently ${MOCK_REALTIME_DATA.activeUsersLast30Min} active users on your property. Top pages include /checkout/payment and /products/wireless-headphones-pro.`;
      } else if (text.toLowerCase().includes('funnel') || text.toLowerCase().includes('checkout')) {
        toolToCall = 'run_funnel_report';
        textResponse = `The overall checkout conversion rate is ${MOCK_FUNNEL_DATA.overallConversionRate}. Highest drop-off occurs between Product Page View and Add to Cart.`;
      }

      const assistantMsg = {
        id: Date.now() + 1,
        sender: 'assistant',
        toolCalled: toolToCall,
        toolArgs: { property_id: "properties/310492851" },
        text: textResponse,
        reportData: toolToCall === 'run_report' ? MOCK_REPORT_DATA : null
      };

      setMessages(prev => [...prev, assistantMsg]);
      setIsThinking(false);
    }, 600);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Top Banner */}
      <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>AI Assistant Prompt Simulator</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            See how Gemini & Claude automatically select MCP tools to answer natural language questions.
          </p>
        </div>

        {/* Quick Sample Chips */}
        <div className="flex flex-wrap gap-1.5">
          {SAMPLE_PROMPTS.map((sp, idx) => (
            <button
              key={idx}
              onClick={() => handleSendPrompt(sp.prompt)}
              className="px-2.5 py-1 rounded-lg text-xs bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 transition-colors"
            >
              {sp.title}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="glass-panel rounded-2xl border border-slate-800 p-6 space-y-6 min-h-[400px]">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-3">
            
            {msg.sender === 'user' ? (
              /* User Prompt Bubble */
              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-amber-500/10 border border-amber-500/30 text-amber-100 p-3.5 rounded-2xl rounded-tr-none max-w-xl text-sm">
                  <p>{msg.text}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <User className="w-4 h-4" />
                </div>
              </div>
            ) : (
              /* Assistant Response Bubble with MCP Tool Step */
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shrink-0 shadow-md">
                  <Bot className="w-4 h-4" />
                </div>

                <div className="space-y-3 max-w-2xl w-full">
                  
                  {/* Tool Call Invocation Badge */}
                  {msg.toolCalled && (
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-1.5 font-mono text-xs">
                      <div className="flex items-center space-x-2 text-amber-400 font-bold">
                        <CornerDownRight className="w-4 h-4 text-slate-500" />
                        <span>Invoking MCP Tool:</span>
                        <code className="bg-slate-950 px-2 py-0.5 rounded text-amber-300 border border-slate-800">
                          {msg.toolCalled}
                        </code>
                      </div>
                      <div className="text-[11px] text-slate-400 pl-6">
                        Arguments: {JSON.stringify(msg.toolArgs)}
                      </div>
                    </div>
                  )}

                  {/* Text Content */}
                  <div className="bg-slate-900/90 border border-slate-800/80 p-4 rounded-2xl rounded-tl-none text-slate-200 text-sm space-y-3">
                    <p>{msg.text}</p>

                    {/* Formatted GA4 Report Table */}
                    {msg.reportData && (
                      <div className="overflow-x-auto border border-slate-800 rounded-xl bg-slate-950 p-2 text-xs">
                        <table className="w-full text-left font-mono">
                          <thead className="border-b border-slate-800 text-slate-400">
                            <tr>
                              <th className="p-2">sessionSourceMedium</th>
                              <th className="p-2">country</th>
                              <th className="p-2 text-right">activeUsers</th>
                              <th className="p-2 text-right">purchaseRevenue</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800/60">
                            {msg.reportData.rows.slice(0, 4).map((r, i) => (
                              <tr key={i}>
                                <td className="p-2 text-amber-300 font-sans">{r.dimensionValues[0]?.value}</td>
                                <td className="p-2 text-slate-300">{r.dimensionValues[1]?.value}</td>
                                <td className="p-2 text-right text-slate-100">{parseInt(r.metricValues[0]?.value || 0, 10).toLocaleString()}</td>
                                <td className="p-2 text-right text-amber-400 font-bold">
                                  ${parseFloat(r.metricValues[4]?.value || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

          </div>
        ))}

        {isThinking && (
          <div className="flex items-center space-x-3 text-xs text-amber-400 font-mono animate-pulse">
            <Bot className="w-4 h-4" />
            <span>AI Assistant analyzing schema and running MCP tool...</span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="glass-panel p-2 rounded-2xl border border-slate-800 flex items-center space-x-2">
        <input
          type="text"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendPrompt()}
          placeholder="Ask a question about your Google Analytics data (e.g. What are my top event counts?)"
          className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
        />
        <button
          onClick={() => handleSendPrompt()}
          className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold transition-all shadow-md"
        >
          <Send className="w-4 h-4 fill-slate-950" />
        </button>
      </div>

    </div>
  );
}
