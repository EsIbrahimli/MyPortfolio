document.addEventListener('DOMContentLoaded', () => {
    const navigationButtons = document.querySelectorAll('[data-scroll-target]');

    navigationButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = button.dataset.scrollTarget;
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
