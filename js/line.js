const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('line-show');
    } else {
        entry.target.classList.remove('line-show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.line-gallery');
hiddenElements.forEach((el) => observer.observe(el));