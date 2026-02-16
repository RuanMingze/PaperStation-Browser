/**
 * PWA Preload Script
 * 
 * This script runs in the webview context to capture beforeinstallprompt events
 * before they fire, ensuring we can trigger PWA installation.
 */

console.log('PWA: Preload script loaded');

// Set up beforeinstallprompt event listener immediately
window.addEventListener('beforeinstallprompt', (e) => {
    console.log('PWA: beforeinstallprompt event captured in preload');
    e.preventDefault();
    window.deferredPrompt = e;
    console.log('PWA: deferredPrompt set:', !!window.deferredPrompt);
});

console.log('PWA: beforeinstallprompt listener setup complete');
