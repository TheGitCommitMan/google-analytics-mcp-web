import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SetupWizard from './components/SetupWizard';
import ToolsExplorer from './components/ToolsExplorer';
import PromptAssistant from './components/PromptAssistant';
import RealtimeStream from './components/RealtimeStream';
import ApiDocs from './components/ApiDocs';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('playground');
  const [isSetupOpen, setIsSetupOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Top Header Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSetup={() => setIsSetupOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenSetup={() => setIsSetupOpen(true)}
        setActiveTab={setActiveTab}
      />

      {/* Interactive Setup Wizard Modal */}
      <SetupWizard
        isOpen={isSetupOpen}
        onClose={() => setIsSetupOpen(false)}
      />

      {/* Main Tab Content */}
      <main className="flex-1">
        {activeTab === 'playground' && <ToolsExplorer />}
        {activeTab === 'assistant' && <PromptAssistant />}
        {activeTab === 'realtime' && <RealtimeStream />}
        {activeTab === 'docs' && <ApiDocs />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
