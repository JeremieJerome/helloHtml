const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
      // Change the color if the card is 'flipped'
      card.style.backgroundColor = 'pink'; // You can change 'red' to any color you want
    } else {
      card.style.backgroundImage = 'url(logolol.jpg)'; // replace with the original image
    }
  });
});
