document.querySelectorAll('.semestre a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('completado');
    });
});
