// Smooth scrolling effect for the "Explore More" button
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.querySelector('.info').scrollIntoView({ behavior: 'smooth' });
});
