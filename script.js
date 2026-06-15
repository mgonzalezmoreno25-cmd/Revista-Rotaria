const mobileToggle = document.querySelector('.mobile-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileToggle && mainNav) {
  mobileToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const parent = toggle.closest('.has-submenu');
    parent?.classList.toggle('open');
  });
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const section = document.querySelector(targetId);
      if (section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        mainNav.classList.remove('open');
      }
    }
  });
});
