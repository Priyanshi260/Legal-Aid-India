const consumerArticles = [
  {
    title: 'Consumer Protection Act, 2019 — Overview',
    summary: 'What the new law covers, its goals, and the rights it guarantees to every consumer in India.',
    details: 'The Consumer Protection Act, 2019 replaced the older 1986 Act and introduced stronger safeguards for buyers of goods and services. It focuses on product liability, unfair trade practices, e-commerce protections, and the right to information. The Act also created consumer commissions at District, State, and National levels to resolve disputes quickly and fairly.',
    keyPoints: [
      'Introduces product liability and e-commerce regulations.',
      'Expands consumer rights to include information, choice, safety, and redressal.',
      'Creates a three-tier consumer dispute redressal system.',
      'Mandates that sellers provide correct information and clear terms.'
    ]
  },
  {
    title: 'How to File a Consumer Complaint',
    summary: 'Step-by-step guidance on where to file complaints, what documents to attach, and how the procedure works.',
    details: 'A consumer complaint can be filed at the District Forum, State Commission, or National Commission depending on the value of the claim. Complaints may also be filed online through the e-Daakhil portal. You must include copies of purchase receipts, warranty certificates, correspondence with the seller, and a clear statement of facts and relief sought.',
    keyPoints: [
      'File online through e-Daakhil or in person at the correct forum.',
      'Include proof of purchase, product/service details, and grievance description.',
      'Choose the right forum based on claim amount and jurisdiction.',
      'Keep copies of all communication with the seller or service provider.'
    ]
  },
  {
    title: 'Rights Against Misleading Advertisements',
    summary: 'Know how the law protects you from false claims, deceptive pricing, and unfair marketing.',
    details: 'Under the Consumer Protection Act, misleading advertisements are prohibited. Advertisers must not publish claims that are false or likely to mislead consumers about the quality, quantity, or price of goods and services. Consumers can file complaints against brands, companies, or influencers who make deceptive promises.',
    keyPoints: [
      'False or deceptive claims in ads are illegal.',
      'Companies can be held accountable for misleading promises.',
      'Complaints may seek penalties, corrective ads, or compensation.',
      'Supports honest and transparent marketing practices.'
    ]
  },
  {
    title: 'Your Right to Refund and Return',
    summary: 'Understanding return policies, refunds, and the legal recourse when sellers refuse to honor their commitments.',
    details: 'Consumers have the right to a refund, replacement, or repair when goods are defective or not as described. Sellers must follow their return and refund policies fairly, especially for e-commerce purchases. If a seller refuses, the consumer can file a complaint for unfair trade practice and violation of statutory guarantees.',
    keyPoints: [
      'Defective or misdescribed products may be returned for refund.',
      'E-commerce platforms must display clear return policies.',
      'Sellers cannot unfairly deny legitimate refund requests.',
      'Consumer dispute forums can order compensation or replacement.'
    ]
  },
  {
    title: 'Product Liability — Holding Manufacturers Accountable',
    summary: 'How consumers can seek compensation when products cause injury, loss, or damage.',
    details: 'Product liability means that manufacturers, service providers, and sellers can be held responsible for harm caused by defective goods or deficient services. The Consumer Protection Act allows consumers to claim compensation for injury, economic loss, or property damage caused by unsafe products.',
    keyPoints: [
      'Manufacturers and sellers are liable for unsafe products.',
      'Consumers can claim compensation for injury or loss.',
      'Liability extends to e-commerce sellers and marketplace providers.',
      'Proof of purchase and evidence of defect strengthens a claim.'
    ]
  },
  {
    title: 'E-Commerce Consumer Rights',
    summary: 'Learn the protections that apply when buying goods or services online.',
    details: 'E-commerce platforms must provide clear information on price, refund, exchange, warranty, delivery, and payment methods. They cannot discriminate between consumers of the same class or alter terms after the purchase. Consumers have the right to lodge complaints electronically and seek resolution from the seller or platform.',
    keyPoints: [
      'Clear pricing, delivery, and return terms are mandatory.',
      'Platforms must not change contract terms after sale.',
      'Buyers may file complaints online with the appropriate authority.',
      'E-commerce sellers must disclose seller identity and contact details.'
    ]
  },
  {
    title: 'Banking and Financial Consumer Rights',
    summary: 'Your rights while dealing with banks, NBFCs, insurers, and financial service providers.',
    details: 'Consumers of banking and financial services have rights to fair treatment, transparent pricing, and grievance redressal. Banks must provide clear information on interest rates, fees, and loan conditions. If service providers act unfairly or mis-sell products, consumers can approach RBI grievance cells or file a consumer complaint.',
    keyPoints: [
      'Right to accurate information about charges and interest.',
      'Protection from mis-selling of financial products.',
      'Access to grievance redressal mechanisms like RBI complaints.',
      'You can oppose unauthorized transactions and unfair fees.'
    ]
  },
  {
    title: 'Food Safety and Adulteration — Your Rights',
    summary: 'How food laws protect you from unsafe or adulterated food products.',
    details: 'Food safety regulations require manufacturers and sellers to provide safe, unadulterated food and disclose ingredient information. Consumers can complain if a product is contaminated, mislabeled, or unsafe. Food Safety and Standards Authority of India (FSSAI) rules support penalties and recall actions for adulterated goods.',
    keyPoints: [
      'Food must be safe, hygienic, and correctly labeled.',
      'Adulterated products can be reported to FSSAI authorities.',
      'Consumers can demand refund, replacement, or damages.',
      'Safety standards apply to packaged food and restaurants.'
    ]
  },
  {
    title: 'Unfair Trade Practices — Consumer Remedies',
    summary: 'Recognize the common unfair practices and how to demand justice.',
    details: 'Unfair trade practices include false claims, denial of guarantees, sale of defective goods, and refusal to honor contracts. Consumers can seek relief through consumer forums for unfair practices, which may order compensation, product replacement, or corrective action. The law protects buyers from unscrupulous business behavior.',
    keyPoints: [
      'False advertising and hidden charges are unfair trade practices.',
      'Consumers can seek compensation from the seller or manufacturer.',
      'Forums can order corrective advertisements or product recall.',
      'Keep all receipts and correspondence when bringing a claim.'
    ]
  }
];

function renderConsumerCards() {
  const grid = document.getElementById('articlesGrid');
  consumerArticles.forEach((article, index) => {
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
  tags.forEach((tag) => {
    const pill = document.createElement('div');
    pill.className = 'tag';
    pill.innerText = tag;
    container.appendChild(pill);
  });
}

function openModal(index) {
  const article = consumerArticles[index];
  document.getElementById('modalTitle').innerText = article.title;
  document.getElementById('modalBody').innerText = article.details;
  const list = document.getElementById('modalKeyPoints');
  list.innerHTML = '';
  article.keyPoints.forEach((point) => {
    const li = document.createElement('li');
    li.innerText = point;
    list.appendChild(li);
  });
  renderTags(article.related || ['Consumer Protection Act, 2019', 'Consumer Protection Rules, 2020', 'E-Commerce Rules, 2020']);
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
  renderConsumerCards();
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) closeModal();
  });
});
