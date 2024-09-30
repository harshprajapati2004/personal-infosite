/* ====================TYPINGGGGG ANIMATIONNSS===========================*/
var typed = new Typed(".typing", {
    strings: ["" , "Web Designer", "Professional Trader", "&" ,"Gamer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
/* ====================Scroll Animation ===========================*/
document.addEventListener('DOMContentLoaded', () => {
    const scrollingText = document.querySelector('.scrolling-text h1');

    const handleScroll = () => {
        const scrolled = window.scrollY;
        const triggerHeight = window.innerHeight * 0.75; // Trigger when 75% down the viewport

        if (scrolled > triggerHeight) {
            scrollingText.style.top = '0%'; // Move the text into view
        } else {
            scrollingText.style.top = '100%'; // Move the text out of view
        }
    };

    // Run handleScroll on page load and when the user scrolls
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
});
document.addEventListener("DOMContentLoaded", function() {
    const highlightText = document.querySelector('.highlight-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                highlightText.classList.add('highlight-active');
            } 
        });
    }, { threshold: 0.5 });

    observer.observe(highlightText);
});


