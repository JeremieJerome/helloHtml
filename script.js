const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle the 'flipped' class and change the color
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
      // Change the color if the card is 'flipped'
      card.style.backgroundColor = 'yellow'; // You can change 'red' to any color you want
    } else {
      // Reset the color when the card is not 'flipped'
      card.style.backgroundColor = ''; // Resets to original color
    }
  });
});
