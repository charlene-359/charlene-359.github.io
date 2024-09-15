// JavaScript for triggering animations on scroll
document.addEventListener('DOMContentLoaded', function() {
    const quoteSection = document.querySelector('#quote h2');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                quoteSection.classList.add('animate__fadeIn');
            }
        });
    });
    
    observer.observe(quoteSection);
});
