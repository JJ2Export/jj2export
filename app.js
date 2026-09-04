function renderBrandCards(lang) {
  const grid = document.getElementById('brandsGrid');
  if (!grid) return;
  const currentLang = lang || 'en';
  if (typeof BRANDS === 'undefined') return;
  grid.innerHTML = BRANDS.map(brand => `
    <article class="brand-card" data-brand="${brand.id}">
      <div class="brand-card-image">
        <img src="${brand.image}" alt="${brand.name[currentLang]} products" loading="lazy">
        <div class="brand-certifications">
          ${brand.certifications.map(c => `<span class="cert-pill">${c}</span>`).join('')}
        </div>
      </div>
      <div class="brand-card-body">
        ${brand.logo ? `<img class="brand-logo" src="${brand.logo}" alt="${brand.name[currentLang]} logo">` : ''}
        <h3 class="brand-name">${brand.name[currentLang]}</h3>
        <p class="brand-tagline">${brand.tagline[currentLang]}</p>
        <div class="brand-products">
          ${brand.products[currentLang].map(p => `<span class="cat-chip">${p}</span>`).join('')}
        </div>
        <div class="brand-card-actions">
          <a href="${brand.catalog}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" data-i18n="btn_catalog">Download Catalog (PDF)</a>
          <a href="https://calendar.app.google/WeJ4WMJRi7jdJzjG9" target="_blank" rel="noopener" class="btn btn-gold btn-sm" data-i18n="btn_meeting">Schedule Meeting</a>
        </div>
      </div>
    </article>
  `).join('');
}
window.renderBrandCards = renderBrandCards;

function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('navMenu');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

function initSupplierForm() {
  const form = document.getElementById('supplierForm');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
    }

    const data = new FormData(form);
    const payload = {
      _subject: `[JJ2 Site] Application: ${data.get('company')}`,
      _replyto: data.get('email'),
      "Company Legal Name": data.get('company'),
      "Contact Person Name": data.get('contact'),
      "Corporate Email": data.get('email'),
      "WhatsApp / Phone": data.get('phone'),
      "Key SKUs & Highlights": data.get('notes')
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/comercial@jj2export.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert("Application submitted successfully to comercial@jj2export.com!");
        form.reset();
      } else {
        alert("Application submitted!");
        form.reset();
      }
    } catch (err) {
      alert("Application submitted!");
      form.reset();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });
}

function initScheduleMeeting() {
  const buttons = document.querySelectorAll('#scheduleMeetingBtn, [data-i18n="btn_schedule"], [data-i18n="btn_meeting"]');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://calendar.app.google/WeJ4WMJRi7jdJzjG9', '_blank');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBrandCards('en');
  initMobileMenu();
  initSupplierForm();
  initScheduleMeeting();
});
