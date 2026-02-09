# Papstation Browser

<h1 align="center">Papstation Browser</h1>

<p align="center">
  <strong>A Modern, Secure, and Knowledge-Focused Desktop Browser</strong>
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
  <img src="https://img.shields.io/badge/Electron-40.1.0-47848F?style=flat-square&logo=electron" alt="Electron">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square" alt="Version">
</p>

---

## 🌟 What Makes Papstation Different?

Papstation is a knowledge-focused browsing experience designed for researchers, students, and anyone who wants to learn efficiently while browsing. It is based on Flowmora Browser and inherits its core features while adding additional enhancements.

| Feature | Chrome/Edge | Papstation |
|---------|:-----------:|:--------:|
| 🧠 Knowledge Mode | ❌ | ✅ |
| 📚 Auto-save Learning Content | ❌ | ✅ |
| 📝 Page Summarization | ❌ | ✅ |
| 📖 Export Knowledge Book | ❌ | ✅ |
| 🌙 Built-in Dark Mode | ✅ | ✅ |
| 🔒 Privacy-First Design | ⚠️ | ✅ |
| 🚀 Lightweight & Fast | ⚠️ | ✅ |
| 🎨 Modern UI/UX | ✅ | ✅ |
| 🐔 ChickRubGo Search | ❌ | ✅ |
| 🌍 Chinese Localization | ❌ | ✅ |

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
- Full Chinese language support

### ⚡ Performance
- Fast startup
- Minimal memory usage
- Hardware acceleration
- Efficient tab management

### 🐔 ChickRubGo Search Engine
Integrated with ChickRubGo search engine for enhanced browsing experience.

---

## 📥 Installation

### Windows (Recommended)

1. **Download** the latest installer from [Releases](https://github.com/ruanmingze/papstation-browser/releases)
2. **Run** `Papstation Browser Setup.exe`
3. **Follow** the installation wizard
4. **Launch** from Desktop or Start Menu

### Portable Version

Download `Papstation-Browser-win-x64.zip`, extract, and run `Papstation Browser.exe`

---

## 📸 Screenshots


<p align="center">
  <em> <img width="2378" height="1482" alt="image" src="https://github.com/user-attachments/assets/0c7ca782-d1b6-494b-afce-c189e430ee50" />
</em>
</p>

### Knowledge Mode
<p align="center">
  <em><img width="2368" height="1555" alt="image" src="https://github.com/user-attachments/assets/ee53f3e1-b413-4819-a551-cce0d5f20ec3" />
</em>
</p>


---

## 🛠️ Development

### Prerequisites

- **Node.js** 18+ 
- **pnpm** 
- **Git**

### Setup

```bash
# Clone the repository
git clone https://github.com/ruanmingze/papstation-browser.git
cd papstation-browser

# Install dependencies
pnpm install

# Run in development mode
pnpm run dev
```

### Project Structure

```
papstation-browser/
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
| **Electron 40.1.0** | Cross-platform desktop app |
| **Chromium** | Web rendering engine |
| **IndexedDB** | Local knowledge storage |
| **electron-builder** | App packaging & distribution |

---

## 📦 Building

### Build for Windows

```bash
# Create installer
pnpm run build

# Output: dist/Papstation Browser Setup.exe
```

### Build Options

| Command | Output |
|---------|--------|
| `pnpm run build` | Windows NSIS installer |
| `pnpm run build:dir` | Unpacked directory (testing) |
| `pnpm run dist` | Build without publishing |

### Build Configuration

The build is configured in `package.json` under the `"build"` section:

- **App ID**: `com.papstation.browser`
- **Target**: Windows x64 NSIS
- **Compression**: Maximum
- **ASAR**: Enabled

---

## 🔧 Configuration

### Settings Available

| Setting | Description |
|---------|-------------|
| Search Engine | Google, Bing, DuckDuckGo, Yahoo, Ecosia, ChickRubGo |
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

### Based on Flowmora Browser

Papstation Browser is based on Flowmora Browser, which is also licensed under the MIT License.

---

## 👤 Author

**Ruan Mingze**

---

## 🙏 Acknowledgments

- Built with [Electron](https://www.electronjs.org/)
- Based on [Flowmora Browser](https://github.com/piyushrajyadav/flowmora-browser)
- Icons and design inspiration from modern browsers
- Community feedback and contributions

---

<p align="center">
  Made with ❤️ for better browsing
</p>