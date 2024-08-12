
document.querySelectorAll('.toggle-answer').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        faqItem.classList.toggle('open');
        button.setAttribute('aria-expanded', faqItem.classList.contains('open'));
        button.textContent = faqItem.classList.contains('open') ? '−' : '+';
    });
});