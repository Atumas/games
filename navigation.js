// Game Navigation Component
class GameNavigation {
    static addHomeButton() {
        // Create navigation container
        const navContainer = document.createElement('div');
        navContainer.id = 'game-nav';
        navContainer.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 10000;
                backdrop-filter: blur(10px);
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 50px;
                padding: 12px 20px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
            ">
                <a href="../index.html" style="
                    text-decoration: none;
                    color: white;
                    font-weight: 600;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-family: 'Inter', sans-serif;
                ">
                    <i class="fas fa-home"></i>
                    Home
                </a>
            </div>
        `;

        // Add hover effects
        const style = document.createElement('style');
        style.textContent = `
            #game-nav:hover {
                background: rgba(255, 255, 255, 0.2) !important;
                transform: translateY(-2px);
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2) !important;
            }
            
            #game-nav a:hover {
                color: #f093fb !important;
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(navContainer);
    }

    static addFontAwesome() {
        // Check if Font Awesome is already loaded
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const fontAwesome = document.createElement('link');
            fontAwesome.rel = 'stylesheet';
            fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fontAwesome);
        }
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only add navigation if we're in a game (not on homepage)
    if (!window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        GameNavigation.addFontAwesome();
        GameNavigation.addHomeButton();
    }
});

// Also run immediately in case DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (!window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        GameNavigation.addFontAwesome();
        GameNavigation.addHomeButton();
    }
}