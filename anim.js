// ======= FLORES =======
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

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
    stem.appendChild(leafLeft);

    const leafRight = document.createElement('div');
    leafRight.classList.add('leaf', 'right');
    stem.appendChild(leafRight);

    flower.appendChild(stem);

    // Posición y animación aleatoria
    const startPosition = Math.random() * 100;
    const animationDuration = 10 + Math.random() * 10;
    const animationDelay = Math.random() * 5;

    flower.style.left = `${startPosition}vw`;
    flower.style.animationDuration = `${animationDuration}s`;
    flower.style.animationDelay = `${animationDelay}s`;

    body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, (animationDuration + animationDelay) * 1000);
  }

  setInterval(createFlower, 500);
});

// ======= ESTRELLAS =======
function createStars() {
  const starsContainer = document.getElementById('stars');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    starsContainer.appendChild(star);
  }
}
createStars();
