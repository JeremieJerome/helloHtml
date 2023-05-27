// Sélectionner toutes les cartes
const cards = document.querySelectorAll('.card');

// Ajouter un gestionnaire d'événement à chaque carte
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Inverser la classe "flipped" lorsque la carte est cliquée
    card.classList.toggle('flipped');
  });
});
