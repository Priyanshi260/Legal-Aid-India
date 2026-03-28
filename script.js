document.addEventListener('DOMContentLoaded', () => {

    window.handleSearch = () => {
        const query = document.getElementById('searchQuery').value.trim().toLowerCase();
        const navbarHeight = 110; 

        if (!query) {
            showToast("⚠️ Please enter a legal issue.");
            return;
        }

        // 1. SELECT TARGETS - Excluding the Sidebar (.sidebar)
        // We focus only on the main grid cards and the bottom featured topics
        const targets = document.querySelectorAll('.main-grid .card, .topics-grid .topic-card');
        
        let bestMatch = null;
        let highestScore = 0;

        // 2. SEARCH LOGIC
        targets.forEach(el => {
            // Skip the Lawyer card if the user didn't specifically type "lawyer"
            if (el.classList.contains('card-lawyer') && !query.includes('lawyer')) {
                return;
            }

            const cardText = el.innerText.toLowerCase();
            let score = 0;

            // Split query into words to handle "Women Law"
            const keywords = query.split(/\s+/);

            keywords.forEach(word => {
                // Use a Regex to find whole words only, avoiding "Law" matching "Lawyer"
                const wordRegex = new RegExp(`\\b${word}\\b`, 'i');
                
                if (wordRegex.test(cardText)) {
                    score += 10; // High score for exact word match
                } else if (cardText.includes(word)) {
                    score += 1;  // Lower score for partial match
                }
            });

            if (score > highestScore) {
                highestScore = score;
                bestMatch = el;
            }
        });

        // 3. EXECUTE SCROLL
        if (bestMatch && highestScore > 0) {
            const elementPosition = bestMatch.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Visual Highlight
            bestMatch.style.transition = "all 0.4s ease";
            bestMatch.style.boxShadow = "0 0 30px rgba(29, 107, 94, 0.5)";
            bestMatch.style.transform = "scale(1.02)";
            
            setTimeout(() => {
                bestMatch.style.boxShadow = "";
                bestMatch.style.transform = "";
            }, 2500);

            showToast(`Navigating to ${query}...`);
        } else {
            showToast("No specific topic found. Try 'Consumer' or 'Women'.");
        }
    };

    // 4. INDEPENDENT QUICK ACTIONS
    window.quickAction = (type) => {
        if (type === 'situation') {
            // COMPLETELY SEPARATE: No search bar interaction
            showToast("Consulting AI Situation Tool...");
            // Trigger your specific logic/modal here
        } else if (type === 'topics') {
            const featured = document.querySelector('.featured-section');
            window.scrollTo({ 
                top: featured.getBoundingClientRect().top + window.pageYOffset - 90, 
                behavior: 'smooth' 
            });
        }
    };

    window.selectTopic = (topicName) => {
        document.getElementById('searchQuery').value = topicName;
        window.handleSearch();
    };

    window.showToast = (message) => {
        const oldToast = document.querySelector('.toast');
        if (oldToast) oldToast.remove();
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };
});