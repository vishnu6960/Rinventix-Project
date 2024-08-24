// script.js

// Example: Scroll to Features Section
document.querySelector('.btn-light').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth' });
});
