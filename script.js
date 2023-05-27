const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
      // Change the image if the card is 'flipped'
      card.style.backgroundColor= 'pink';
    } else {
      // Reset the image when the card is not 'flipped'
      card.style.backgroundColor = 'purple';
    }
  });
});

