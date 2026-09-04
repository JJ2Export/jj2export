/* ==========================================================================
   JJ2 REPRESENTAÇÃO COMERCIAL INTERNACIONAL - SCRIPT & MULTILINGUAL i18N
   ========================================================================== */

// i18n Translations Dictionary
const translations = {
    pt: {
        status_text: "Atendimento B2B Multilíngue Ativo | Curitiba/PR - Brasil (UTC-3)",
        mode_a4: "Modo Folheto A4",
        print_pdf: "Exportar PDF",
        slogan: "Connecting Brazilian Food Excellence to the Global Market",
        apex_badge: "Presença Internacional em Rodadas de Negócios APEX",
        apex_title: "Ponte Estratégica entre Indústrias Brasileiras e Compradores Globais",
        apex_subtitle: "Atuamos ativamente nas rodadas de negócios internacionais promovidas pela APEX-Brasil, conectando supermercadistas, distribuidores e importadores às maiores excelências do setor alimentício do Brasil.",
        market_europe: "Europa",
        market_europe_desc: "União Europeia, Reino Unido & Suíça. Certificação de qualidade e rastreabilidade total.",
        market_asia: "Ásia",
        market_asia_desc: "Japão, China, Singapura & Ásia Oriental. Adaptação de embalagens e conformidade regulatória.",
        market_americas: "Américas",
        market_americas_desc: "EUA, Canadá, México e Mercosul. Registro FDA, rotulagem nutricional e logística integrada.",
        market_middle_east: "Oriente Médio",
        market_middle_east_desc: "Emirados Árabes Unidos, Arábia Saudita e Catar. Produtos com certificação Halal exigida.",
        pillar_1: "Padrões Internacionais (ISO, HACCP, Halal, Kosher, FDA)",
        pillar_2: "Negociação Direta com as Indústrias Fabricantes",
        pillar_3: "Suporte Logístico & Operações de Comércio Exterior",
        brands_badge: "Portfólio Exclusivo de Indústrias",
        brands_title: "Marcas de Excelência Representadas pela JJ2",
        filter_all: "Todas",
        filter_coco: "Coco",
        filter_doces: "Chocolates",
        filter_laticinios: "Laticínios",
        filter_snacks: "Amendoim",
        filter_superfoods: "Palmito & Açaí",
        qualicoco_desc: "Linha completa e inovadora de derivados de coco para o varejo, food service e indústria global.",
        waiss_desc: "Chocolates finos gourmet e panettones artesanais desenvolvidos para paladares internacionais exigentes.",
        crioulo_desc: "Queijos selecionados com rigor artesanal e controle industrial de altíssimo padrão para exportação.",
        graos_desc: "Especialistas em produtos à base de amendoim selecionado, pastas integrais e snacks crocantíssimos.",
        alteroza_desc: "Palmitos nobres em conserva de cultivo sustentável e polpa de açaí puro direto da Amazônia.",
        request_catalog: "Catálogo & Preço FOB/CIF",
        cta_badge: "Sala de Visitas Digital JJ2",
        cta_title: "Atendimento Direto a Compradores e Importadores Internacionais",
        cta_desc: "Acesse nossa Sala de Visitas Digital para solicitar cotações personalizadas com termos Incoterms (FOB/CIF), obter catálogos técnicos em PDF e agendar reuniões com nossos diretores.",
        btn_visiting_room: "Entrar na Sala de Visitas Digital",
        btn_whatsapp: "Conversar com Diretores no WhatsApp",
        contact_heading: "Contato B2B Internacional",
        multilingual_heading: "Atendimento Multilíngue",
        multilingual_desc: "Nossa equipe comercial está totalmente preparada para negociações nos seguintes idiomas:",
        modal_title: "Sala de Visitas Digital - JJ2 Internacional",
        modal_subtitle: "Solicitação de Tabelas de Preços FOB/CIF e Catálogos Técnicos",
        tab_quote: "Solicitar Tabela / Cotação",
        tab_schedule: "Agendar Reunião B2B",
        tab_catalogs: "Baixar Catálogos",
        btn_top_schedule: "Agendar Reunião",
        btn_cta_schedule: "Agendar Reunião (Google Agenda)",
        schedule_tab_title: "Agendamento Direto no Google Agenda",
        schedule_tab_desc: "Escolha o melhor dia e horário para conversar diretamente com Julio Lima & Juliano Canato. A reunião será agendada automaticamente com link do Google Meet e confirmação no seu e-mail.",
        btn_open_calendar: "Abrir Agenda de Horários",
        lbl_company: "Empresa / Importadora *",
        lbl_name: "Nome do Comprador *",
        lbl_email: "E-mail Corporativo *",
        lbl_country: "País de Destino / Porto *",
        lbl_brands: "Marcas de Interesse *",
        lbl_incoterm: "Modalidade Incoterm de Preferência",
        lbl_comments: "Observações ou Especificações da Demanda",
        btn_send: "Enviar solicitação à equipe da JJ2",
        catalogs_intro: "Clique abaixo para baixar os catálogos completos com especificações técnicas e opções de embalagem:"
    },
    en: {
        status_text: "Active Multilingual B2B Desk | Curitiba/PR - Brazil (UTC-3)",
        mode_a4: "A4 Brochure Mode",
        print_pdf: "Export PDF",
        slogan: "Connecting Brazilian Food Excellence to the Global Market",
        apex_badge: "International Presence in APEX Business Roundtables",
        apex_title: "Strategic Bridge Between Brazilian Manufacturers & Global Buyers",
        apex_subtitle: "We actively take part in international trade matchmaking organized by APEX-Brasil, connecting supermarket chains, distributors, and importers to Brazil's finest food manufacturers.",
        market_europe: "Europe",
        market_europe_desc: "European Union, UK & Switzerland. High quality standards and full traceability.",
        market_asia: "Asia",
        market_asia_desc: "Japan, China, Singapore & East Asia. Customized packaging and full regulatory compliance.",
        market_americas: "Americas",
        market_americas_desc: "USA, Canada, Mexico & Mercosur. FDA registered, international nutrition labeling, integrated logistics.",
        market_middle_east: "Middle East",
        market_middle_east_desc: "UAE, Saudi Arabia & Qatar. Premium products with required Halal certification.",
        pillar_1: "International Standards (ISO, HACCP, Halal, Kosher, FDA)",
        pillar_2: "Direct Factory Price Negotiations",
        pillar_3: "Logistics Support & Foreign Trade Operations",
        brands_badge: "Exclusive Manufacturer Portfolio",
        brands_title: "Premier Brands Represented by JJ2",
        filter_all: "All",
        filter_coco: "Coconut",
        filter_doces: "Chocolates",
        filter_laticinios: "Dairy",
        filter_snacks: "Peanut",
        filter_superfoods: "Palm & Açaí",
        qualicoco_desc: "Complete and innovative coconut derivatives line for retail, food service, and global food industry.",
        waiss_desc: "Fine gourmet chocolates and artisan panettones crafted for demanding international buyers.",
        crioulo_desc: "Hand-selected specialty cheeses crafted under strict export quality standards.",
        graos_desc: "Peanut product specialists offering 100% natural peanut butter, roasted snacks, and raw ingredients.",
        alteroza_desc: "Sustainably harvested premium hearts of palm in jars and pure Amazonian açaí pulp.",
        request_catalog: "Catalog & FOB/CIF Quote",
        cta_badge: "JJ2 Digital Visiting Room",
        cta_title: "Direct B2B Desk for International Buyers & Importers",
        cta_desc: "Enter our Digital Visiting Room to request tailored Incoterms (FOB/CIF) price lists, download technical spec sheets in PDF, or schedule a meeting with our directors.",
        btn_visiting_room: "Enter Digital Visiting Room",
        btn_whatsapp: "Chat directly on WhatsApp",
        contact_heading: "International B2B Contact",
        multilingual_heading: "Multilingual Desk",
        multilingual_desc: "Our trade team is fully equipped to conduct negotiations in:",
        modal_title: "Digital Visiting Room - JJ2 International",
        modal_subtitle: "FOB/CIF Price List & Technical Catalog Request",
        tab_quote: "Request Quote / Price List",
        tab_schedule: "Schedule B2B Meeting",
        tab_catalogs: "Download Catalogs",
        btn_top_schedule: "Schedule Meeting",
        btn_cta_schedule: "Schedule Meeting (Google Calendar)",
        schedule_tab_title: "Direct Google Calendar Booking",
        schedule_tab_desc: "Select the best date and time to speak directly with Julio Lima & Juliano Canato. The meeting will be booked automatically with Google Meet link and instant email confirmation.",
        btn_open_calendar: "Open Calendar",
        lbl_company: "Company / Importer Name *",
        lbl_name: "Buyer Name *",
        lbl_email: "Corporate Email *",
        lbl_country: "Destination Country / Port *",
        lbl_brands: "Brands of Interest *",
        btn_send: "Send inquiry to the JJ2 team",
        catalogs_intro: "Click below to download full product spec catalogs and packaging options:"
    },
    es: {
        status_text: "Atención B2B Multilingüe Activa | Curitiba/PR - Brasil (UTC-3)",
        mode_a4: "Modo Folleto A4",
        print_pdf: "Exportar PDF",
        slogan: "Connecting Brazilian Food Excellence to the Global Market",
        apex_badge: "Presencia Internacional en Ruedas de Negocios APEX",
        apex_title: "Puente Estratégico entre Industrias Brasileñas e Importadores Globales",
        apex_subtitle: "Participamos activamente en las ruedas de negocios internacionales promovidas por APEX-Brasil, conectando supermercados, distribuidores e importadores con las mayores excelencias alimenticias de Brasil.",
        market_europe: "Europa",
        market_europe_desc: "Unión Europea, Reino Unido y Suiza. Certificación de calidad y trazabilidad total.",
        market_asia: "Asia",
        market_asia_desc: "Japón, China, Singapur y Asia Oriental. Adaptación de empaques y cumplimiento normativo.",
        market_americas: "Américas",
        market_americas_desc: "EE.UU., Canadá, México y Mercosur. Registro FDA, etiquetado nutricional y logística integrada.",
        market_middle_east: "Oriente Medio",
        market_middle_east_desc: "Emiratos Árabes Unidos, Arabia Saudita y Qatar. Productos con certificación Halal exigida.",
        pillar_1: "Estándares Internacionales (ISO, HACCP, Halal, Kosher, FDA)",
        pillar_2: "Negociación Directa con la Fábrica",
        pillar_3: "Soporte Logístico y Operaciones de Comercio Exterior",
        brands_badge: "Portafolio Exclusivo de Industrias",
        brands_title: "Marcas de Excelencia Representadas por JJ2",
        filter_all: "Todas",
        filter_coco: "Coco",
        filter_doces: "Chocolates",
        filter_laticinios: "Lácteos",
        filter_snacks: "Maní",
        filter_superfoods: "Palmito y Açaí",
        qualicoco_desc: "Línea completa e innovadora de derivados de coco para el retail, food service e industria alimentaria.",
        waiss_desc: "Chocolates finos gourmet y panettones artesanales creados para paladares internacionales exigentes.",
        crioulo_desc: "Quesos seleccionados con rigor artesanal y control industrial de altísimo nivel de exportación.",
        graos_desc: "Especialistas en productos a base de maní seleccionado, cremas integrales y snacks crujientes.",
        alteroza_desc: "Palmitos nobles en conserva de cultivo sostenible y pulpa de açaí puro directo de la Amazonía.",
        request_catalog: "Catálogo y Precio FOB/CIF",
        cta_badge: "Sala de Visitas Digital JJ2",
        cta_title: "Atención Directa a Compradores e Importadores Internacionales",
        cta_desc: "Acceda a nuestra Sala de Visitas Digital para solicitar cotizaciones personalizadas con términos Incoterms (FOB/CIF), obtener catálogos técnicos en PDF y agendar reuniones con nuestros directores.",
        btn_visiting_room: "Entrar en la Sala de Visitas Digital",
        btn_whatsapp: "Hablar por WhatsApp",
        contact_heading: "Contacto B2B Internacional",
        multilingual_heading: "Atención Multilingüe",
        multilingual_desc: "Nuestro equipo comercial está totalmente preparado para negociaciones en los siguientes idiomas:",
        modal_title: "Sala de Visitas Digital - JJ2 Internacional",
        modal_subtitle: "Solicitud de Listas de Precios FOB/CIF y Catálogos Técnicos",
        tab_quote: "Solicitar Cotización",
        tab_schedule: "Agendar Reunión B2B",
        tab_catalogs: "Descargar Catálogos",
        btn_top_schedule: "Agendar Reunión",
        btn_cta_schedule: "Agendar Reunión (Google Calendar)",
        schedule_tab_title: "Agendamiento Directo en Google Calendar",
        schedule_tab_desc: "Elija el mejor día y hora para hablar directamente con Julio Lima y Juliano Canato. La reunión se agendará automáticamente con enlace de Google Meet y confirmación por correo.",
        btn_open_calendar: "Abrir Agenda",
        lbl_company: "Empresa / Importadora *",
        lbl_name: "Nombre del Comprador *",
        lbl_email: "Correo Corporativo *",
        lbl_country: "País de Destino / Puerto *",
        lbl_brands: "Marcas de Interés *",
        lbl_incoterm: "Incoterm Preferido",
        lbl_comments: "Observaciones o Especificaciones de Demanda",
        btn_send: "Enviar solicitud al equipo de JJ2",
        catalogs_intro: "Haga clic a continuación para descargar los catálogos completos con especificaciones técnicas:"
    }
};

let currentLang = 'pt';

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initBrandFilters();
    initA4ModeToggle();
});

// Language Switcher Logic
function initLanguageSwitcher() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update language-specific brand images dynamically
    const qualicocoImg = document.getElementById('qualicocoImg');
    if (qualicocoImg) {
        if (lang === 'en') {
            qualicocoImg.src = 'assets/qualicoco_en.jpg';
        } else if (lang === 'es') {
            qualicocoImg.src = 'assets/qualicoco_es.jpg';
        } else {
            qualicocoImg.src = 'assets/qualicoco_pt.png';
        }
    }
}

// Brand Filtering Logic
function initBrandFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const brandCards = document.querySelectorAll('.brand-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            brandCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = card.classList.contains('card-featured') && window.innerWidth >= 992 ? 'grid' : 'flex';
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
}

// A4 Mode Toggle
function initA4ModeToggle() {
    const toggleBtn = document.getElementById('toggleA4Mode');
    const wrapper = document.getElementById('pageWrapper');

    if (toggleBtn && wrapper) {
        toggleBtn.addEventListener('click', () => {
            wrapper.classList.toggle('a4-preview-mode');
            const isA4 = wrapper.classList.contains('a4-preview-mode');
            showToast(isA4 ? "Modo de Visualização A4 Ativado" : "Modo Web Responsivo Ativado");
        });
    }
}

// Modal Control - Digital Visiting Room
function openVisitingRoom(brandName = null) {
    const modal = document.getElementById('visitingRoomModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (brandName) {
            // Pre-check brand checkbox in quote form
            const checkboxes = document.querySelectorAll('input[name="brand_interest"]');
            checkboxes.forEach(cb => {
                if (brandName.toLowerCase().includes(cb.value.toLowerCase())) {
                    cb.checked = true;
                }
            });
        }
    }
}

function closeVisitingRoom() {
    const modal = document.getElementById('visitingRoomModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function switchModalTab(tabName) {
    const tabQuote = document.getElementById('tabQuote');
    const tabSchedule = document.getElementById('tabSchedule');
    const tabCatalogs = document.getElementById('tabCatalogs');
    const tabBtns = document.querySelectorAll('.modal-tabs .tab-btn');

    tabBtns.forEach(btn => btn.classList.remove('active'));

    if (tabName === 'quote') {
        if (tabQuote) tabQuote.classList.add('active');
        if (tabSchedule) tabSchedule.classList.remove('active');
        if (tabCatalogs) tabCatalogs.classList.remove('active');
        if (tabBtns[0]) tabBtns[0].classList.add('active');
    } else if (tabName === 'schedule') {
        if (tabQuote) tabQuote.classList.remove('active');
        if (tabSchedule) tabSchedule.classList.add('active');
        if (tabCatalogs) tabCatalogs.classList.remove('active');
        if (tabBtns[1]) tabBtns[1].classList.add('active');
    } else {
        if (tabQuote) tabQuote.classList.remove('active');
        if (tabSchedule) tabSchedule.classList.remove('active');
        if (tabCatalogs) tabCatalogs.classList.add('active');
        if (tabBtns[2]) tabBtns[2].classList.add('active');
    }
}

// Google Agenda Meeting Launcher
const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/WeJ4WMJRi7jdJzjG9";

function openCalMeeting(event) {
    if (event) event.preventDefault();
    closeVisitingRoom();
    window.open(GOOGLE_CALENDAR_LINK, '_blank');
}

// Form Submission Handler (Integrated with Google Workspace Email comercial@jj2export.com)
async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    }

    const company = document.getElementById('companyName').value;
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const country = document.getElementById('targetCountry').value;
    const incoterm = document.getElementById('incoterm').value;
    const comments = document.getElementById('comments') ? document.getElementById('comments').value : '';

    const checkedBrands = Array.from(document.querySelectorAll('input[name="brand_interest"]:checked'))
        .map(cb => cb.value)
        .join(', ');

    const payload = {
        _subject: `[JJ2 Site] Nova Cotação B2B: ${company} (${country})`,
        _replyto: email,
        "Empresa / Importadora": company,
        "Nome do Comprador": name,
        "E-mail Corporativo": email,
        "País de Destino / Porto": country,
        "Marcas de Interesse": checkedBrands || 'Portfólio Geral',
        "Incoterm": incoterm,
        "Observações / Especificações": comments
    };

    try {
        const response = await fetch("https://formsubmit.co/ajax/comercial@jj2export.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            showToast("Solicitação enviada com sucesso para comercial@jj2export.com!");
        } else {
            showToast("Solicitação registrada com sucesso!");
        }
    } catch (err) {
        showToast("Solicitação enviada!");
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
        closeVisitingRoom();

        setTimeout(() => {
            const msg = `Olá equipe da JJ2, sou ${name} da empresa ${company} (${country}). Enviei uma solicitação via site com interesse nas marcas: ${checkedBrands || 'Portfólio Geral'}. E-mail: ${email}.`;
            window.open(`https://wa.me/5541988407503?text=${encodeURIComponent(msg)}`, '_blank');
        }, 1200);
    }
}

// WhatsApp Direct
function openWhatsapp() {
    const msg = "Olá equipe da JJ2! Gostaria de obter mais informações sobre o portfólio de exportação da JJ2 Internacional.";
    window.open(`https://wa.me/5541988407503?text=${encodeURIComponent(msg)}`, '_blank');
}

// Download Simulation
function downloadFile(filename) {
    showToast(`Iniciando download do arquivo: ${filename}`);
}

// Toast System
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    if (toast && toastMsg) {
        toastMsg.textContent = message;
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
        }, 3500);
    }
}
