// --- Step 1: Criminal Law & Popup Data (Exactly 9 Acts) ---
// Curated list adhering to exclusion restrictions (No Cyber, RTI, Tax, etc.)
// Content remains the same as the previous version.
const criminalLaws = [
    {
        title: "Bharatiya Nyaya Sanhita (BNS), 2023 – Overview",
        cardDescription: "The primary penal code of India. It defines offences such as theft, assault, murder, and criminal conspiracy, and introduces community service...",
        popupHeader: "Bharatiya Nyaya Sanhita (BNS), 2023",
        popupDescription: "The Bharatiya Nyaya Sanhita (BNS) is the newly enacted penal code of India, replacing the colonial-era Indian Penal Code (IPC). It defines various offences and prescribes punishments, introducing modern classifications and simplifying procedures...",
        infoBoxHeader: "Key Changes and Rights",
        infoBoxPoints: [
            "Defines modern offenses like Organized Crime and Terrorism",
            "Simplifies definitions for common offenses",
            "Mandates forensic evidence for serious crimes",
            "Strengthens victims' rights and community service",
            "Modernizes penal provisions for sexual offenses"
        ],
        relatedHeader: "RELATED LAWS & GUIDES",
        relatedLaws: [
            { name: "BNS Implementation Guide" },
            { name: "CrPC, 1973 (Procedural Context)" }
        ]
    },
    {
        title: "How to File an FIR (First Information Report)",
        cardDescription: "A step-by-step guide explaining the vital legal process of filing an FIR at a police station. Learn about zero FIRs and what details to provide...",
        popupHeader: "How to File an FIR",
        popupDescription: "A step-by-step guide on how a citizen can file a First Information Report (FIR) under Indian Law. An FIR is essential for initiating a criminal investigation and must record the initial, factual information about a recognizable offense...",
        infoBoxHeader: "FIR Filing Process and Rights",
        infoBoxPoints: [
            "File an FIR for any cognizable offense immediately",
            "Know about 'Zero FIR' - can file at any police station",
            "Right to a free copy of the FIR immediately",
            "Legal remedy exists if police refuse registration",
            "Mandate for police to register FIR if information discloses an offense"
        ],
        relatedHeader: "FIR PROCEDURES & ACTS",
        relatedLaws: [
            { name: "CrPC, 1973 Section 154" },
            { name: "Police Complaint Guide" },
            { name: "Remedy against Police Inaction" }
        ]
    },
    {
        title: "Fundamental Rights Upon Arrest (DK Basu Guidelines)",
        cardDescription: "Learn about essential constitutional rights for any citizen detained by the police, including grounds for arrest, legal counsel, and protection...",
        popupHeader: "Fundamental Rights Upon Arrest",
        popupDescription: "Explore the critical fundamental and statutory rights guaranteed to every citizen upon arrest or detention by police. These are reinforced by the Supreme Court in the DK Basu Guidelines to prevent custodial abuse...",
        infoBoxHeader: "Essential Citizen Rights",
        infoBoxPoints: [
            "Right to know the grounds of arrest immediately",
            "Right to be produced before a Magistrate within 24 hours",
            "Right to consult a lawyer of your choice",
            "Protection from custodial torture and abuse",
            "Strict compliance with DK Basu Guidelines required"
        ],
        relatedHeader: "RELATED ACTS & CASE LAW",
        relatedLaws: [
            { name: "Constitution of India (Art 21, 22)" },
            { name: "DK Basu Case Summary" },
            { name: "CrPC, 1973 Section 50-57" }
        ]
    },
    {
        title: "Code of Criminal Procedure (CrPC), 1973 - Key Processes",
        cardDescription: "The procedural law governing the entire criminal process, including powers of police to arrest, investigation, bail, and the hierarchy of courts...",
        popupHeader: "Code of Criminal Procedure (CrPC), 1973",
        popupDescription: "The procedural cornerstone of criminal law in India, the CrPC, outlines the step-by-step process of handling criminal cases, from registration of complaint to investigation, trial, and sentencing...",
        infoBoxHeader: "Crucial Procedural Aspects",
        infoBoxPoints: [
            "Detailed rules for arrest with and without warrant",
            "Provisions for investigation and gathering evidence",
            "hierarchy of criminal courts",
            "Rules for bail and anticipation of bail",
            "Strict timelines for procedural steps"
        ],
        relatedHeader: "RELATED ACTS & RULES",
        relatedLaws: [
            { name: "CrPC, 1973 Full Text" },
            { name: "Indian Evidence Act, 1872" },
            { name: "Criminal Trial Guide" }
        ]
    },
    {
        title: "Indian Evidence Act, 1872 - Principles of Proof",
        cardDescription: "Rules defining which facts are relevant and admissible in a criminal court, procedures for presenting evidence, and burden of proof...",
        popupHeader: "Indian Evidence Act, 1872",
        popupDescription: "The foundational law defining which facts can be used as evidence in Indian courts. It establishes strict rules for relevancy, admissibility, and burden of proof for both civil and criminal cases...",
        infoBoxHeader: "Essential Evidence Rules",
        infoBoxPoints: [
            "Distinguishes between relevant fact and fact-in-issue",
            "Defines conditions for admissibility of evidence",
            "Specifies complex rules for burden of proof",
            "Regulates confessions and witness testimony",
            "Outlines rules for examination of witnesses"
        ],
        relatedHeader: "RELATED EVIDENTIARY RULES",
        relatedLaws: [
            { name: "Act Full Text" },
            { name: "Act Amendments" },
            { name: "Legal Proof Guide" }
        ]
    },
    {
        title: "Narcotic Drugs and Psychotropic Substances (NDPS) Act, 1985",
        cardDescription: "Strict criminal laws regarding drug control. Understand offenses, severe penalties for trafficking, and investigative procedures...",
        popupHeader: "Narcotic Drugs & Psychotropic Substances Act, 1985",
        popupDescription: "The primary legislation in India to combat the drug menace. It establishes strict prohibitions against trafficking, use, and possession, prescribing severe punishments and unique investigative processes...",
        infoBoxHeader: "Key NDPS Offenses & Penalties",
        infoBoxPoints: [
            "Prohibits cultivation, production, sale, and trafficking",
            "Severe punishments, including mandatory minimum sentences",
            "Special investigative powers anti-narcotic agencies",
            "Classification of prohibited substances",
            "Unique procedures for search, seizure, and arrests"
        ],
        relatedHeader: "NDPS RULES & NOTIFICATIONS",
        relatedLaws: [
            { name: "NDPS Full Text" },
            { name: "Act Amendments" },
            { name: "Drug Policy in India" }
        ]
    },
    {
        title: "Juvenile Justice (Care and Protection of Children) Act, 2015",
        cardDescription: "Separate justice system for children. rehabilitation-focused procedures for apprehension and trial of minors...",
        popupHeader: "Juvenile Justice (Care & Protection) Act, 2015",
        popupDescription: "A specialized, compassionate legal framework focused on the care, protection, and rehabilitation of children, including those in conflict with the law. It establishes separate courts and focuses on rehabilitation...",
        infoBoxHeader: "Juvenile Justice Highlights",
        infoBoxPoints: [
            "Distinct procedures for children in conflict with law",
            "Emphasizes rehabilitation over punishment",
            "Mandates separate Juvenile Justice Boards (JJBs)",
            "Age of juvenile as 18 (with exceptions for serious crimes)",
            "Strict privacy protections for child identities"
        ],
        relatedHeader: "RELATED JUVENILE LAWS",
        relatedLaws: [
            { name: "JJ Act Full Text" },
            { name: "POCSO Act, 2012 (Child Abuse)" },
            { name: "Child Rights Guide" }
        ]
    },
    {
        title: "Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989",
        cardDescription: "Penalizes offenses committed against SC and ST communities. Provisions for investigations, relief, and rehabilitation of victims...",
        popupHeader: "SC & ST (Prevention of Atrocities) Act, 1989",
        popupDescription: "A crucial legislation to protect members of the Scheduled Castes and Scheduled Tribes from atrocities, exploitation, and discrimination. The act penalizes specific offenses and establishes special mechanisms for speedy justice...",
        infoBoxHeader: "Key Act Provisions",
        infoBoxPoints: [
            "Defines atrocities and prescribes severe penalties",
            "Mandates special courts for speedy trial",
            "required compensation and rehabilitation for victims",
            "Investigation procedure with timeline requirements",
            "Enhanced legal support for SC/ST victims"
        ],
        relatedHeader: "SC/ST RIGHTS & GUIDES",
        relatedLaws: [
            { name: "Atrocities Act Full Text" },
            { name: "Constitutional Protections" },
            { name: "SC/ST Commission Guide" }
        ]
    },
    {
        title: "Arms Act, 1959 - Offences and Penalties",
        cardDescription: "Regulation of possession, sale, and manufacture of arms. Defines criminal offenses and stiff penalties for unlawful possession or use...",
        popupHeader: "The Arms Act, 1959",
        popupDescription: "Legislation establishing control over the acquisition, possession, manufacture, and trade of arms and ammunition in India. It regulates ownership and provides for strict penalties for violations of arms laws...",
        infoBoxHeader: "Essential Arms Act Information",
        infoBoxPoints: [
            "Restricts the type of arms citizens can possess",
            "specific offences for unlawful possession",
            "Rules for manufacture, sale, and transport of arms",
            "Outlines provisions for licensing of firearms",
            "Empowers authorities search, seize, and arrest for violations"
        ],
        relatedHeader: "ARMS LAWS & REGULATIONS",
        relatedLaws: [
            { name: "Arms Act Full Text" },
            { name: "Arms Rules, 2016" },
            { name: "Weapon Licensing Guide" }
        ]
    }
];

// --- Step 2: Dynamically Generate the Grid Cards ---
const gridContainer = document.getElementById('grid-container');

function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-law-index', index); 

    const title = document.createElement('h3');
    title.classList.add('card-title');
    title.innerText = data.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('card-description');
    description.innerText = data.cardDescription; 
    card.appendChild(description);

    const link = document.createElement('a');
    link.classList.add('card-link');
    link.href = "#"; 
    link.innerText = "Read Article \u2192";
    card.appendChild(link);

    return card;
}

criminalLaws.forEach((lawData, index) => {
    const cardElement = createCard(lawData, index);
    gridContainer.appendChild(cardElement);
});

// --- THE MODAL (POPUP) INTERACTIVITY ---
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body-content');
const closeModalButton = document.getElementById('close-modal');

const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    card.addEventListener('click', function(event) {
        const index = this.getAttribute('data-law-index');
        const lawData = criminalLaws[index];
        
        modalOverlay.classList.add('active');
        populateModal(lawData);
        
        event.preventDefault(); 
    });
});

// --- Step 5: Populate the Modal with Selected Law Data ---
function populateModal(data) {
    modalBody.innerHTML = '';

    const header = document.createElement('h3');
    header.classList.add('modal-header');
    header.innerText = data.popupHeader; 
    modalBody.appendChild(header);

    const description = document.createElement('p');
    description.classList.add('modal-description');
    description.innerText = data.popupDescription;
    modalBody.appendChild(description);

    if (data.infoBoxPoints && data.infoBoxPoints.length > 0) {
        const infoBox = document.createElement('div');
        infoBox.classList.add('modal-info-box');

        const infoHeader = document.createElement('h5');
        infoHeader.classList.add('info-box-header');
        infoHeader.innerText = data.infoBoxHeader;
        infoBox.appendChild(infoHeader);

        const infoList = document.createElement('ul');
        infoList.classList.add('info-box-list');
        data.infoBoxPoints.forEach(point => {
            const listItem = document.createElement('li');
            listItem.innerText = point;
            infoList.appendChild(listItem);
        });
        infoBox.appendChild(infoList);

        modalBody.appendChild(infoBox);
    }

    // --- MODIFIED SECTION: RELATED LAWS (NON-CLICKABLE) ---
    if (data.relatedLaws && data.relatedLaws.length > 0) {
        const relatedHeader = document.createElement('h5');
        relatedHeader.classList.add('modal-related-header');
        relatedHeader.innerText = data.relatedHeader;
        modalBody.appendChild(relatedHeader);

        const lawsContainer = document.createElement('div');
        lawsContainer.classList.add('modal-laws-container');
        
        // Loop through the curated related law objects
        data.relatedLaws.forEach(lawObj => {
            // THE CHANGE IS HERE:
            // 1. Create a <span> (text container) instead of an <a> (link) element.
            const lawTag = document.createElement('span');
            // 2. Reuse the same CSS class so it looks identical.
            lawTag.classList.add('related-law-tag');
            // 3. DO NOT add a .href attribute (span cannot have it).
            // 4. Set the text to the law's name.
            lawTag.innerText = lawObj.name;
            
            lawsContainer.appendChild(lawTag);
        });
        
        modalBody.appendChild(lawsContainer);
    }
}

// --- Step 6: Close Modal Interactivity ---
closeModalButton.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

function closeModal() {
    modalOverlay.classList.remove('active');
}