gsap.registerPlugin(Flip);

// Nav
const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach((link) => {
  link.addEventListener('click', () => {
    // Turn the navs to blue when clicked
    gsap.to(links, { color: '#252525' });
    if (document.activeElement === link) {
      gsap.to(link, { color: '#385ae0' });
    }

    // Move the line under the nav
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1,
      absolute: true,
      ease: 'elastic.out(1,0.5)',
    });
  });
});

// card
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    // Get state
    const state = Flip.getState(cards);

    // Add the active calss to the clicked one and
    // add inactive to teh others
    const isCardActive = card.classList.contains('active');

    cards.forEach((otherCard, otherIds) => {
      otherCard.classList.remove('active');
      otherCard.classList.remove('is-inactive');
      if (!isCardActive && index !== otherIds) {
        otherCard.classList.add('is-inactive');
      }
    });

    if (!isCardActive) card.classList.add('active');

    Flip.from(state, {
      duration: 1,
      ease: 'expo.out',
      absolute: true,
    });
  });
});
