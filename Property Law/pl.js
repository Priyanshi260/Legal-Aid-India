const propertyArticles = [
  {
    title: 'Understanding Title and Ownership',
    summary: 'How property ownership works, what title means, and why it matters when buying or selling land.',
    details: 'Title refers to the legal right to own and use property. Good title means the ownership is clear, free from disputes, and supported by valid documents such as sale deeds, mutation records, and land records. Always verify title papers before completing a transaction to prevent later disputes.',
    keyPoints: [
      'Title confirms the legal owner of property.',
      'Verify sale deeds, records, and chain of ownership.',
      'Title defects can lead to disputes or invalid transfers.',
      'Mutation records and land registry are key documents.'
    ]
  },
  {
    title: 'Types of Property Rights in India',
    summary: 'Learn the difference between ownership, lease, license, and easement rights.',
    details: 'Property rights can include ownership, tenancy, lease, license, easement, and mortgage rights. Each right has distinct legal implications, such as the right to occupy, transfer, or use the property. Knowing the type of right helps protect your interest and avoid conflicts.',
    keyPoints: [
      'Ownership gives full rights over property use and transfer.',
      'Lease grants possession for a fixed period under terms.',
      'License allows temporary use without transfer of ownership.',
      'Easement permits use of another person’s property for specific purposes.'
    ]
  },
  {
    title: 'Transfer of Property Act — Key Sections',
    summary: 'The basics of the Transfer of Property Act and the rules that govern property transfers.',
    details: 'The Transfer of Property Act, 1882 governs sale, mortgage, lease, exchange, and gift of immovable property. Key sections explain how transfers are valid, the rights of parties, and formalities such as registration. Understanding these sections helps protect buyers and sellers during property transactions.',
    keyPoints: [
      'Sale requires a registered deed for immovable property.',
      'Gifts and mortgages may require registration and stamp duty.',
      'Transfers must be made by a competent party and for lawful consideration.',
      'Certain transfers require proper notice and execution.'
    ]
  },
  {
    title: 'Lease and Rent Control Rules',
    summary: 'Rights and responsibilities of landlords and tenants under rent and lease law.',
    details: 'Lease agreements define the rent, tenure, and terms of property use. Rent control laws protect tenants from unfair eviction and sudden rent hikes in controlled areas. Both landlords and tenants must follow the lease terms, maintain the property, and respect local rent regulations where applicable.',
    keyPoints: [
      'Leases should clearly state rent, duration, and obligations.',
      'Rent control protects tenants in designated areas.',
      'Eviction requires lawful grounds and proper notice.',
      'Landlords must keep the property fit for use.'
    ]
  },
  {
    title: 'Sale Agreement Essentials',
    summary: 'What should be included in a property sale agreement to keep the transaction secure.',
    details: 'A sale agreement records the buyer and seller commitments, property description, sale price, advance payment, and timeline for registration. It protects both parties by defining conditions, penalties, and completion steps. Always check that the seller has the authority to transfer the property and that the documents are authentic.',
    keyPoints: [
      'Include clear details of the property and parties involved.',
      'Mention payment schedule and handover date.',
      'Capture conditions for cancellation or breach.',
      'Verify seller’s right to transfer the property.'
    ]
  },
  {
    title: 'Partition and Inheritance Law',
    summary: 'How inherited property is divided among family members under Indian law.',
    details: 'Partition means dividing jointly owned property among co-owners, usually family members. Inheritance rules vary by personal law, but all property owners have certain rights to claim their share. A proper partition deed and clear agreement prevent future family disputes.',
    keyPoints: [
      'Partition divides joint property among rightful claimants.',
      'Inheritance depends on the owner’s personal law and succession rules.',
      'A written partition deed makes the division legally enforceable.',
      'Disputes can be resolved through family settlement or court.'
    ]
  },
  {
    title: 'Adverse Possession Explained',
    summary: 'What adverse possession means and when someone can claim ownership by long occupation.',
    details: 'Adverse possession allows a person to claim ownership of land after continuous and uninterrupted possession for a specified period, typically 12 years for private property. The possession must be open, hostile, and exclusive, without the owner’s permission. It is a complex legal claim and often requires strong evidence.',
    keyPoints: [
      'Requires continuous, open, and hostile possession.',
      'Generally applies after 12 years of occupation.',
      'Must be without the owner’s consent.',
      'Legal support is vital for an adverse possession claim.'
    ]
  },
  {
    title: 'Landlord & Tenant Disputes',
    summary: 'Common property disputes and how to resolve them through notice, negotiation, or court.',
    details: 'Disputes can arise over unpaid rent, illegal eviction, maintenance, or breach of lease terms. Tenants may seek protection from unlawful eviction, while landlords may pursue rent recovery or eviction for breach. Most disputes are settled through notice, mediation, or rent authority proceedings.',
    keyPoints: [
      'Document all lease terms and rent payments clearly.',
      'Serve proper notice before taking legal action.',
      'Use mediation or rent authority when possible.',
      'Keep copies of agreements and correspondence.'
    ]
  },
  {
    title: 'Mortgage and Charge Basics',
    summary: 'How mortgages and charges work, and what the borrower and lender should know.',
    details: 'A mortgage is a transfer of interest in property as security for a loan, while a charge is a right over property without transfer of ownership. Borrowers must understand repayment terms, foreclosure rights, and the difference between mortgage types. Lenders must register the mortgage and follow legal procedures to enforce it.',
    keyPoints: [
      'Mortgage uses property as security for a loan.',
      'Borrower retains ownership but grants security interest.',
      'Lenders must register mortgage documents properly.',
      'Foreclosure follows legal procedure in case of default.'
    ]
  }
];

function renderPropertyCards() {
  const grid = document.getElementById('articlesGrid');
  propertyArticles.forEach((article, index) => {
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
  const article = propertyArticles[index];
  document.getElementById('modalTitle').innerText = article.title;
  document.getElementById('modalBody').innerText = article.details;
  const list = document.getElementById('modalKeyPoints');
  list.innerHTML = '';
  article.keyPoints.forEach(point => {
    const li = document.createElement('li');
    li.innerText = point;
    list.appendChild(li);
  });
  renderTags(article.related || ['Transfer of Property Act, 1882', 'Indian Registration Act', 'Stamp Act']);
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
  renderPropertyCards();
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', event => {
    if (event.target === event.currentTarget) closeModal();
  });
});
