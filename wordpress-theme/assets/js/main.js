/**
 * AzulBay Theme — Main JS
 */

/* ===== Navbar scroll effect ===== */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
})();

/* ===== Mobile menu ===== */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const isOpen = menu.classList.toggle('open');
  menuIcon.style.display = isOpen ? 'none' : 'block';
  closeIcon.style.display = isOpen ? 'block' : 'none';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  menu.classList.remove('open');
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
}

/* ===== FAQ Accordion ===== */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(function (el) {
    el.classList.remove('open');
  });
  // Toggle current
  if (!wasOpen) item.classList.add('open');
}

/* ===== Revenue Estimator Modal ===== */
function openEstimator() {
  document.getElementById('estimator-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEstimator() {
  document.getElementById('estimator-modal').classList.remove('open');
  document.body.style.overflow = '';
  resetEstimator();
}

function resetEstimator() {
  document.getElementById('est-form').style.display = '';
  document.getElementById('est-loading').style.display = 'none';
  document.getElementById('est-result').style.display = 'none';
}

function calculateEstimate() {
  var address = document.getElementById('est-address').value.trim();
  var rooms = parseInt(document.getElementById('est-rooms').value);
  var condition = document.getElementById('est-condition').value;
  var months = parseInt(document.getElementById('est-availability').value);

  if (!address || !rooms || !condition || !months) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Show loading
  document.getElementById('est-form').style.display = 'none';
  document.getElementById('est-loading').style.display = 'block';

  setTimeout(function () {
    var result = estimateRevenue(rooms, condition, months);
    document.getElementById('est-result-address').textContent = address;
    document.getElementById('est-result-range').textContent = formatEUR(result.low) + ' — ' + formatEUR(result.high);
    document.getElementById('est-result-monthly').textContent =
      'Soit ' + formatEUR(Math.round(result.low / 12)) + ' à ' + formatEUR(Math.round(result.high / 12)) + ' / mois';

    document.getElementById('est-loading').style.display = 'none';
    document.getElementById('est-result').style.display = 'block';
  }, 1800);
}

function estimateRevenue(rooms, condition, months) {
  var baseRate = {
    'neuf':      { 1: 85, 2: 110, 3: 140, 4: 170, 5: 200 },
    'bon':       { 1: 70, 2: 90,  3: 115, 4: 140, 5: 165 },
    'moyen':     { 1: 55, 2: 72,  3: 90,  4: 110, 5: 130 },
    'a-renover': { 1: 40, 2: 55,  3: 70,  4: 85,  5: 100 },
  };
  var rate = (baseRate[condition] && baseRate[condition][rooms]) || 80;
  var occupancy = 0.55;
  var nightsPerMonth = 30;
  var monthlyRevenue = rate * nightsPerMonth * occupancy;
  var annualRevenue = monthlyRevenue * months;
  return {
    low: Math.round(annualRevenue * 0.85),
    high: Math.round(annualRevenue * 1.1),
  };
}

function formatEUR(n) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}

// Close modal on overlay click
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'estimator-modal') {
    closeEstimator();
  }
});

// Close modal on Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeEstimator();
});

/* ===== Intersection Observer for fade-up animations ===== */
(function () {
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '-30px' }
  );

  document.querySelectorAll('.fade-up').forEach(function (el) {
    observer.observe(el);
  });
})();
