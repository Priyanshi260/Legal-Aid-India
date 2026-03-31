const labourRights = [
    {
        title: "Minimum Wages Act, 1948",
        cardDesc: "Ensures that workers in scheduled employments are paid a minimum wage to prevent exploitation.",
        popupHeader: "The Minimum Wages Act, 1948",
        popupDesc: "This act empowers the government to fix minimum rates of wages for various occupations. It is designed to ensure workers have enough for basic sustenance and to prevent the payment of 'starvation wages'.",
        infoBoxHeader: "KEY PROVISIONS",
        infoBoxPoints: [
            "Fixing of minimum rates of wages by state/central govt",
            "Periodic revision of wages (usually every 5 years)",
            "Provision for overtime wages at double the regular rate",
            "Mandatory weekly holidays for workers",
            "Penalties for employers paying below the set minimum"
        ],
        relatedLaws: ["Payment of Wages Act", "Labour Code on Wages 2019"]
    },
    {
        title: "Factories Act, 1948",
        cardDesc: "Regulates health, safety, and welfare of workers in factories, including working hours and leave.",
        popupHeader: "The Factories Act, 1948",
        popupDesc: "A primary law regulating the working conditions in factories. It focuses on the safety of the work environment and the health and welfare of the employees working within factory premises.",
        infoBoxHeader: "SAFETY & WELFARE",
        infoBoxPoints: [
            "Maximum 48 working hours per week",
            "Mandatory safety officers in large factories",
            "Clean drinking water and sanitation facilities",
            "Annual leave with wages based on working days",
            "Special protections for women and young workers"
        ],
        relatedLaws: ["Occupational Safety & Health Code", "Workmen's Compensation"]
    },
    {
        title: "Industrial Disputes Act, 1947",
        cardDesc: "Governs the investigation and settlement of industrial disputes, layoffs, and retrenchment.",
        popupHeader: "Industrial Disputes Act, 1947",
        popupDesc: "This act provides the machinery for the peaceful settlement of disputes between employers and employees, aiming to maintain industrial harmony and prevent illegal strikes.",
        infoBoxHeader: "DISPUTE RESOLUTION",
        infoBoxPoints: [
            "Procedure for legal strikes and lockouts",
            "Provisions for layoff and retrenchment compensation",
            "Role of Conciliation Officers and Labour Courts",
            "Mandatory notice period before closing an establishment",
            "Protection of workers during pendency of proceedings"
        ],
        relatedLaws: ["Industrial Relations Code", "Trade Unions Act"]
    },
    {
        title: "Employee's Provident Fund (EPF)",
        cardDesc: "A mandatory savings scheme for employees to provide financial security after retirement.",
        popupHeader: "EPF and Miscellaneous Provisions Act",
        popupDesc: "The EPF scheme is a social security tool where both the employer and the employee contribute a percentage of the salary to a fund that earns interest and can be withdrawn at retirement.",
        infoBoxHeader: "BENEFITS & WITHDRAWALS",
        infoBoxPoints: [
            "12% contribution from both employer and employee",
            "Tax-free interest on accumulated savings",
            "Partial withdrawal allowed for marriage, education, or home",
            "Pension benefits after 10 years of service",
            "Universal Account Number (UAN) for easy transfers"
        ],
        relatedLaws: ["EPS (Pension Scheme)", "EDLI (Insurance Scheme)"]
    },
    {
        title: "Maternity Benefit Act, 1961",
        cardDesc: "Protects the employment of women during maternity and entitles them to fully paid absence.",
        popupHeader: "Maternity Benefit (Amendment) Act",
        popupDesc: "This law ensures that women can take time off for childbirth without losing their job or income. It promotes maternal and infant health in the workforce.",
        infoBoxHeader: "WOMEN'S RIGHTS",
        infoBoxPoints: [
            "26 weeks of fully paid maternity leave",
            "Work-from-home options where nature of work permits",
            "Mandatory crèche facility in offices with 50+ employees",
            "Protection against dismissal during pregnancy",
            "Right to medical bonus in certain cases"
        ],
        relatedLaws: ["Code on Social Security", "ESI Act"]
    },
    {
        title: "Payment of Bonus Act, 1965",
        cardDesc: "Provides for the payment of bonus to persons employed in certain establishments on the basis of profits.",
        popupHeader: "Payment of Bonus Act",
        popupDesc: "This act imposes a statutory liability upon the employer of every establishment to pay a bonus to their employees if certain conditions are met regarding profit and salary.",
        infoBoxHeader: "ELIGIBILITY",
        infoBoxPoints: [
            "Minimum bonus of 8.33% of the salary",
            "Maximum bonus capped at 20% of the salary",
            "Applicable to establishments with 20+ workers",
            "Employee must have worked 30+ days in a year",
            "Disqualification for fraud or violent conduct"
        ],
        relatedLaws: ["Payment of Wages", "Profit Sharing Schemes"]
    },
    {
        title: "Trade Unions Act, 1926",
        cardDesc: "Provides for the registration of Trade Unions and defines the law relating to registered Trade Unions.",
        popupHeader: "The Trade Unions Act, 1926",
        popupDesc: "This act grants workers the legal right to form unions to negotiate for better wages and working conditions. It provides legal immunity for certain actions taken during collective bargaining.",
        infoBoxHeader: "UNION RIGHTS",
        infoBoxPoints: [
            "Right of any 7 members to apply for registration",
            "Immunity from civil and criminal liability for union acts",
            "Right to maintain a general and political fund",
            "Powers of a body corporate for registered unions",
            "Freedom of association under the Constitution"
        ],
        relatedLaws: ["Industrial Relations Code", "ILO Conventions"]
    },
    {
        title: "Payment of Gratuity Act, 1972",
        cardDesc: "A statutory benefit paid to employees who have rendered continuous service for at least five years.",
        popupHeader: "Payment of Gratuity Act",
        popupDesc: "Gratuity is a lump sum payment made by an employer to an employee as a token of appreciation for their long-term association with the company.",
        infoBoxHeader: "GRATUITY RULES",
        infoBoxPoints: [
            "Mandatory after 5 years of continuous service",
            "Calculation: (15 days' salary) x (years of service)",
            "Payable on retirement, resignation, or death",
            "Current maximum limit is ₹20 Lakhs",
            "Employer must pay within 30 days of it becoming due"
        ],
        relatedLaws: ["Social Security Code", "Income Tax Exemptions"]
    },
    {
        title: "Employee's State Insurance (ESI)",
        cardDesc: "Provides socio-economic protection to workers in the event of sickness, maternity, or injury.",
        popupHeader: "The ESI Act, 1948",
        popupDesc: "The ESI scheme is a self-financing health insurance scheme for Indian workers. It provides medical cover for the employee and their dependents.",
        infoBoxHeader: "COVERAGE & CARE",
        infoBoxPoints: [
            "Full medical care for self and family members",
            "Sickness benefit in cash during certified illness",
            "Disability benefit for temporary or permanent injury",
            "Dependents' benefit in case of death at work",
            "Funeral expenses assistance"
        ],
        relatedLaws: ["Workmen's Compensation", "Health & Safety Acts"]
    }
];

const gridContainer = document.getElementById('grid-container');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body-content');
const closeModalButton = document.getElementById('close-modal');

// Build Cards
labourRights.forEach((law, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3 class="card-title">${law.title}</h3>
        <p class="card-description">${law.cardDesc}</p>
        <a href="#" class="card-link">Read Article &rarr;</a>
    `;
    card.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(law);
    });
    gridContainer.appendChild(card);
});

function openModal(data) {
    modalBody.innerHTML = `
        <h3 class="modal-header">${data.popupHeader}</h3>
        <p class="modal-description">${data.popupDesc}</p>
        <div class="modal-info-box">
            <h5 class="info-box-header">${data.infoBoxHeader}</h5>
            <ul class="info-box-list">
                ${data.infoBoxPoints.map(p => `<li>${p}</li>`).join('')}
            </ul>
        </div>
        <h5 class="modal-related-header">RELATED LAWS & CODES</h5>
        <div class="modal-laws-container">
            ${data.relatedLaws.map(l => `<span class="related-law-tag">${l}</span>`).join('')}
        </div>
    `;
    modalOverlay.classList.add('active');
}

closeModalButton.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) modalOverlay.classList.remove('active'); });