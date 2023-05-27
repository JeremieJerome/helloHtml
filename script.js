const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
      card.style.backgroundImage = 'url(imageslol.jpg)'; // replace with your "flipped" image
    } else {
      card.style.backgroundImage = 'url(logolol.jpg)'; // replace with the original image
    }
  });
});
