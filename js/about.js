// Compteur animé
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        const speed = 120000; // Durée de l'animation en millisecondes
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
});