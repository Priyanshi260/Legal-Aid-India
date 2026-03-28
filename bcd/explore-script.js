const schemes = [
  {name:'PM Internship Scheme',desc:'Provides internship placements in top firms.',link:'https://pminternship.mca.gov.in/login/'},
  {name:'Startup India',desc:'Support for startups with funding and policies.',link:'https://www.startupindia.gov.in/'},
  {name:'Ayushman Bharat',desc:'Health insurance for poor families.',link:'https://pmjay.gov.in/'},
  {name:'PM Awas Yojana',desc:'Affordable housing for urban/rural families.',link:'https://pmaymis.gov.in/'},
  {name:'Sukanya Samriddhi Yojana',desc:'Savings scheme for girl child.',link:'https://www.indiapost.gov.in/'},
  {name:'Digital India',desc:'Digital access and services initiative.',link:'https://www.digitalindia.gov.in/'},
];
const listEl=document.getElementById('schemeList');
const modal=document.getElementById('detailModal');
const titleEl=document.getElementById('schemeTitle');
const bodyEl=document.getElementById('schemeBody');
const applyEl=document.getElementById('applyNow');
const closeBtn=document.getElementById('closeModal');

function renderCards(){
  listEl.innerHTML='';
  schemes.forEach(s=>{const card=document.createElement('div');card.className='scheme-card';card.innerHTML=`<h3>${s.name}</h3><p>${s.desc}</p><a href="#" class="card-link" data-name="${s.name}">View Details →</a>`;listEl.append(card);});
  listEl.querySelectorAll('a.card-link').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openDetail(e.target.dataset.name);}));
}

function openDetail(name){const scheme=schemes.find(s=>s.name===name);if(!scheme)return;titleEl.textContent=scheme.name;bodyEl.textContent=scheme.desc;applyEl.href=scheme.link;applyEl.textContent='Apply Now';modal.classList.remove('hidden');}

closeBtn.addEventListener('click',()=>modal.classList.add('hidden'));
modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.add('hidden');}});

renderCards();