const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
      // Change the color if the card is 'flipped'
      card.style.backgroundColor = 'url('chemin_vers_l'image_de_la_patate')'; // You can change 'red' to any color you want
    } else {
      card.style.backgroundImage = 'url('chemin_vers_l'image_de_la_patate''; // replace with the original image
    }
  });
});
