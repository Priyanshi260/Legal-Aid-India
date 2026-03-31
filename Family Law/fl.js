const familyArticles = [
  {
    title: 'Marriage Laws in India',
    summary: 'Overview of different marriage laws and the legal validity of marriages in India.',
    details: 'India has multiple marriage laws, including the Hindu Marriage Act, Special Marriage Act, Muslim Personal Law, and Christian Marriage Act. Valid marriage requires consent, legal age, absence of prohibited relationships, and registration where applicable. Understanding the correct law helps protect rights in case of dispute.',
    keyPoints: [
      'Different communities follow different marriage laws.',
      'Consent and age requirements are mandatory.',
      'Registration strengthens legal proof of marriage.',
      'Prohibited relationships can invalidate a marriage.'
    ]
  },
  {
    title: 'Divorce Grounds and Process',
    summary: 'The common grounds for divorce and the legal procedure to end a marriage.',
    details: 'Divorce can be obtained on grounds such as cruelty, adultery, desertion, irretrievable breakdown, mutual consent, and conversion. The procedure varies by personal law but generally includes filing a petition, mediation, and court hearings. Mutual consent divorce is often faster when both spouses agree.',
    keyPoints: [
      'Grounds differ across personal laws and the Special Marriage Act.',
      'Mutual consent divorce is available under most systems.',
      'Mediation is often required before court hearings.',
      'Proper documentation and legal representation help avoid delays.'
    ]
  },
  {
    title: 'Child Custody and Guardianship',
    summary: 'How custody decisions are made and what factors courts consider.',
    details: 'Child custody decisions focus on the child’s welfare and best interests. Courts consider the child’s age, emotional bonds, education, health, and parental capacity. Custody may be awarded to one parent or shared, while guardianship defines who cares for and makes decisions for the child.',
    keyPoints: [
      'Child’s best interest is the key legal standard.',
      'Courts may award physical custody to one parent and visitation rights to the other.',
      'Guardianship covers care and decision-making authority.',
      'The child’s stability, education, and safety matter most.'
    ]
  },
  {
    title: 'Adoption Law Essentials',
    summary: 'The legal requirements for adoption and the agencies that manage the process.',
    details: 'Adoption in India is regulated by the Juvenile Justice Act and agency rules. Prospective parents must satisfy eligibility criteria, complete a home study, and obtain approval from the adoption agency. The process ensures the child’s welfare and the legal transfer of parental rights.',
    keyPoints: [
      'Only approved agencies can facilitate adoption.',
      'Eligibility depends on age, marital status, and health.',
      'A home study and court order legally finalize adoption.',
      'The child gains full parental rights after adoption.'
    ]
  },
  {
    title: 'Domestic Violence Rights',
    summary: 'Protection and relief available under the Protection of Women from Domestic Violence Act.',
    details: 'The Domestic Violence Act offers protection to women facing physical, emotional, sexual, or economic abuse at home. Victims can seek protection orders, residence orders, monetary relief, and custody support. The law also allows women to stay in the shared household and obtain police or court assistance.',
    keyPoints: [
      'Protection orders stop abuse and harassment.',
      'Women can seek monetary relief and custody support.',
      'The law covers physical, verbal, emotional, and economic abuse.',
      'Police and courts can act quickly to enforce protection.'
    ]
  },
  {
    title: 'Maintenance and Alimony',
    summary: 'How the law ensures financial support for spouses and children after separation.',
    details: 'Maintenance is financial support paid by one spouse to the other and to children. Courts consider income, living standard, and needs when fixing maintenance. Alimony may be ordered during separation, after divorce, or for permanent support in some cases.',
    keyPoints: [
      'Maintenance is meant to meet basic living needs.',
      'Courts evaluate income and expenses of both parties.',
      'Spousal support can continue after divorce in some cases.',
      'Children have a right to maintenance from both parents.'
    ]
  },
  {
    title: 'Family Mediation & Counseling',
    summary: 'How mediation can resolve disputes without lengthy court battles.',
    details: 'Family mediation helps couples and families resolve issues such as divorce, custody, maintenance, and property through a neutral mediator. It is faster, less expensive, and often preserves relationships better than litigation. Courts may also require mediation before hearing certain family law cases.',
    keyPoints: [
      'Mediation encourages negotiated agreements.' ,
      'It is usually faster than court proceedings.',
      'A neutral mediator helps both sides communicate clearly.',
      'Agreements can be recorded and enforced by the court.'
    ]
  },
  {
    title: 'Hindu Succession Act — Inheritance',
    summary: 'Inheritance rules under the Hindu Succession Act and who inherits family property.',
    details: 'The Hindu Succession Act governs the inheritance rights of Hindus, Buddhists, Jains, and Sikhs. It establishes who qualifies as legal heirs and how property is divided among sons, daughters, spouse, and parents. Recent amendments strengthened daughters’ equal rights to ancestral property.',
    keyPoints: [
      'Daughters have equal inheritance rights in ancestral property.',
      'Class I heirs receive the first share of property.',
      'The Act applies to both intestate and ancestral succession.',
      'Legal heirs should file claims clearly to protect their share.'
    ]
  },
  {
    title: 'Personal Laws for Different Communities',
    summary: 'A quick guide to how personal laws apply to marriage, divorce, and inheritance for different faiths.',
    details: 'Personal laws in India govern marriage, divorce, adoption, and inheritance for different religious communities. Muslims, Hindus, Christians, Parsis, and others follow separate statutes or personal law customs. Understanding the applicable law is essential before making family decisions or filing legal claims.',
    keyPoints: [
      'Personal laws vary by religion and community.',
      'Different laws apply to marriage, divorce, and succession.',
      'The Special Marriage Act applies across religions if chosen.',
      'Legal advice helps identify the correct law for your situation.'
    ]
  }
];

function renderFamilyCards() {
  const grid = document.getElementById('articlesGrid');
  familyArticles.forEach((article, index) => {
    const button = document.createElement('button');
    button.className = 'article-card';
    button.type = 'button';
    button.innerHTML = `
      <div class="article-card-title">${article.title}</div>
      <div class="article-card-desc">${article.summary}</div>
      <span class="article-card-link">Read Article <span>→</span></span>
    `;
    button.addEventListener('click', () => openModal(index));
    grid.appendChild(button);
  });
}

function renderTags(tags) {
  const container = document.getElementById('modalTags');
  container.innerHTML = '';
  tags.forEach(tag => {
    const pill = document.createElement('div');
    pill.className = 'tag';
    pill.innerText = tag;
    container.appendChild(pill);
  });
}

function openModal(index) {
  const article = familyArticles[index];
  document.getElementById('modalTitle').innerText = article.title;
  document.getElementById('modalBody').innerText = article.details;
  const list = document.getElementById('modalKeyPoints');
  list.innerHTML = '';
  article.keyPoints.forEach(point => {
    const li = document.createElement('li');
    li.innerText = point;
    list.appendChild(li);
  });
  renderTags(article.related || ['Hindu Marriage Act', 'Special Marriage Act', 'Juvenile Justice Act']);
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

window.addEventListener('DOMContentLoaded', () => {
  renderFamilyCards();
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', event => {
    if (event.target === event.currentTarget) closeModal();
  });
});
