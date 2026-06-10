// ============================================
// HAARLEM ROLEPLAY STAFF PORTAL - JAVASCRIPT
// ============================================

// Rank data with expectations, duties, and permissions
const rankData = {
    'eigenaar': {
        name: 'Eigenaar',
        expectations: 'Ultieme verantwoordelijkheid voor de hele server. Beslissingen over de toekomst en richting van Haarlem Roleplay.',
        duties: 'Server management, financiële beslissingen, team leiding, strategische planning, community vertegenwoordiging.',
        permissions: 'Volledige toegang tot alle systemen, admin rechten, financiële controle, staff management.'
    },
    'mede-beheer': {
        name: 'Mede-Beheer',
        expectations: 'Ondersteuning van de eigenaar bij dagelijkse taken en besluitvorming. Fungeren als rechterhand.',
        duties: 'Dagelijkse server management, staff coördinatie, probleemoplossing, community communicatie.',
        permissions: 'Bijna volledige toegang, admin rechten, staff management, financiële inzage.'
    },
    'hoge-raad': {
        name: 'Hoge Raad',
        expectations: 'Adviseren van het bestuur bij belangrijke beslissingen. Fungeren als ervaren mentoren.',
        duties: 'Strategisch advies, staff training, conflict resolutie, quality control.',
        permissions: 'Hoge admin rechten, toegang tot alle systemen, staff evaluatie.'
    },
    'director': {
        name: 'Director',
        expectations: 'Leidinggeven aan specifieke afdelingen (Development, Management, etc.). Verantwoordelijk voor afdelingsdoelen.',
        duties: 'Afdelingsmanagement, team coördinatie, rapportage aan bestuur, afdelingsstrategie.',
        permissions: 'Afdelings-specifieke admin rechten, team management, toegang tot relevante systemen.'
    },
    'supervisor': {
        name: 'Supervisor',
        expectations: 'Toezicht houden op staff activiteiten en kwaliteit van service. Fungeren als tussenpersoon.',
        duties: 'Staff supervisie, kwaliteitstoetsing, escalatie handling, staff support.',
        permissions: 'Admin rechten, staff evaluatie, toegang tot logs en reports.'
    },
    'advisor': {
        name: 'Advisor',
        expectations: 'Advies geven aan management en bestuur op basis van ervaring en expertise.',
        duties: 'Adviesrol, mentorship, speciale projecten, community vertegenwoordiging.',
        permissions: 'Beperkte admin rechten, toegang tot relevante informatie, adviserende rol.'
    },
    'head-of-development': {
        name: 'Head of Development',
        expectations: 'Leidinggeven aan het development team. Verantwoordelijk voor technische richting en kwaliteit.',
        duties: 'Development management, code review, architectuur, bug fixing, feature planning.',
        permissions: 'Volledige technische toegang, server toegang, database toegang, deployment rechten.'
    },
    'senior-developer': {
        name: 'Senior Developer',
        expectations: 'Ervarende developer die complexe problemen oplost en junioren begeleidt.',
        duties: 'Complex development, code review, mentorship, architectuur bijdrage.',
        permissions: 'Hoge technische rechten, database toegang, deployment rechten.'
    },
    'developer': {
        name: 'Developer',
        expectations: 'Actief bijdragen aan development van nieuwe features en bug fixes.',
        duties: 'Feature development, bug fixing, code optimalisatie, testing.',
        permissions: 'Development rechten, database toegang, test omgeving toegang.'
    },
    'junior-developer': {
        name: 'Junior Developer',
        expectations: 'Leren en groeien als developer onder begeleiding van senior developers.',
        duties: 'Eenvoudige development taken, bug fixes, leren van codebase, testing.',
        permissions: 'Beperkte development rechten, test omgeving toegang.'
    },
    'head-management': {
        name: 'Head Management',
        expectations: 'Leidinggeven aan het management team. Verantwoordelijk voor staff operations.',
        duties: 'Management coördinatie, staff planning, conflict resolutie, rapportage.',
        permissions: 'Hoge admin rechten, staff management, toegang tot alle systemen.'
    },
    'senior-management': {
        name: 'Senior Management',
        expectations: 'Ervarende manager die complexe staff situaties handled en junioren begeleidt.',
        duties: 'Staff supervision, escalatie handling, training, quality control.',
        permissions: 'Admin rechten, staff evaluatie, toegang tot logs.'
    },
    'management': {
        name: 'Management',
        expectations: 'Dagelijkse staff coördinatie en support. Fungeren als eerste aanspreekpunt.',
        duties: 'Staff support, ticket coördinatie, conflict mediation, staff meetings.',
        permissions: 'Admin rechten, staff management, toegang tot relevante systemen.'
    },
    'junior-management': {
        name: 'Junior Management',
        expectations: 'Leren en groeien in management rol onder begeleiding.',
        duties: 'Staff support, ticket handling, leren van procedures, community contact.',
        permissions: 'Beperkte admin rechten, toegang tot basis systemen.'
    },
    'senior-head-of-staff': {
        name: 'Senior Head of Staff',
        expectations: 'Leidinggeven aan het HoS team. Verantwoordelijk voor staff kwaliteit en training.',
        duties: 'HoS coördinatie, staff training, kwaliteitstoetsing, strategische planning.',
        permissions: 'Hoge admin rechten, staff evaluatie, training rechten.'
    },
    'head-of-staff': {
        name: 'Head of Staff',
        expectations: 'Leidinggeven aan staff team en zorgen voor dagelijkse operations.',
        duties: 'Staff management, roster planning, performance monitoring, support.',
        permissions: 'Admin rechten, staff management, toegang tot logs.'
    },
    'junior-head-of-staff': {
        name: 'Junior Head of Staff',
        expectations: 'Leren en groeien in HoS rol onder begeleiding van senior HoS.',
        duties: 'Staff support, roster hulp, leren van management, quality control.',
        permissions: 'Beperkte admin rechten, staff evaluatie.'
    },
    'head-admin': {
        name: 'Head Admin',
        expectations: 'Leidinggeven aan admin team. Verantwoordelijk voor admin kwaliteit en procedures.',
        duties: 'Admin coördinatie, training, escalation handling, quality control.',
        permissions: 'Hoge admin rechten, staff evaluatie, ban rechten.'
    },
    'super-admin': {
        name: 'Super Admin',
        expectations: 'Ervarende admin die complexe situaties handled en admin support biedt.',
        duties: 'Complex ticket handling, admin support, escalation, mentoring.',
        permissions: 'Hoge admin rechten, ban rechten, staff tools.'
    },
    'senior-admin': {
        name: 'Senior Admin',
        expectations: 'Ervarende admin met verantwoordelijkheid voor quality en mentoring.',
        duties: 'Ticket handling, admin support, training, quality control.',
        permissions: 'Admin rechten, ban rechten, staff tools.'
    },
    'admin': {
        name: 'Admin',
        expectations: 'Volwaardig admin met verantwoordelijkheid voor ticket handling en community support.',
        duties: 'Ticket handling, ban appeals, community support, report processing.',
        permissions: 'Admin rechten, ban rechten (tijdelijk), staff tools.'
    },
    'junior-admin': {
        name: 'Junior Admin',
        expectations: 'Nieuwe admin in leerfase. Werkt onder begeleiding van senior admins.',
        duties: 'Ticket handling (onder toezicht), leren procedures, community support.',
        permissions: 'Beperkte admin rechten, geen ban rechten, basis staff tools.'
    },
    'head-moderator': {
        name: 'Head Moderator',
        expectations: 'Leidinggeven aan moderator team. Verantwoordelijk voor mod kwaliteit en training.',
        duties: 'Mod coördinatie, training, escalation handling, quality control.',
        permissions: 'Moderator admin rechten, mute/kick rechten, staff tools.'
    },
    'super-moderator': {
        name: 'Super Moderator',
        expectations: 'Ervarende moderator die complexe situaties handled en mod support biedt.',
        duties: 'Complex ticket handling, mod support, escalation, mentoring.',
        permissions: 'Moderator admin rechten, mute/kick rechten, staff tools.'
    },
    'senior-moderator': {
        name: 'Senior Moderator',
        expectations: 'Ervarende moderator met verantwoordelijkheid voor quality en mentoring.',
        duties: 'Ticket handling, mod support, training, quality control.',
        permissions: 'Moderator rechten, mute/kick rechten, staff tools.'
    },
    'moderator': {
        name: 'Moderator',
        expectations: 'Volwaardige moderator met verantwoordelijkheid voor ticket handling.',
        duties: 'Ticket handling, chat moderation, basic support, report processing.',
        permissions: 'Moderator rechten, mute/kick rechten, basis staff tools.'
    },
    'junior-moderator': {
        name: 'Junior Moderator',
        expectations: 'Nieuwe moderator in leerfase. Werkt onder begeleiding van senior mods.',
        duties: 'Ticket handling (onder toezicht), chat moderation, leren procedures.',
        permissions: 'Beperkte moderator rechten, mute rechten, basis tools.'
    },
    'staff': {
        name: 'Staff',
        expectations: 'Nieuw stafflid in leerfase. Focus op leren en community support.',
        duties: 'Community support, leren procedures, ticket observation, basic help.',
        permissions: 'Basis staff rechten, geen sanctie rechten, observatie tools.'
    },
    'hoofd-staff-coordinator': {
        name: 'Hoofd Staff Coördinator',
        expectations: 'Leidinggeven aan alle coördinatoren. Verantwoordelijk voor coördinatie kwaliteit.',
        duties: 'Coördinator management, team planning, quality control, escalation handling.',
        permissions: 'Admin rechten, coördinator management, toegang tot alle systemen.'
    },
    'hoofd-onderwereld-coordinator': {
        name: 'Hoofd Onderwereld Coördinator',
        expectations: 'Leidinggeven aan onderwereld coördinatoren. Expert in illegale RP.',
        duties: 'Onderwereld management, gang coördinatie, illegal RP quality control.',
        permissions: 'Admin rechten, onderwereld tools, gang management.'
    },
    'hoofd-hulpdiensten-coordinator': {
        name: 'Hoofd Hulpdiensten Coördinator',
        expectations: 'Leidinggeven aan hulpdiensten coördinatoren. Expert in legale RP.',
        duties: 'Hulpdiensten management, PD/EMS coördinatie, legal RP quality control.',
        permissions: 'Admin rechten, hulpdiensten tools, faction management.'
    },
    'refund-coordinator': {
        name: 'Refund Coördinator',
        expectations: 'Verantwoordelijk voor refund aanvragen en item compensatie.',
        duties: 'Refund processing, item restoration, log analysis, refund policy enforcement.',
        permissions: 'Admin rechten, item spawning, log toegang, refund tools.'
    },
    'unban-coordinator': {
        name: 'Unban Coördinator',
        expectations: 'Verantwoordelijk voor unban aanvragen en ban review.',
        duties: 'Unban processing, ban review, appeal handling, ban policy enforcement.',
        permissions: 'Admin rechten, ban management, log toegang, unban tools.'
    },
    'staff-coordinator': {
        name: 'Staff Coördinator',
        expectations: 'Coördineren van staff activiteiten en roster management.',
        duties: 'Staff roster, availability tracking, shift planning, staff communication.',
        permissions: 'Admin rechten, roster management, staff tools.'
    },
    'onderwereld-coordinator': {
        name: 'Onderwereld Coördinator',
        expectations: 'Expert in onderwereld RP en gang activiteiten.',
        duties: 'Gang support, illegal RP quality control, underworld events, gang disputes.',
        permissions: 'Admin rechten, gang tools, underworld systems.'
    },
    'hulpdiensten-coordinator': {
        name: 'Hulpdiensten Coördinator',
        expectations: 'Expert in hulpdiensten RP (PD, EMS).',
        duties: 'PD/EMS support, legal RP quality control, faction events, department disputes.',
        permissions: 'Admin rechten, faction tools, hulpdiensten systems.'
    }
};

// Violation data with categories
const violationData = {
    'failrp': {
        category: 'Cat. 3',
        sanction: '3 uur ban',
        tasks: '+ 50 taken',
        explanation: 'FailRP is het niet spelen volgens de realiteit. Dit omvat onrealistische acties die niet zouden gebeuren in het echte leven.',
        notes: 'Vraag de speler om uitleg over de situatie. Documenteer het incident met screenshots of logs.'
    },
    'powergaming': {
        category: 'Cat. 3',
        sanction: '3 uur ban',
        tasks: '+ 50 taken',
        explanation: 'Powergaming is het dwingen van acties op andere spelers zonder hen een kans te geven te reageren.',
        notes: 'Controleer of de speler andere spelers geen kans gaf om te reageren op hun acties.'
    },
    'metagaming': {
        category: 'Cat. 4',
        sanction: '6 uur ban',
        tasks: '+ 100 taken',
        explanation: 'Metagaming is het gebruiken van out-of-character informatie voor in-character voordelen.',
        notes: 'Controleer Discord logs, streams of andere externe communicatie voor bewijs.'
    },
    'combatlog': {
        category: 'Cat. 5',
        sanction: '12 uur ban',
        tasks: '+ 150 taken',
        explanation: 'Combatloggen is het verlaten van de server tijdens een actieve RP situatie om de gevolgen te vermijden.',
        notes: 'Check logs voor disconnect tijdstippen en vergelijk met RP situatie.'
    },
    'nvol': {
        category: 'Cat. 3',
        sanction: '3 uur ban',
        tasks: '+ 50 taken',
        explanation: 'NVOL (Niet Verlenen van Openbare Levensbehoeften) is het niet reageren op redelijke RP situaties.',
        notes: 'Evalueer of de speler een geldige RP reden had om niet te reageren.'
    },
    'vdm': {
        category: 'Cat. 6',
        sanction: '24 uur ban',
        tasks: '+ 250 taken',
        explanation: 'VDM (Vehicle Deathmatch) is het opzettelijk doden of verwonden van spelers met een voertuig zonder RP reden.',
        notes: 'Bekijk dashboard camera footage of getuigenverklaringen voor bewijs.'
    },
    'rdm': {
        category: 'Cat. 6',
        sanction: '24 uur ban',
        tasks: '+ 250 taken',
        explanation: 'RDM (Random Deathmatch) is het doden van spelers zonder geldige RP reden of initiëtie.',
        notes: 'Controleer of er een geldige RP initiëtie was voordat er werd geschoten.'
    },
    'cheats': {
        category: 'Cat. 11',
        sanction: 'Permanente ban + account wipe',
        tasks: '-',
        explanation: 'Het gebruik van cheats, hacks of andere third-party software om oneerlijke voordelen te krijgen.',
        notes: 'Verzamel bewijs van cheat gedrag. Permanent ban na bevestiging door development team.'
    },
    'exploits': {
        category: 'Cat. 8',
        sanction: '2 weken ban',
        tasks: '+ 400 taken',
        explanation: 'Het misbruiken van bugs of glitches in het spel voor voordeel.',
        notes: 'Documenteer de specifieke exploit en rapporteer aan development team voor fix.'
    },
    'staff-abuse': {
        category: 'Cat. 10',
        sanction: 'Permanente ban',
        tasks: '-',
        explanation: 'Het misbruiken van staffrechten voor persoonlijk gewin of om andere spelers te bevoordelen.',
        notes: 'Direct rapport aan management. Verwijder staff rechten tot onderzoek is voltooid.'
    },
    'toxic': {
        category: 'Cat. 2',
        sanction: 'Waarschuwing',
        tasks: '+ 100 taken',
        explanation: 'Toxisch gedrag zoals beledigingen, discriminatie, of harassment naar andere spelers.',
        notes: 'Waarschuw de speler eerst. Bij herhaling upgrade naar hogere categorie.'
    },
    'copbait': {
        category: 'Cat. 2',
        sanction: 'Waarschuwing',
        tasks: '+ 100 taken',
        explanation: 'Het opzettelijk provoceren van politie zonder geldige RP reden.',
        notes: 'Evalueer of er een geldige RP reden was voor het gedrag.'
    },
    'f6-abuse': {
        category: 'Cat. 3',
        sanction: '3 uur ban',
        tasks: '+ 50 taken',
        explanation: 'Het misbruiken van het F6 menu (report menu) voor niet-serieuze of valse reports.',
        notes: 'Check report geschiedenis voor patroon van misbruik.'
    },
    'gang-territory': {
        category: 'Cat. 4',
        sanction: '6 uur ban',
        tasks: '+ 100 taken',
        explanation: 'Overtredingen van gangterrein regels, zoals onterecht binnendringen of vechten in zones.',
        notes: 'Controleer gangterrein kaart en regels voor de specifieke zone.'
    },
    'weapon-abuse': {
        category: 'Cat. 5',
        sanction: '12 uur ban',
        tasks: '+ 150 taken',
        explanation: 'Het misbruiken van wapens, zoals schieten zonder reden of in no-fire zones.',
        notes: 'Controleer locatie en context van het wapengebruik.'
    },
    'mic-abuse': {
        category: 'Cat. 2',
        sanction: 'Waarschuwing',
        tasks: '+ 100 taken',
        explanation: 'Het misbruiken van de microfoon, zoals schreeuwen, muziek afspelen, of harassment via voice.',
        notes: 'Waarschuw de speler. Bij herhaling mute of hogere sanctie.'
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);

    // Initialize navigation
    initNavigation();

    // Initialize command palette
    initCommandPalette();

    // Initialize scroll progress
    initScrollProgress();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize rank categories
    initRankCategories();

    // Initialize punishment calculator
    initPunishmentCalculator();

    // Initialize punishment filters
    initPunishmentFilters();

    // Initialize search
    initSearch();

    // Initialize rules TOC
    initRulesTOC();
});

// Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            navigateTo(targetPage);
        });
    });

    // Handle hash changes
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            navigateTo(hash);
        }
    });

    // Initial page load
    const initialHash = window.location.hash.substring(1);
    if (initialHash) {
        navigateTo(initialHash);
    }
}

function navigateTo(pageName) {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    // Update nav items
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-page') === pageName) {
            item.classList.add('active');
        }
    });

    // Update pages
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === `page-${pageName}`) {
            page.classList.add('active');
        }
    });

    // Update URL hash
    window.location.hash = pageName;

    // Close mobile menu
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
}

// Command Palette
function initCommandPalette() {
    const commandPalette = document.getElementById('commandPalette');
    const commandInput = document.getElementById('commandInput');
    const commandBackdrop = document.getElementById('commandBackdrop');
    const commandItems = document.querySelectorAll('.command-item');

    // Open with Ctrl+K
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleCommandPalette();
        }
        if (e.key === 'Escape') {
            closeCommandPalette();
        }
    });

    // Close on backdrop click
    commandBackdrop.addEventListener('click', closeCommandPalette);

    // Handle command item clicks
    commandItems.forEach(item => {
        item.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const target = this.getAttribute('data-target');
            
            if (action === 'navigate') {
                navigateTo(target);
                closeCommandPalette();
            }
        });
    });

    // Search functionality
    commandInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        commandItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Global search input
    const globalSearch = document.getElementById('globalSearch');
    globalSearch.addEventListener('focus', toggleCommandPalette);
}

function toggleCommandPalette() {
    const commandPalette = document.getElementById('commandPalette');
    commandPalette.classList.toggle('active');
    if (commandPalette.classList.contains('active')) {
        document.getElementById('commandInput').focus();
    }
}

function closeCommandPalette() {
    const commandPalette = document.getElementById('commandPalette');
    commandPalette.classList.remove('active');
    document.getElementById('commandInput').value = '';
}

// Scroll Progress
function initScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');

    mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });
}

// Rank Categories
function initRankCategories() {
    const rankCategories = document.querySelectorAll('.rank-category');
    
    rankCategories.forEach(category => {
        category.classList.add('expanded');
    });
}

function toggleRankCategory(header) {
    const category = header.closest('.rank-category');
    category.classList.toggle('expanded');
}

// Rank Modal Functions
function openRankModal(rankId) {
    const modal = document.getElementById('rankModal');
    const rank = rankData[rankId];
    
    if (!rank) {
        showNotification('Rank informatie niet gevonden', 'error');
        return;
    }
    
    document.getElementById('modalRankTitle').textContent = rank.name;
    document.getElementById('modalExpectations').textContent = rank.expectations;
    document.getElementById('modalDuties').textContent = rank.duties;
    document.getElementById('modalPermissions').textContent = rank.permissions;
    
    modal.classList.add('active');
}

function closeRankModal() {
    const modal = document.getElementById('rankModal');
    modal.classList.remove('active');
}

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeRankModal();
    }
});

// Punishment Calculator
function initPunishmentCalculator() {
    // Function is called by the button in HTML
}

function calculatePunishment() {
    const violationSelect = document.getElementById('violationSelect');
    const playerName = document.getElementById('playerName').value;
    const playerId = document.getElementById('playerId').value;
    const incidentDescription = document.getElementById('incidentDescription').value;
    const previousViolations = document.getElementById('previousViolations').value;
    const extraNotes = document.getElementById('extraNotes').value;
    const selectedValue = violationSelect.value;
    const resultDiv = document.getElementById('calculatorResult');

    if (!selectedValue || !violationData[selectedValue]) {
        showNotification('Selecteer eerst een overtreding', 'warning');
        return;
    }

    const data = violationData[selectedValue];
    
    document.getElementById('resultCategory').textContent = data.category;
    document.getElementById('resultSanction').textContent = data.sanction;
    document.getElementById('resultTasks').textContent = data.tasks;
    document.getElementById('resultExplanation').textContent = data.explanation;
    document.getElementById('resultNotes').textContent = data.notes;

    // Generate summary
    let summary = `Speler: ${playerName || 'Onbekend'} (${playerId || 'Geen ID'})\n`;
    summary += `Overtreding: ${selectedValue.toUpperCase()}\n`;
    summary += `Categorie: ${data.category}\n`;
    summary += `Sanctie: ${data.sanction}\n`;
    summary += `Taken: ${data.tasks}\n`;
    if (incidentDescription) {
        summary += `\nBeschrijving: ${incidentDescription}\n`;
    }
    if (previousViolations > 0) {
        summary += `Eerdere overtredingen: ${previousViolations}\n`;
    }
    if (extraNotes) {
        summary += `\nExtra notities: ${extraNotes}\n`;
    }
    
    document.getElementById('resultSummary').textContent = summary;

    resultDiv.style.display = 'block';
    resultDiv.style.animation = 'fadeIn 0.5s ease';
    
    showNotification('Sanctie berekend!', 'success');
}

function copyResult() {
    const summary = document.getElementById('resultSummary').textContent;
    navigator.clipboard.writeText(summary).then(() => {
        showNotification('Resultaat gekopieerd naar klembord!', 'success');
    }).catch(() => {
        showNotification('Kon niet kopiëren', 'error');
    });
}

// Punishment Filters
function initPunishmentFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const punishmentRows = document.querySelectorAll('.punishment-row');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter rows
            punishmentRows.forEach(row => {
                const category = row.getAttribute('data-category');
                
                if (filter === 'all') {
                    row.style.display = '';
                } else if (filter === 'warning' && category === 'warning') {
                    row.style.display = '';
                } else if (filter === 'ban' && category === 'ban') {
                    row.style.display = '';
                } else if (filter === 'permanent' && category === 'permanent') {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });

    // Search functionality
    const punishmentSearch = document.getElementById('punishmentSearch');
    punishmentSearch.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        punishmentRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Search
function initSearch() {
    const rulesSearch = document.getElementById('rulesSearch');
    const ruleSections = document.querySelectorAll('.rule-section');

    if (rulesSearch) {
        rulesSearch.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            ruleSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(query)) {
                    section.style.display = '';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    }
}

// Rules TOC
function initRulesTOC() {
    const tocItems = document.querySelectorAll('.toc-item');
    const ruleSections = document.querySelectorAll('.rule-section');

    tocItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active state
                tocItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active TOC item on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        ruleSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        tocItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };

    notification.innerHTML = `
        <i class="fas ${icons[type]} notification-icon"></i>
        <div class="notification-content">
            <div class="notification-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
            <div class="notification-message">${message}</div>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    container.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add CSS animation for reverse slide
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
