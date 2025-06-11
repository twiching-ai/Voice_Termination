document.addEventListener("DOMContentLoaded", function() {

    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

    // 2. Multi-Step Form Logic
    const form = document.getElementById('multi-step-form');
    if (form) {
        const nextButtons = form.querySelectorAll('.next-btn');
        const prevButtons = form.querySelectorAll('.prev-btn');
        const formSteps = form.querySelectorAll('.form-step');
        const progressBarFill = form.querySelector('.progress-bar-fill');
        let currentStep = 1;

        const updateFormSteps = () => {
            formSteps.forEach(step => {
                step.classList.remove('active');
            });
            form.querySelector(`[data-step="${currentStep}"]`).classList.add('active');
            
            // Update progress bar
            const progress = ((currentStep - 1) / (formSteps.length - 1)) * 100;
            progressBarFill.style.width = `${progress}%`;
        };
        
        nextButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Add basic validation if needed before proceeding
                if (currentStep < formSteps.length) {
                    currentStep++;
                    updateFormSteps();
                }
            });
        });

        prevButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateFormSteps();
                }
            });
        });
        
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual submission for demo
            alert('Form submitted successfully!');
            // Here you would handle the actual form submission (e.g., via AJAX)
            form.reset();
            currentStep = 1;
            updateFormSteps();
        });

        updateFormSteps(); // Set initial state
    }

    // 3. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');
            
            // Close all other open items for a cleaner accordion experience
            document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
            document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);

            // If the clicked item wasn't already active, open it
            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 4. Lottie Animation Initialization
    const lottieContainer = document.getElementById('lottie-infographic');
    if (lottieContainer) {
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            // Using a relevant animation for "connectivity"
            path: 'https://assets9.lottiefiles.com/packages/lf20_x9s7d6v8.json'
        });
    }

});
