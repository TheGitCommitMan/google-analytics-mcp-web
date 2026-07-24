# 📊 Google Analytics MCP Web Suite & Interactive Playground

> Live Interactive Web Suite, Config Generator, and Tool Playground for the [Google Analytics Model Context Protocol (MCP) Server](https://github.com/googleanalytics/google-analytics-mcp).

🌐 **Live Demo on GitHub Pages**: [https://thegitcommitman.github.io/google-analytics-mcp-web/](https://thegitcommitman.github.io/google-analytics-mcp-web/)

---

## 🌟 Key Features

- 🛠️ **Interactive Tool Playground**: Visually execute and inspect all 7 MCP tools (`get_account_summaries`, `get_property_details`, `list_google_ads_links`, `run_report`, `run_funnel_report`, `get_custom_dimensions_and_metrics`, `run_realtime_report`) with live JSON-RPC request & response inspector.
- ⚡ **Interactive Setup & Config Generator**: Instantly generate Google Cloud Application Default Credentials (`gcloud auth application-default login`) commands and `mcpServers` JSON snippets for **Gemini CLI**, **Claude Code**, **Cursor**, and **VS Code**.
- 🤖 **AI Assistant Prompt Simulator**: Test natural language queries (e.g., *"What are my top events in the last 180 days?"*) and watch how LLMs invoke MCP tool calls step-by-step.
- 📡 **Realtime Streaming Pulse**: Live interactive monitor visualizing active user count, page paths, geographic distribution, and event stream tickers for Google Analytics Data API realtime reports.
- 🎨 **Glassmorphism Dark UI**: Built with modern dark-mode aesthetic, glowing amber accents, Google Analytics visual hierarchy, and micro-animations.

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/TheGitCommitMan/google-analytics-mcp-web.git

# 2. Change into project directory
cd google-analytics-mcp-web

# 3. Install dependencies
npm install

# 4. Launch local dev server
npm run dev
```

---

## 🛠️ MCP Server Installation & Setup

To run the local Python MCP server with your AI Assistant:

```bash
# Run using pipx
pipx run analytics-mcp
```

### Configure Gemini CLI (`~/.gemini/settings.json`)

```json
{
  "mcpServers": {
    "analytics-mcp": {
      "command": "pipx",
      "args": ["run", "analytics-mcp"],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/credentials.json",
        "GOOGLE_PROJECT_ID": "your-gcp-project-id"
      }
    }
  }
}
```

### Configure Claude Code

```bash
claude mcp add analytics-mcp \
  --scope user \
  -e "GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json" \
  -e "GOOGLE_PROJECT_ID=your-gcp-project-id" \
  -- pipx run analytics-mcp
```

---

## 💻 Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS + Glassmorphism Dark Theme
- **Icons**: Lucide React + Custom SVG Vectors
- **Fonts**: Google Fonts (Outfit, Inter, JetBrains Mono)
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📜 License

This project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](LICENSE) license.
