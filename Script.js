// Sélectionne les éléments du menu mobile
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Affiche ou masque le menu mobile lors du clic sur le bouton
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Optionnel : Fermer le menu quand on clique en dehors
document.addEventListener('click', (e) => {
  if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('show');
  }
});