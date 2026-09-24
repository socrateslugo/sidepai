const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('open', !isOpen);
    toggle.querySelector('.sr-only').textContent = isOpen
      ? 'Abrir menú de navegación'
      : 'Cerrar menú de navegación';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelector('.sr-only').textContent = 'Abrir menú de navegación';
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
