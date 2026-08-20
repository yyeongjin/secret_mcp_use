const header = document.querySelector('[data-header]');
const menu = document.querySelector('[data-mobile-menu]');
const menuOpen = document.querySelector('[data-menu-open]');
const menuCloseButtons = [...document.querySelectorAll('[data-menu-close]')];
const menuPanel = menu?.querySelector('.mobile-menu__panel');
const backToTop = document.querySelector('[data-back-to-top]');
const localeButtons = [...document.querySelectorAll('[data-locale]')];
const gameTabs = [...document.querySelectorAll('[data-game]')];
const gameArtwork = document.querySelector('.game-artwork');
const gameImage = document.querySelector('[data-game-image]');
const gameTitle = document.querySelector('[data-game-title]');
const gamePlatform = document.querySelector('[data-game-platform]');
const relatedSites = document.querySelector('[data-related-sites]');

const games = {
  odin: {
    title: '오딘: 발할라 라이징',
    platform: 'PC · MOBILE',
    image: './assets/game-odin.jpg',
    alt: '오딘: 발할라 라이징 콘셉트 아트',
  },
  archeage: {
    title: '아키에이지 워',
    platform: 'PC · MOBILE',
    image: './assets/hero-world.jpg',
    alt: '아키에이지 워 세계를 연상시키는 비행 탐험 장면',
  },
  battlegrounds: {
    title: '배틀그라운드',
    platform: 'PC · CONSOLE',
    image: './assets/sustainability.jpg',
    alt: '배틀그라운드 협동 플레이를 상징하는 야외 팀 장면',
  },
  poe: {
    title: '패스 오브 엑자일 2',
    platform: 'PC · CONSOLE',
    image: './assets/game-odin.jpg',
    alt: '패스 오브 엑자일 2를 연상시키는 어두운 판타지 도시',
  },
  chrono: {
    title: '크로노오디세이',
    platform: 'PC · CONSOLE',
    image: './assets/crew-studio.jpg',
    alt: '크로노오디세이 세계를 제작하는 크루의 스튜디오',
  },
};

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function setMenu(open) {
  if (!menu || !menuOpen) return;
  menu.classList.toggle('is-open', open);
  menu.setAttribute('aria-hidden', String(!open));
  menuOpen.setAttribute('aria-expanded', String(open));
  menuOpen.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) {
    menuPanel?.querySelector('button, a')?.focus();
  } else if (document.activeElement && menu.contains(document.activeElement)) {
    menuOpen.focus();
  }
}

menuOpen?.addEventListener('click', () => setMenu(true));
menuCloseButtons.forEach((button) => button.addEventListener('click', () => setMenu(false)));
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.classList.contains('is-open')) setMenu(false);
  if (event.key !== 'Tab' || !menu?.classList.contains('is-open') || !menuPanel) return;
  const focusable = [...menuPanel.querySelectorAll('button, a[href]')];
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
});

function handleScroll() {
  const scrolled = window.scrollY > 36;
  header?.classList.toggle('is-scrolled', scrolled);
  backToTop?.classList.toggle('is-visible', window.scrollY > 520);
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  document.querySelector('.skip-link')?.focus({ preventScroll: true });
});

localeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const labels = [...document.querySelectorAll('[data-locale-label]')];
    const next = labels[0]?.textContent === 'KR' ? 'EN' : 'KR';
    labels.forEach((label) => { label.textContent = next; });
  });
});

gameTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selected = games[tab.dataset.game];
    if (!selected || !gameImage || !gameTitle || !gamePlatform) return;
    gameTabs.forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    gameArtwork?.classList.add('is-changing');
    window.setTimeout(() => {
      gameImage.src = selected.image;
      gameImage.alt = selected.alt;
      gameTitle.textContent = selected.title;
      gamePlatform.textContent = selected.platform;
      gameArtwork?.classList.remove('is-changing');
    }, 120);
  });
});

relatedSites?.addEventListener('click', () => {
  const expanded = relatedSites.getAttribute('aria-expanded') === 'true';
  relatedSites.setAttribute('aria-expanded', String(!expanded));
});

window.addEventListener('DOMContentLoaded', refreshIcons);
