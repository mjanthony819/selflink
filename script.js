// Share button functionality
document.querySelector('.share-btn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'anthony',
                text: 'Check out my bio link!',
                url: window.location.href
            });
        } catch (err) {
            console.log('Share cancelled');
        }
    } else {
        // Fallback: Copy link to clipboard
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    }
});

// Add scroll smooth behavior
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
