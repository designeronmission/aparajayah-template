document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.ot-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    const megaMenuParents = document.querySelectorAll('.mega-menu-parent');
    
    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
    });
    
    // Mobile mega menu toggle
    if (window.innerWidth <= 991) {
        megaMenuParents.forEach(parent => {
            const link = parent.querySelector('a');
            const megaMenu = parent.querySelector('.mega-menu');
            
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    megaMenu.classList.toggle('active');
                }
            });
        });
    }
    
    // Close mega menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.mega-menu-parent') && window.innerWidth > 991) {
            document.querySelectorAll('.mega-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                menu.style.transform = 'translateY(20px)';
            });
        }
    });
    
    // Responsive adjustments
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991) {
            mainMenu.classList.remove('active');
            document.querySelectorAll('.mega-menu').forEach(menu => {
                menu.classList.remove('active');
                menu.style.display = '';
            });
        }
    });
});