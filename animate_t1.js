document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Ensure elements are hidden when out of view
            }
        });
    }, {
        threshold: 0.2 // Adjust the threshold as needed to control when the animation triggers
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
