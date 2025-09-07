// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or respect OS preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// // Mobile detection for contact links
// function isMobileDevice() {
//     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
// }

// // Update contact links based on device
// document.addEventListener('DOMContentLoaded', function() {
//     const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
//     const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    
//     if (!isMobileDevice()) {
//         // If not mobile, change tel: links to click-to-copy
//         phoneLinks.forEach(link => {
//             link.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const phoneNumber = this.href.replace('tel:', '');
//                 navigator.clipboard.writeText(phoneNumber).then(() => {
//                     alert('Phone number copied to clipboard: ' + phoneNumber);
//                 });
//             });
//         });
        
//         // If not mobile, change WhatsApp links to open in new tab
//         whatsappLinks.forEach(link => {
//             link.setAttribute('target', '_blank');
//         });
//     }
// });


// Modern mobile detection function
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           (navigator.maxTouchPoints > 0 && /MacIntel/.test(navigator.platform));
}

// Update contact links based on device
document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
    
    if (!isMobileDevice()) {
        // If not mobile, change tel: links to click-to-copy
        phoneLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const phoneNumber = this.getAttribute('href').replace('tel:', '');
                
                // Use modern Clipboard API if available
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(phoneNumber).then(() => {
                        alert('Phone number copied to clipboard: ' + phoneNumber);
                    }).catch(err => {
                        fallbackCopyText(phoneNumber);
                    });
                } else {
                    fallbackCopyText(phoneNumber);
                }
            });
        });
        
        // If not mobile, change WhatsApp links to open in new tab
        whatsappLinks.forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }
    
    // Fallback method for copying text
    function fallbackCopyText(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            alert(successful ? 'Phone number copied to clipboard: ' + text : 'Failed to copy phone number');
        } catch (err) {
            alert('Failed to copy phone number: ' + err);
        }
        
        document.body.removeChild(textArea);
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
const messageForm = document.getElementById('messageForm');
if (messageForm) {
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link
        const mailtoLink = `mailto:Ashishgupta9819r@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage: ' + message)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show confirmation message
        alert('Your email client will open with a pre-filled message. Please send it to contact Ashish.');
        
        // Reset form
        this.reset();
    });
}

// Modal functionality
const viewDetailsButtons = document.querySelectorAll('.view-details');
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close-modal');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const modal = document.getElementById(`${projectId}-modal`);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});