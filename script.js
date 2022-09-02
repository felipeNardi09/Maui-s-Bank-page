'use strict';
//VARIABLES:

const header = document.querySelector('.nav-header');

const links = document.querySelector('.links');

const learnMoreBtn = document.querySelector('.learn-more');

const section1 = document.querySelector('#section-1');

const lendingTabsDiv = document.querySelector('.lending-tabs-div');
const lendingTabBtn = document.querySelectorAll('.lending-tab-btn');
const lendingDescription = document.querySelectorAll('.lending-description');

const navBar = document.querySelector('.nav-header');

//FUNCTIONS SECTION

const creatingAndClosingCookieBtn = function (e) {
  const cookieMsg = document.createElement('div');

  cookieMsg.innerHTML =
    'We use cookies to provide  security and improve  your experience. <button type="button" class="btn cookie-close">Accept all  cookies</button>';
  cookieMsg.classList.add('cookie-msg');
  document.querySelector('.main-page-div').append(cookieMsg);

  document
    .querySelector('.cookie-close')
    .addEventListener('click', function () {
      cookieMsg.classList.add('hidden');
    });
};

const learnMoreScroll = function (e) {
  learnMoreBtn.addEventListener('click', function () {
    section1.scrollIntoView({ behavior: 'smooth' });
  });
};

const scrollNavBtns = function () {
  links.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('link')) {
      const goToSection = e.target.getAttribute('href');
      document
        .querySelector(goToSection)
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
};

const tabChanger = function () {
  lendingTabsDiv.addEventListener('click', function (e) {
    const clickedBtn = e.target.closest('.lending-tab-btn');

    if (!clickedBtn) return;

    lendingTabBtn.forEach(t => t.classList.remove('lending-tab-btn-active'));

    lendingDescription.forEach(d =>
      d.classList.remove('lending-description-active')
    );

    clickedBtn.classList.add('lending-tab-btn-active');

    document
      .querySelector(`.lending-description-${clickedBtn.dataset.tab}`)
      .classList.add('lending-description-active');
  });
};

const stickyNavigation = function () {
  const navHeight = navBar.getBoundingClientRect().height;

  const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) navBar.classList.add('sticky');
  };

  const observer = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });
  observer.observe(header);
};

//CALLING FUNCTIONS SECTION
creatingAndClosingCookieBtn();
learnMoreScroll();
scrollNavBtns();
tabChanger();
stickyNavigation();
