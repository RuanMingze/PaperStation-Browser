# Flowmora Browser 
<img width="200" height="300" alt="Flowmora" src="https://github.com/user-attachments/assets/ddfc3645-319a-4058-bfac-56a9c357c31c" />

<h1 align="center">Flowmora Browser</h1>

<p align="center">
  <strong>A Modern, Secure, and Feature-Rich Desktop Browser</strong>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-development">Development</a> •
  <a href="#-building">Building</a> •
  <a href="#-license">License</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Windows-blue?style=flat-square&logo=windows" alt="Platform">
  <img src="https://img.shields.io/badge/Electron-33.x-47848F?style=flat-square&logo=electron" alt="Electron">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square" alt="Version">
</p>

---

## 🌟 What Makes Flowmora Different?

Flowmora isn't just another browser. It's a **knowledge-focused browsing experience** designed for researchers, students, and anyone who wants to learn efficiently while browsing.

| Feature | Chrome/Edge | Flowmora |
|---------|:-----------:|:--------:|
| 🧠 Knowledge Mode | ❌ | ✅ |
| 📚 Auto-save Learning Content | ❌ | ✅ |
| 📝 Page Summarization | ❌ | ✅ |
| 📖 Export Knowledge Book | ❌ | ✅ |
| 🌙 Built-in Dark Mode | ✅ | ✅ |
| 🔒 Privacy-First Design | ⚠️ | ✅ |
| 🚀 Lightweight & Fast | ⚠️ | ✅ |
| 🎨 Modern UI/UX | ✅ | ✅ |

---

## ✨ Features

### 🧠 Knowledge Mode
Enable Knowledge Mode to automatically capture and organize information from pages you visit. Perfect for research and studying.

### 📝 Smart Summarization
One-click summarization extracts:
- **5 Key Bullet Points** - Main ideas from any page
- **3 Key Definitions** - Important terms explained
- **2 Real-World Examples** - Practical applications

### 📖 Knowledge Book Export
Export all your collected knowledge as a beautifully formatted PDF or HTML book.

### 🔐 Privacy & Security
- **Context Isolation** - Renderer process is isolated
- **No Tracking** - Your data stays on your device
- **Incognito Mode** - Browse without leaving traces
- **Secure by Default** - Modern security practices

### 🎨 Modern Interface
- Premium dark & light themes
- Smooth animations
- Tab management
- Bookmarks bar
- Quick shortcuts

### ⚡ Performance
- Fast startup
- Minimal memory usage
- Hardware acceleration
- Efficient tab management

---

## 📥 Installation

### Windows (Recommended)

1. **Download** the latest installer from [Releases](https://github.com/piyushrajyadav/flowmora-browser/releases)
2. **Run** `Flowmora Browser Setup.exe`
3. **Follow** the installation wizard
4. **Launch** from Desktop or Start Menu

### Portable Version

Download `Flowmora-Browser-win-x64.zip`, extract, and run `Flowmora Browser.exe`

---

## 📸 Screenshots

### New Tab Page
<p align="center">
  <em>Clean, minimal new tab page with quick access shortcuts</em>
</p>

### Knowledge Mode
<p align="center">
  <em>Capture and organize knowledge while browsing</em>
</p>

### Dark Theme
<p align="center">
  <em>Premium Dracula-inspired dark theme</em>
</p>

---

## 🛠️ Development

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+
- **Git**

### Setup

```bash
# Clone the repository
git clone https://github.com/piyushrajyadav/flowmora-browser.git
cd flowmora-browser

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Project Structure

```
flowmora-browser/
├── main.js           # Electron main process
├── preload.js        # Preload scripts (IPC bridge)
├── renderer.js       # Renderer process logic
├── index.html        # Main UI structure
├── styles.css        # All styling
├── assets/           # Icons and resources
│   └── icon.png      # App icon
├── package.json      # Project config & build settings
└── dist/             # Build output
```

### Key Technologies

| Technology | Purpose |
|------------|---------|
| **Electron 33** | Cross-platform desktop app |
| **Chromium** | Web rendering engine |
| **IndexedDB** | Local knowledge storage |
| **electron-builder** | App packaging & distribution |

---

## 📦 Building

### Build for Windows

```bash
# Create installer
npm run build

# Output: dist/Flowmora Browser Setup.exe
```

### Build Options

| Command | Output |
|---------|--------|
| `npm run build` | Windows NSIS installer |
| `npm run build:dir` | Unpacked directory (testing) |
| `npm run dist` | Build without publishing |

### Build Configuration

The build is configured in `package.json` under the `"build"` section:

- **App ID**: `com.flowmora.browser`
- **Target**: Windows x64 NSIS
- **Compression**: Maximum
- **ASAR**: Enabled

---

## 🔧 Configuration

### Settings Available

| Setting | Description |
|---------|-------------|
| Search Engine | Google, Bing, DuckDuckGo, Yahoo, Ecosia |
| Theme | Dark / Light |
| Knowledge Mode | Enable/Disable auto-capture |
| Privacy | Clear data, Incognito mode |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Piyush Yadav**

- GitHub: [@piyushrajyadav](https://github.com/piyushrajyadav)

---

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Icons and design inspiration from modern browsers
- Community feedback and contributions

---

<p align="center">
  Made with ❤️ for better browsing
</p>
