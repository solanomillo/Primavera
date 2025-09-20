document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Crear flores
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        const flowerHead = document.createElement('div');
        flowerHead.classList.add('flower-head');

        for (let i = 0; i < 8; i++) {
            const petal = document.createElement('div');
            petal.classList.add('petal');
            flowerHead.appendChild(petal);
        }

        const center = document.createElement('div');
        center.classList.add('center');
        flowerHead.appendChild(center);

        flower.appendChild(flowerHead);

        const stem = document.createElement('div');
        stem.classList.add('stem');

        const leafLeft = document.createElement('div');
        leafLeft.classList.add('leaf', 'left');
        const leafRight = document.createElement('div');
        leafRight.classList.add('leaf', 'right');

        stem.appendChild(leafLeft);
        stem.appendChild(leafRight);
        flower.appendChild(stem);

        const startPosition = Math.random() * 100;
        const animationDuration = 10 + Math.random() * 10;
        const animationDelay = Math.random() * 5;

        flower.style.left = `${startPosition}vw`;
        flower.style.animationDuration = `${animationDuration}s`;
        flower.style.animationDelay = `${animationDelay}s`;

        body.appendChild(flower);

        setTimeout(() => flower.remove(), (animationDuration + animationDelay) * 1000);
    }

    // Estrellas fugaces
    function createShootingStar(type) {
        const star = document.createElement('div');
        if(type === 'fast') star.classList.add('shooting-star-fast');
        else star.classList.add('shooting-star-slow');

        star.style.left = `${Math.random() * 100}vw`;
        body.appendChild(star);

        setTimeout(() => star.remove(), type === 'fast' ? 1200 : 4000);
    }

    // Estrellas fijas
    function createStaticStars(count) {
        for(let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            body.appendChild(star);
        }
    }

    setInterval(createFlower, 500);
    setInterval(() => createShootingStar('fast'), 1500);
    setInterval(() => createShootingStar('slow'), 3000);

    createStaticStars(100); // cantidad de estrellas de fondo
});
