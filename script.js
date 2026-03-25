document.addEventListener('DOMContentLoaded', () => {
    // Ripple on search button
    const btnSearch = document.querySelector('.btn-search');
    if (btnSearch) {
      btnSearch.addEventListener('click', function(e) {
        const ex = this.querySelector('.ripple'); if (ex) ex.remove();
        const c = document.createElement('span');
        const d = Math.max(this.clientWidth, this.clientHeight), r = d / 2;
        const rect = this.getBoundingClientRect();
        c.style.width = c.style.height = `${d}px`;
        c.style.left = `${e.clientX - rect.left - r}px`;
        c.style.top  = `${e.clientY - rect.top  - r}px`;
        c.classList.add('ripple'); this.appendChild(c);
      });
    }
    // Enter key
    ['searchQuery','locationInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('keydown', e => { if (e.key==='Enter') handleSearch(); });
    });
    // Animated counters
    function animateCounter(el, target, duration=1800) {
      const start = performance.now();
      function update(now) {
        const p = Math.min((now-start)/duration,1);
        const eased = 1-Math.pow(1-p,3);
        el.textContent = Math.floor(eased*target).toLocaleString('en-IN') + (el.dataset.suffix||'');
        if (p<1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }
    const so = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const n = en.target.querySelector('.stat-number');
          if (n && !n.dataset.animated) { n.dataset.animated='true'; animateCounter(n, parseFloat(n.dataset.target)); }
        }
      });
    }, {threshold:0.4});
    document.querySelectorAll('.stat-item').forEach(el => so.observe(el));
    // Scroll fade-up
    const fo = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('anim-fade-up'); fo.unobserve(en.target); } });
    }, {threshold:0.1});
    document.querySelectorAll('.topic-card,.sidebar-card').forEach(el => { el.style.opacity='0'; fo.observe(el); });
    // Navbar shadow
    const nb = document.querySelector('.navbar');
    window.addEventListener('scroll', () => nb?.classList.toggle('scrolled', window.scrollY>10));
  });

  let _tt = null;
  function showToast(msg) {
    let t = document.getElementById('globalToast');
    if (!t) { t = document.createElement('div'); t.id='globalToast'; t.className='toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(_tt); _tt = setTimeout(() => t.classList.remove('show'), 3000);
  }
  function handleSearch() {
    const q = document.getElementById('searchQuery').value.trim();
    const loc = document.getElementById('locationInput').value.trim();
    if (!q) { document.getElementById('searchQuery').focus(); showToast('Please enter a legal issue or situation.'); return; }
    showToast(`🔍 Searching: "${q}"${loc?' · '+loc:''}`);
  }
  function quickAction(type) {
    if (type==='situation') {
      const el = document.getElementById('searchQuery');
      el.focus(); el.placeholder='Describe your situation in detail…';
      el.scrollIntoView({behavior:'smooth',block:'center'}); showToast('💬 Describe your situation below');
    } else {
      document.querySelector('.featured-section')?.scrollIntoView({behavior:'smooth'});
      showToast('📚 Scroll down to browse all legal topics');
    }
  }
  function openSection(s) {
    const m={schemes:'Government Schemes',rights:'Know Your Rights',lawyer:'Find a Lawyer'};
    showToast('🚀 Opening: '+(m[s]||s));
  }
  function selectTopic(t) {
    const el=document.getElementById('searchQuery');
    el.value=t; el.focus(); el.scrollIntoView({behavior:'smooth',block:'center'});
    showToast(`📌 Topic selected: ${t}`);
  }
  function browseTopic(t) {
    const el=document.getElementById('searchQuery');
    el.value=t; el.scrollIntoView({behavior:'smooth',block:'center'});
    showToast(`🗂️ Browsing: ${t}`);
  }
  function getEmergencyHelp() { showToast('🆘 Connecting you with emergency legal aid…'); }