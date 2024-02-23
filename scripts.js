<script>
document.addEventListener("DOMContentLoaded", function() {
    const homeButton = document.querySelector('nav ul li:nth-child(1) a');
    const aboutButton = document.querySelector('nav ul li:nth-child(2) a');
    const contactButton = document.querySelector('nav ul li:nth-child(3) a');

    homeButton.addEventListener('click', scrollToSection);
    aboutButton.addEventListener('click', scrollToSection);
    contactButton.addEventListener('click', scrollToSection);

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});
</script>