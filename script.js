document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const filterSkillsBtn = document.getElementById('filterSkillsBtn');
    const printBtn = document.getElementById('printBtn');
    const skillsContainer = document.querySelector('.skills-container');

    // 1. Theme Switcher Logic
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('resume-theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('resume-theme', 'dark-theme');
        }
    });

    // Check Local Storage for Theme Preference
    const savedTheme = localStorage.getItem('resume-theme');
    if (savedTheme === 'light-theme') {
        body.classList.replace('dark-theme', 'light-theme');
    }

    // 2. Interactive Skills Core Highlight Toggle
    filterSkillsBtn.addEventListener('click', () => {
        skillsContainer.classList.toggle('highlight-core');
        
        // Update button text for user feedback
        const span = filterSkillsBtn.querySelector('span');
        if (skillsContainer.classList.contains('highlight-core')) {
            span.textContent = 'Show All';
            filterSkillsBtn.style.background = 'var(--accent-gradient)';
            filterSkillsBtn.style.color = '#ffffff';
        } else {
            span.textContent = 'Highlight Core';
            filterSkillsBtn.style.background = '';
            filterSkillsBtn.style.color = '';
        }
    });

    // 3. Print / Save PDF Helper
    printBtn.addEventListener('click', () => {
        window.print();
    });
});
