(function() {
    let hamburger, mobileNav, closeButton;

    function initMobileNav() {
        hamburger = document.getElementById('hamburger');
        mobileNav = document.querySelector('.mobile-nav');
        closeButton = mobileNav.querySelector('.close-menu');

        if (!hamburger || !mobileNav) {
            console.error('Required elements not found');
            return;
        }

        // Reset initial state
        mobileNav.style.display = 'none';
        hamburger.classList.remove('is-active');
        document.body.style.overflow = '';

        hamburger.addEventListener('click', toggleMobileNav);

        // Create close button if it doesn't exist
        if (!closeButton) {
            closeButton = document.createElement('button');
            closeButton.innerHTML = '✕';
            closeButton.className = 'close-menu';
            mobileNav.insertBefore(closeButton, mobileNav.firstChild);
        }

        closeButton.addEventListener('click', toggleMobileNav);

        // Add click event listeners to all menu items
        const menuItems = mobileNav.querySelectorAll('a');
        menuItems.forEach(item => {
            item.addEventListener('click', handleMenuItemClick);
        });

        console.log('Mobile nav initialized');
    }

    function toggleMobileNav() {
        const isVisible = mobileNav.style.display === 'block';
        mobileNav.style.display = isVisible ? 'none' : 'block';
        hamburger.classList.toggle('is-active', !isVisible);
        document.body.style.overflow = isVisible ? '' : 'hidden';
        console.log('Mobile nav toggled. Display:', mobileNav.style.display);
    }

    function handleMenuItemClick(event) {
        event.preventDefault();
        const targetUrl = event.target.href;
        
        toggleMobileNav();
        
        // Navigate by changing the parent window location
        window.parent.location.href = targetUrl;
    }

    // Run on DOM content loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();