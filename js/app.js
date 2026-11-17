/**
 * Aura Luxury Travel - Main Application & Interactive Engine
 * Handles SPA routing, dynamic rendering, filtering, countdown timers,
 * reviews slider, booking calculations, modals, and notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  initNavigation();
  initHeroSlider();
  initCountdownTimers();
  initReviewsSlider();
  initFaqAccordion();
  initGalleryLightbox();
  initFilterEngines();
  initBookingEngine();
  initContactForm();
  initNewsletterForm();
  initWhatsAppWidget();
  initRouter();
}

/* ==========================================================================
   1. Router & Page Views
   ========================================================================== */
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  // Initial route
  handleRoute();
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const [route, queryString] = hash.split('?');
  const params = new URLSearchParams(queryString || '');

  // Hide all view sections
  const views = document.querySelectorAll('.page-view');
  views.forEach(v => v.style.display = 'none');

  // Update navigation active states
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === route) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close mobile drawer if open
  closeMobileMenu();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render view
  switch (route) {
    case '#about':
      showView('view-about');
      break;
    case '#destinations':
      showView('view-destinations');
      renderDestinationsGrid('all');
      break;
    case '#packages':
      showView('view-packages');
      const destFilter = params.get('dest');
      renderPackagesCatalog(destFilter || 'all');
      break;
    case '#package-details':
      showView('view-package-details');
      const pkgId = params.get('id');
      renderPackageDetailsPage(pkgId);
      break;
    case '#booking':
      showView('view-booking');
      const preSelectedPkg = params.get('pkg');
      if (preSelectedPkg) {
        const pkgSelect = document.getElementById('booking-package-select');
        if (pkgSelect) {
          pkgSelect.value = preSelectedPkg;
          updateBookingCalculations();
        }
      }
      break;
    case '#contact':
      showView('view-contact');
      break;
    case '#faq':
      showView('view-faq');
      break;
    case '#home':
    default:
      showView('view-home');
      renderPopularDestinations();
      renderFeaturedPackages();
      break;
  }
}

function showView(viewId) {
  const target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'block';
    target.classList.add('fadeIn');
  }
}

function navigateTo(hash) {
  window.location.hash = hash;
}

/* ==========================================================================
   2. Sticky Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.nav-hamburger');
  const menu = document.querySelector('.nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu?.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!menu?.contains(e.target) && !hamburger?.contains(e.target) && menu?.classList.contains('active')) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  document.querySelector('.nav-hamburger')?.classList.remove('active');
  document.querySelector('.nav-menu')?.classList.remove('active');
}

/* ==========================================================================
   3. Hero Background Slider
   ========================================================================== */
let heroSlideIndex = 0;
let heroSlideTimer = null;

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    heroSlideIndex = index;
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
      showSlide(idx);
      resetHeroInterval();
    });
  });

  function resetHeroInterval() {
    if (heroSlideTimer) clearInterval(heroSlideTimer);
    heroSlideTimer = setInterval(() => {
      let next = (heroSlideIndex + 1) % slides.length;
      showSlide(next);
    }, 6000);
  }

  resetHeroInterval();

  // Search box submit
  const searchBtn = document.getElementById('hero-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', handleHeroSearch);
  }
}

function handleHeroSearch() {
  const destInput = document.getElementById('search-destination')?.value.toLowerCase().trim();
  const dateInput = document.getElementById('search-date')?.value;
  const travelersInput = document.getElementById('search-travelers')?.value;

  if (destInput) {
    // Navigate to packages view with query
    navigateTo(`#packages?dest=${encodeURIComponent(destInput)}`);
  } else {
    navigateTo('#packages');
  }
}

/* ==========================================================================
   4. Popular Destinations Renderer
   ========================================================================== */
function renderPopularDestinations() {
  const container = document.getElementById('popular-destinations-grid');
  if (!container || !window.travelData) return;

  const popularIds = ['dubai', 'turkey', 'maldives', 'switzerland', 'greece', 'egypt'];
  const popularList = window.travelData.destinations.filter(d => popularIds.includes(d.id));

  container.innerHTML = popularList.map(dest => createDestinationCardHTML(dest)).join('');
}

function createDestinationCardHTML(dest) {
  return `
    <article class="destination-card" onclick="openDestinationModal('${dest.id}')">
      <div class="dest-img-container">
        <img class="dest-img" src="${dest.image}" alt="${dest.name} luxury travel" loading="lazy">
        <div class="dest-gradient-overlay"></div>
      </div>
      <div class="dest-top-meta">
        <span class="dest-badge">${dest.badge || dest.region}</span>
        <span class="dest-rating"><i class="fas fa-star"></i> ${dest.rating}</span>
      </div>
      <div class="dest-content">
        <span class="dest-country">${dest.country}</span>
        <h3 class="dest-name">${dest.name}</h3>
        <p class="dest-short-desc">${dest.subtitle}</p>
        <div class="dest-bottom-row">
          <div class="dest-price-box">
            <span class="dest-price-label">Starting From</span>
            <span class="dest-price-amount">$${dest.priceFrom.toLocaleString()}</span>
          </div>
          <button class="dest-btn-link" aria-label="View Details for ${dest.name}">
            View Details <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ==========================================================================
   5. Featured Packages Renderer
   ========================================================================== */
function renderFeaturedPackages() {
  const container = document.getElementById('featured-packages-grid');
  if (!container || !window.travelData) return;

  container.innerHTML = window.travelData.packages.map(pkg => createPackageCardHTML(pkg)).join('');
}

function createPackageCardHTML(pkg) {
  const stars = Array(pkg.hotelStars || 5).fill('<i class="fas fa-star"></i>').join('');
  const inclusions = pkg.includedServices.slice(0, 3).map(inc => `
    <div class="package-inclusion-item">
      <i class="fas fa-check-circle"></i>
      <span>${inc}</span>
    </div>
  `).join('');

  return `
    <article class="package-card">
      <div class="package-thumb">
        <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
        ${pkg.discount ? `<span class="package-discount-badge">${pkg.discount}</span>` : ''}
        <span class="package-category-badge">${pkg.category}</span>
      </div>
      <div class="package-body">
        <div class="package-meta-row">
          <span class="package-duration"><i class="far fa-clock"></i> ${pkg.days} Days / ${pkg.nights} Nights</span>
          <div class="package-hotel-stars">${stars}</div>
        </div>
        <h3 class="package-title">${pkg.name}</h3>
        <div class="package-hotel-name">
          <i class="fas fa-hotel"></i> ${pkg.hotel}
        </div>
        <div class="package-inclusions-list">
          ${inclusions}
        </div>
        <div class="package-footer">
          <div class="package-price-wrap">
            ${pkg.originalPrice ? `<span class="package-orig-price">$${pkg.originalPrice.toLocaleString()}</span>` : ''}
            <div class="package-final-price">$${pkg.price.toLocaleString()} <span>/ person</span></div>
          </div>
          <div class="package-btn-group">
            <button class="btn-details-sm" onclick="event.stopPropagation(); openPackageDetails('${pkg.id}')">
              Details
            </button>
            <button class="btn-book-sm" onclick="event.stopPropagation(); quickBookPackage('${pkg.id}')">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function quickBookPackage(pkgId) {
  navigateTo(`#booking?pkg=${pkgId}`);
}

function openPackageDetails(pkgId) {
  navigateTo(`#package-details?id=${pkgId}`);
}

/* ==========================================================================
   6. Countdown Timers for Special Offers
   ========================================================================== */
function initCountdownTimers() {
  const offersContainer = document.getElementById('special-offers-grid');
  if (!offersContainer || !window.travelData) return;

  offersContainer.innerHTML = window.travelData.specialOffers.map(offer => `
    <article class="offer-card">
      <div class="offer-img-box">
        <img src="${offer.image}" alt="${offer.title}" loading="lazy">
        <span class="offer-badge">${offer.discountBadge}</span>
      </div>
      <div class="offer-body">
        <h3 class="offer-title">${offer.title}</h3>
        <p class="offer-desc">${offer.description}</p>
        
        <div class="offer-countdown-box">
          <div class="countdown-label">
            <i class="fas fa-stopwatch"></i> Limited Time Offer Closes In:
          </div>
          <div class="countdown-timer-units" id="countdown-${offer.id}">
            <div class="countdown-unit">
              <span class="countdown-number" data-days>02</span>
              <span class="countdown-unit-text">Days</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-unit">
              <span class="countdown-number" data-hours>14</span>
              <span class="countdown-unit-text">Hours</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-unit">
              <span class="countdown-number" data-mins>35</span>
              <span class="countdown-unit-text">Mins</span>
            </div>
            <span class="countdown-separator">:</span>
            <div class="countdown-unit">
              <span class="countdown-number" data-secs>20</span>
              <span class="countdown-unit-text">Secs</span>
            </div>
          </div>
        </div>

        <div class="offer-pricing-row">
          <div class="offer-prices">
            <span class="offer-orig">$${offer.originalPrice.toLocaleString()}</span>
            <span class="offer-curr">$${offer.salePrice.toLocaleString()}</span>
          </div>
          <button class="btn-primary" style="padding: 0.65rem 1.4rem; font-size: 0.88rem;" onclick="quickBookPackage('${offer.packageId}')">
            Claim Offer <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Update timer every second
  function updateAllCountdowns() {
    window.travelData.specialOffers.forEach(offer => {
      const el = document.getElementById(`countdown-${offer.id}`);
      if (!el) return;

      const end = new Date(offer.endDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, end - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = el.querySelector('[data-days]');
      const hEl = el.querySelector('[data-hours]');
      const mEl = el.querySelector('[data-mins]');
      const sEl = el.querySelector('[data-secs]');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    });
  }

  updateAllCountdowns();
  setInterval(updateAllCountdowns, 1000);
}

/* ==========================================================================
   7. Customer Reviews Slider
   ========================================================================== */
let reviewSlideCurrent = 0;

function initReviewsSlider() {
  const track = document.getElementById('reviews-slider-track');
  const dotsContainer = document.getElementById('reviews-slider-dots');
  const prevBtn = document.getElementById('reviews-prev-btn');
  const nextBtn = document.getElementById('reviews-next-btn');

  if (!track || !window.travelData) return;

  track.innerHTML = window.travelData.testimonials.map(item => `
    <div class="review-card">
      <div class="review-card-inner">
        <div class="review-quote-icon">
          <i class="fas fa-quote-left"></i>
        </div>
        <p class="review-quote-text">"${item.quote}"</p>
        <div class="review-author-info">
          <div class="review-avatar-wrap">
            <img src="${item.avatar}" alt="${item.name}">
          </div>
          <h4 class="review-author-name">${item.name}</h4>
          <span class="review-author-meta">${item.role} • ${item.destination}</span>
          <div class="review-stars">
            ${Array(item.rating).fill('<i class="fas fa-star"></i>').join('')}
          </div>
          <span class="review-verified-badge"><i class="fas fa-certificate"></i> Verified Luxury Guest</span>
        </div>
      </div>
    </div>
  `).join('');

  const totalReviews = window.travelData.testimonials.length;

  if (dotsContainer) {
    dotsContainer.innerHTML = Array(totalReviews).fill(0).map((_, i) => `
      <div class="slider-dot ${i === 0 ? 'active' : ''}" data-review-dot="${i}"></div>
    `).join('');
  }

  function goToSlide(idx) {
    reviewSlideCurrent = (idx + totalReviews) % totalReviews;
    track.style.transform = `translateX(-${reviewSlideCurrent * 100}%)`;

    document.querySelectorAll('[data-review-dot]').forEach((d, i) => {
      d.classList.toggle('active', i === reviewSlideCurrent);
    });
  }

  prevBtn?.addEventListener('click', () => goToSlide(reviewSlideCurrent - 1));
  nextBtn?.addEventListener('click', () => goToSlide(reviewSlideCurrent + 1));

  document.querySelectorAll('[data-review-dot]').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-review-dot') || '0', 10);
      goToSlide(idx);
    });
  });

  // Auto rotate testimonials every 7 seconds
  setInterval(() => {
    goToSlide(reviewSlideCurrent + 1);
  }, 7000);
}

/* ==========================================================================
   8. Instagram / Travel Gallery & Lightbox
   ========================================================================== */
function initGalleryLightbox() {
  const container = document.getElementById('gallery-grid-container');
  if (!container || !window.travelData) return;

  container.innerHTML = window.travelData.gallery.map(item => `
    <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}')">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-insta-icon"><i class="fab fa-instagram"></i></div>
        <div class="gallery-caption">
          <h4>${item.title}</h4>
          <span>${item.category}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function openLightbox(imgSrc, title) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  if (modal && img) {
    img.src = imgSrc;
    if (caption) caption.textContent = title;
    modal.classList.add('active');
  }
}

function closeLightbox() {
  document.getElementById('lightbox-modal')?.classList.remove('active');
}

/* ==========================================================================
   9. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faq-accordion-container');
  if (!container || !window.travelData) return;

  container.innerHTML = window.travelData.faqs.map((faq, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question-btn" onclick="toggleFaq(this)">
        <span>${faq.question}</span>
        <div class="faq-icon-indicator"><i class="fas fa-chevron-down"></i></div>
      </button>
      <div class="faq-answer-panel" style="${idx === 0 ? 'max-height: 400px;' : ''}">
        <div class="faq-answer-inner">${faq.answer}</div>
      </div>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const panel = item.querySelector('.faq-answer-panel');
  const isActive = item.classList.contains('active');

  // Close all other faqs in the same container
  const parent = item.parentElement;
  parent.querySelectorAll('.faq-item').forEach(other => {
    other.classList.remove('active');
    const p = other.querySelector('.faq-answer-panel');
    if (p) p.style.maxHeight = null;
  });

  if (!isActive) {
    item.classList.add('active');
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }
}

/* ==========================================================================
   10. Destination Modal & Filtering
   ========================================================================== */
function openDestinationModal(destId) {
  const dest = window.travelData.destinations.find(d => d.id === destId);
  if (!dest) return;

  const modal = document.getElementById('destination-modal');
  if (!modal) return;

  document.getElementById('dest-modal-title').textContent = `${dest.name}, ${dest.country}`;
  document.getElementById('dest-modal-subtitle').textContent = dest.subtitle;
  document.getElementById('dest-modal-img').src = dest.image;
  document.getElementById('dest-modal-desc').textContent = dest.description;
  document.getElementById('dest-modal-price').textContent = `$${dest.priceFrom.toLocaleString()}`;
  document.getElementById('dest-modal-season').textContent = dest.bestSeason;
  document.getElementById('dest-modal-duration').textContent = dest.duration;

  const highlightsEl = document.getElementById('dest-modal-highlights');
  if (highlightsEl) {
    highlightsEl.innerHTML = dest.highlights.map(h => `
      <li style="display: flex; gap: 0.6rem; margin-bottom: 0.6rem; font-size: 0.94rem;">
        <i class="fas fa-check" style="color: var(--color-teal-primary); margin-top: 4px;"></i>
        <span>${h}</span>
      </li>
    `).join('');
  }

  const bookBtn = document.getElementById('dest-modal-book-btn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      closeDestinationModal();
      navigateTo(`#packages?dest=${dest.id}`);
    };
  }

  modal.classList.add('active');
}

function closeDestinationModal() {
  document.getElementById('destination-modal')?.classList.remove('active');
}

/* ==========================================================================
   11. Destinations Page Catalog & Filter
   ========================================================================== */
function renderDestinationsGrid(filterRegion = 'all', searchQuery = '') {
  const container = document.getElementById('all-destinations-grid');
  if (!container || !window.travelData) return;

  let list = window.travelData.destinations;

  if (filterRegion !== 'all') {
    list = list.filter(d => d.region.toLowerCase().includes(filterRegion.toLowerCase()));
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(d => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fas fa-compass" style="font-size: 3rem; color: var(--color-gold-primary); margin-bottom: 1rem;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.6rem;">No Destinations Found</h3>
        <p style="color: var(--color-text-muted);">Try adjusting your search criteria or filter category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(dest => createDestinationCardHTML(dest)).join('');
}

/* ==========================================================================
   12. Packages Catalog & Advanced Filtering
   ========================================================================== */
function renderPackagesCatalog(destFilter = 'all', sortType = 'featured') {
  const container = document.getElementById('all-packages-grid');
  if (!container || !window.travelData) return;

  let list = [...window.travelData.packages];

  if (destFilter && destFilter !== 'all') {
    list = list.filter(p => p.destinationId.toLowerCase() === destFilter.toLowerCase() || p.destination.toLowerCase().includes(destFilter.toLowerCase()));
  }

  if (sortType === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortType === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortType === 'duration') {
    list.sort((a, b) => b.days - a.days);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fas fa-suitcase-rolling" style="font-size: 3rem; color: var(--color-teal-primary); margin-bottom: 1rem;"></i>
        <h3 style="font-family: var(--font-heading); font-size: 1.6rem;">No Packages Found</h3>
        <p style="color: var(--color-text-muted);">We can customize a private itinerary for this destination. Contact our concierge!</p>
        <button class="btn-primary" style="margin-top: 1.5rem;" onclick="navigateTo('#contact')">Contact Concierge</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(pkg => createPackageCardHTML(pkg)).join('');
}

/* ==========================================================================
   13. Package Details View Renderer
   ========================================================================== */
function renderPackageDetailsPage(pkgId) {
  const pkg = window.travelData.packages.find(p => p.id === pkgId) || window.travelData.packages[0];
  if (!pkg) return;

  document.getElementById('pkg-detail-title').textContent = pkg.name;
  document.getElementById('pkg-detail-hotel').textContent = `${pkg.hotel} (${pkg.hotelStars}-Star Resort)`;
  document.getElementById('pkg-detail-duration').textContent = `${pkg.days} Days / ${pkg.nights} Nights`;
  document.getElementById('pkg-detail-price').textContent = `$${pkg.price.toLocaleString()}`;
  document.getElementById('pkg-detail-img').src = pkg.image;

  // Inclusions
  const incEl = document.getElementById('pkg-detail-inclusions');
  if (incEl) {
    incEl.innerHTML = pkg.includedServices.map(item => `
      <li style="display: flex; gap: 0.6rem; margin-bottom: 0.75rem; font-size: 0.94rem;">
        <i class="fas fa-check-circle" style="color: var(--color-teal-primary); margin-top: 4px;"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Exclusions
  const excEl = document.getElementById('pkg-detail-exclusions');
  if (excEl) {
    excEl.innerHTML = pkg.excludedServices.map(item => `
      <li style="display: flex; gap: 0.6rem; margin-bottom: 0.75rem; font-size: 0.94rem; color: var(--color-text-muted);">
        <i class="fas fa-times-circle" style="color: #94A3B8; margin-top: 4px;"></i>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Itinerary timeline
  const timelineEl = document.getElementById('pkg-detail-timeline');
  if (timelineEl) {
    timelineEl.innerHTML = pkg.itinerary.map(item => `
      <div class="timeline-day-item">
        <div class="timeline-marker"></div>
        <h4 class="timeline-day-title">Day ${item.day}: ${item.title}</h4>
        <p class="timeline-day-desc">${item.detail}</p>
      </div>
    `).join('');
  }

  // Book this package CTA
  const bookBtn = document.getElementById('pkg-detail-book-btn');
  if (bookBtn) {
    bookBtn.onclick = () => {
      quickBookPackage(pkg.id);
    };
  }
}

/* ==========================================================================
   14. Filter Event Listeners Setup
   ========================================================================== */
function initFilterEngines() {
  // Destinations region filter pills
  const destPills = document.querySelectorAll('[data-dest-filter]');
  destPills.forEach(pill => {
    pill.addEventListener('click', () => {
      destPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const region = pill.getAttribute('data-dest-filter') || 'all';
      renderDestinationsGrid(region);
    });
  });

  // Destinations search input
  const destSearchInput = document.getElementById('dest-search-input');
  destSearchInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    renderDestinationsGrid('all', val);
  });

  // Packages filter pills & sort dropdown
  const pkgPills = document.querySelectorAll('[data-pkg-filter]');
  const pkgSortSelect = document.getElementById('pkg-sort-select');

  pkgPills.forEach(pill => {
    pill.addEventListener('click', () => {
      pkgPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const dest = pill.getAttribute('data-pkg-filter') || 'all';
      renderPackagesCatalog(dest, pkgSortSelect?.value || 'featured');
    });
  });

  pkgSortSelect?.addEventListener('change', () => {
    const activePill = document.querySelector('[data-pkg-filter].active');
    const dest = activePill?.getAttribute('data-pkg-filter') || 'all';
    renderPackagesCatalog(dest, pkgSortSelect.value);
  });
}

/* ==========================================================================
   15. Interactive Booking Engine & Calculation
   ========================================================================== */
function initBookingEngine() {
  const pkgSelect = document.getElementById('booking-package-select');
  const adultsInput = document.getElementById('booking-adults');
  const childrenInput = document.getElementById('booking-children');
  const tierSelect = document.getElementById('booking-tier-select');
  const addonCheckboxes = document.querySelectorAll('.booking-addon-checkbox');
  const form = document.getElementById('luxury-booking-form');

  // Populate packages dropdown
  if (pkgSelect && window.travelData) {
    pkgSelect.innerHTML = `
      <option value="">-- Choose a Curated Itinerary --</option>
      ${window.travelData.packages.map(p => `
        <option value="${p.id}" data-base-price="${p.price}">${p.name} ($${p.price.toLocaleString()} / person)</option>
      `).join('')}
      <option value="custom" data-base-price="2500">Custom Tailored Private Journey ($2,500 / person base)</option>
    `;
  }

  // Attach change events
  [pkgSelect, adultsInput, childrenInput, tierSelect].forEach(input => {
    input?.addEventListener('change', updateBookingCalculations);
  });
  addonCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateBookingCalculations);
  });

  // Form submission
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitLuxuryBooking();
  });
}

function updateBookingCalculations() {
  const pkgSelect = document.getElementById('booking-package-select');
  const adults = parseInt(document.getElementById('booking-adults')?.value || '2', 10);
  const children = parseInt(document.getElementById('booking-children')?.value || '0', 10);
  const tierSelect = document.getElementById('booking-tier-select');
  const addonCheckboxes = document.querySelectorAll('.booking-addon-checkbox:checked');

  const selectedOpt = pkgSelect?.options[pkgSelect.selectedIndex];
  const basePrice = parseInt(selectedOpt?.getAttribute('data-base-price') || '2500', 10);
  const tierMultiplier = parseFloat(tierSelect?.value || '1.0');

  // Calculate guests price
  const guestFactor = adults + (children * 0.65);
  let subtotal = basePrice * guestFactor * tierMultiplier;

  // Add-ons sum
  let addonsSum = 0;
  addonCheckboxes.forEach(cb => {
    addonsSum += parseInt(cb.getAttribute('data-addon-price') || '0', 10);
  });

  const total = Math.round(subtotal + addonsSum);

  // Update summary UI elements
  const pkgNameEl = document.getElementById('summary-package-name');
  const guestsEl = document.getElementById('summary-guests-count');
  const basePriceEl = document.getElementById('summary-base-rate');
  const addonsTotalEl = document.getElementById('summary-addons-rate');
  const grandTotalEl = document.getElementById('summary-grand-total');

  if (pkgNameEl) pkgNameEl.textContent = selectedOpt?.text.split('(')[0] || 'Select a trip';
  if (guestsEl) guestsEl.textContent = `${adults} Adults${children > 0 ? `, ${children} Children` : ''}`;
  if (basePriceEl) basePriceEl.textContent = `$${Math.round(subtotal).toLocaleString()}`;
  if (addonsTotalEl) addonsTotalEl.textContent = `$${addonsSum.toLocaleString()}`;
  if (grandTotalEl) grandTotalEl.textContent = `$${total.toLocaleString()}`;
}

function submitLuxuryBooking() {
  const name = document.getElementById('booking-fullname')?.value;
  const email = document.getElementById('booking-email')?.value;
  const phone = document.getElementById('booking-phone')?.value;
  const date = document.getElementById('booking-date')?.value;
  const pkgSelect = document.getElementById('booking-package-select');
  const grandTotal = document.getElementById('summary-grand-total')?.textContent || '$0';

  if (!name || !email || !date || !pkgSelect?.value) {
    showToast('Please fill in all required fields and choose a journey.', 'fa-exclamation-circle');
    return;
  }

  // Generate Reference
  const refCode = 'AL-' + Math.floor(100000 + Math.random() * 900000);

  // Populate Voucher Modal
  document.getElementById('voucher-ref-number').textContent = refCode;
  document.getElementById('voucher-guest-name').textContent = name;
  document.getElementById('voucher-package').textContent = pkgSelect.options[pkgSelect.selectedIndex].text.split('(')[0];
  document.getElementById('voucher-travel-date').textContent = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('voucher-total-cost').textContent = grandTotal;
  document.getElementById('voucher-email').textContent = email;

  // Show Voucher
  document.getElementById('booking-voucher-modal')?.classList.add('active');
  showToast('Booking request received! Your concierge voucher is generated.', 'fa-check-circle');
}

function closeVoucherModal() {
  document.getElementById('booking-voucher-modal')?.classList.remove('active');
}

function printVoucher() {
  window.print();
}

/* ==========================================================================
   16. Contact Form & Newsletter
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    showToast(`Thank you, ${name}! Your inquiry has been routed to our Senior VIP Concierge Desk.`, 'fa-envelope-open-text');
    form.reset();
  });
}

function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && input.value) {
        showToast('Welcome to the Aura Inner Circle! Check your inbox for our 2026 Private World Guide.', 'fa-paper-plane');
        input.value = '';
      }
    });
  });
}

/* ==========================================================================
   17. WhatsApp Floating Concierge Widget
   ========================================================================== */
function initWhatsAppWidget() {
  const btn = document.getElementById('wa-float-btn');
  const popup = document.getElementById('wa-popup-chat');
  const closeChat = document.getElementById('wa-close-chat');

  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    popup?.classList.toggle('active');
  });

  closeChat?.addEventListener('click', (e) => {
    e.stopPropagation();
    popup?.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!popup?.contains(e.target) && !btn?.contains(e.target)) {
      popup?.classList.remove('active');
    }
  });
}

function openDirectWhatsApp(message = "Hello! I am inquiring about a luxury vacation package with Aura Luxury Travel.") {
  const phone = window.travelData?.company?.whatsapp || "18008922872";
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* ==========================================================================
   18. Toast Notification System
   ========================================================================== */
function showToast(message, iconClass = 'fa-check-circle') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'luxury-toast';
  toast.innerHTML = `
    <i class="fas ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Global modal background click helper
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});
