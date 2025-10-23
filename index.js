document.addEventListener("DOMContentLoaded", function() {

    // --- Intersecção Observer para Animação de Scroll ---
    // Isso faz os elementos aparecerem quando entram na tela

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            // Opcional: para animar toda vez
            // else {
            //     entry.target.classList.remove('show');
            // }
        });
    }, {
        threshold: 0.1 // 10% do item precisa estar visível
    });

    // Observa todos os elementos com a classe .hidden
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));


    // --- Efeito de "tilt" 3D no Card (Opcional Avançado) ---
    // Adiciona um brilho sutil que segue o mouse nos cards

    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posição X dentro do card
            const y = e.clientY - rect.top;  // Posição Y dentro do card

            // Cria um brilho radial que segue o mouse
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 247, 255, 0.2), var(--color-secondary) 60%)`;

            // Efeito 3D (opcional)
            const rotateX = (rect.height / 2 - y) / 10;
            const rotateY = (x - rect.width / 2) / 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            // Reseta ao sair
            card.style.background = `var(--color-secondary)`;
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

});