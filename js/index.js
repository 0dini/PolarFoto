const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('heading-show');
    } else {
        entry.target.classList.remove('heading-show')
        }
    });
});

const hiddenElements = document.querySelectorAll('heading');
hiddenElements.forEach((el) => observer.observe(el));