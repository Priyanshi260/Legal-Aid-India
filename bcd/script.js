const toastEl = document.getElementById('toast');
const schemeModalOverlay = document.getElementById('schemeModalOverlay');
const schemeModal = document.getElementById('schemeModal');
const modalIcon = document.getElementById('modalIcon');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalBenefits = document.getElementById('modalBenefits');
const modalEligibility = document.getElementById('modalEligibility');
const modalApplyLink = document.getElementById('modalApplyLink');
const schemeList = document.getElementById('schemeList');

const exploreSchemes = [
  {name:'PM Internship Scheme',desc:'Provides internship placements in top firms.',link:'https://pminternship.mca.gov.in/login/'},
  {name:'Startup India',desc:'Support for startups with funding and policies.',link:'https://www.startupindia.gov.in/'},
  {name:'Ayushman Bharat',desc:'Health insurance for poor families.',link:'https://pmjay.gov.in/'},
  {name:'PM Awas Yojana',desc:'Affordable housing for urban/rural families.',link:'https://pmaymis.gov.in/'},
  {name:'Sukanya Samriddhi Yojana',desc:'Savings scheme for girl child.',link:'https://www.indiapost.gov.in/'},
  {name:'Digital India',desc:'Digital access and services initiative.',link:'https://www.digitalindia.gov.in/'},
];

function isElement(el) { return el !== null && el !== undefined; }


const schemes = {
  'PM Internship Scheme': {
    icon:'🎓', category:'Employment', description:'Hands-on internships for students with stipend and mentoring.',
    benefits:['₹5,000 stipend', 'Real corporate exposure', 'Certificate on completion'],
    eligibility:['Indian students 21-24', 'Graduation degree', 'No full-time employment'],
    applyUrl:'https://pminternship.mca.gov.in/login/'
  },
  'Startup India': {
    icon:'🚀', category:'Finance', description:'Financial support, tax benefits and ecosystem support for new startups.',
    benefits:['Tax benefits', 'Easy compliance', 'Mentorship and funding support'],
    eligibility:['Registered entity', 'Turnover < ₹100Cr', 'Age < 10 years'],
    applyUrl:'https://www.startupindia.gov.in/'
  },
  'Ayushman Bharat': {
    icon:'💊', category:'Health', description:'Health insurance cover up to ₹5 lakh per family for eligible families.',
    benefits:['Cashless treatment', 'Covers pre/post hospitalization', 'Covers 1350+ procedures'],
    eligibility:['SECC 2011 eligible families', 'Below-poverty-line', 'Rural + Urban poor'],
    applyUrl:'https://pmjay.gov.in/'
  },
  'PM Awas Yojana': {
    icon:'🏠', category:'Finance', description:'Subsidy support for home construction or purchase for low-income families.',
    benefits:['Home loan subsidy', 'Women co-ownership', 'Affordable loans'],
    eligibility:['EWS/LIG families', 'Income criteria met', 'No existing pucca house'],
    applyUrl:'https://pmaymis.gov.in/'
  },
  'National Scholarship Portal': {
    icon:'📚', category:'Education', description:'One-stop portal for central & state scholarships at all academic levels.',
    benefits:['Direct Benefit Transfer', 'Merit and means based', 'Wide coverage of scholarships'],
    eligibility:['Students in recognized institutions', 'Income criteria per scheme', 'Merit requirements'],
    applyUrl:'https://scholarships.gov.in/'
  },
  'PM Ujjwala Yojana': {
    icon:'🔥', category:'Women & Child', description:'Free LPG connections for low-income women to improve health and safety.',
    benefits:['Free connection', 'Subsidized refills', 'Reduced indoor pollution'],
    eligibility:['Women 18+ from BPL', 'No existing LPG connection', 'SECC identified'],
    applyUrl:'https://pmujjwalayojana.com/'
  },
  'PM Fasal Bima Yojana': {
    icon:'🌱', category:'Agriculture', description:'Crop insurance for farmers against natural calamities, pests and diseases.',
    benefits:['Low premium', 'Fast claims', 'Area-based risk cover'],
    eligibility:['All farmers growing notified crops', 'Enroll before season deadline', 'Loanee and non-loanee included'],
    applyUrl:'https://pmfby.gov.in/'
  },
  'PM Mudra Yojana': {
    icon:'💰', category:'Finance', description:'Loan support up to ₹10 lakh for small and micro enterprises.',
    benefits:['No collateral', 'Affordable interest', 'Multiple loan categories'],
    eligibility:['Microenterprises', 'Non-farm businesses', 'No loan default history'],
    applyUrl:'https://www.mudra.org.in/'
  },
  'Digital India': {
    icon:'🖥️', category:'Education', description:'Digital infrastructure and literacy programs for all citizens.',
    benefits:['Digital services', 'Skill training', 'Connectivity initiatives'],
    eligibility:['All citizens', 'Rural participants for PMGDISHA', 'Organizations for digital integration'],
    applyUrl:'https://www.digitalindia.gov.in/'
  },
  'MGNREGA': {
    icon:'👷', category:'Employment', description:'100 days guaranteed rural employment in each household for unskilled work.',
    benefits:['Guaranteed wage', 'Job card benefits', 'Rural development works'],
    eligibility:['Adult rural household members', 'Job card holder', 'Willing to work'],
    applyUrl:'https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx'
  }
};

function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2400);
}

function viewDetails(name) {
    openSchemeModal(name);
}

function openSchemeModal(name) {
    const scheme = schemes[name];
    if (!scheme) {
      showToast('Scheme data not found.');
      return;
    }
    modalIcon.textContent = scheme.icon;
    modalCategory.textContent = scheme.category;
    modalTitle.textContent = scheme.name || name;
    modalDescription.textContent = scheme.description;

    modalBenefits.innerHTML = scheme.benefits.map(b => `<li>${b}</li>`).join('');
    modalEligibility.innerHTML = scheme.eligibility.map(e => `<li>${e}</li>`).join('');
    modalApplyLink.href = scheme.applyUrl;
    schemeModalOverlay.classList.add('open');
}

function closeSchemeModal(event, force) {
  if (!force && event && event.target !== schemeModalOverlay) return;
  schemeModalOverlay.classList.remove('open');
}

schemeModalOverlay.addEventListener('click', (e) => {
  if (e.target === schemeModalOverlay) closeSchemeModal(e, true);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSchemeModal(null, true);
});

function filterChips(filter) {
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter===filter));
    const q = document.getElementById('schemeSearch').value.trim().toLowerCase();
    document.querySelectorAll('.scheme-card').forEach(card => {
        const category = card.dataset.category;
        const text = card.innerText.toLowerCase();
        const matchesCategory = filter==='all' || category===filter;
        const matchesSearch = !q || text.includes(q);
        card.style.display = (matchesCategory && matchesSearch) ? 'block' : 'none';
    });
}

window.addEventListener('input', (event) => {
    if (event.target && event.target.id === 'schemeSearch') {
        filterChips(document.querySelector('.chip.active').dataset.filter);
    }
});

window.filterChips = filterChips;
window.showToast = showToast;
window.viewDetails = viewDetails;