/* ===================================================
   Ember Business Services — Main JS
   =================================================== */

/* ---------- Translations ---------- */
const translations = {
  en: {
    /* Nav */
    'nav-home':     'Home',
    'nav-about':    'About',
    'nav-services': 'Services',
    'nav-contact':  'Contact',

    /* Hero */
    'hero-badge':    'Henderson, Colorado',
    'hero-title':    'Professional Business Support Services',
    'hero-subtitle': 'Helping individuals and small businesses stay organized with administrative and financial support.',
    'hero-btn-call': 'Call Now',
    'hero-btn-book': 'Book a Consultation',
    'hero-badge1':   'Bilingual Services',
    'hero-badge2':   'Small Business Focused',
    'hero-badge3':   'Notary Services',
    'photo-label':   'Professional Photo',

    /* About */
    'about-label':  'About',
    'about-title':  'Meet Dulce Dorado',
    'about-p1':     'Dulce Dorado is a dedicated business services professional based in Henderson, Colorado, with a passion for helping small businesses and entrepreneurs thrive. She understands the challenges that come with running a business, from keeping finances in order to managing the everyday administrative tasks that can quickly become overwhelming.',
    'about-p2':     'With a hands-on, personalized approach, Dulce offers a wide range of support services designed to bring organization and clarity to your business operations. Whether you\'re just starting out or need help streamlining your existing processes, she provides the tools and guidance to help your business succeed.',
    'stat1':        'Services Offered',
    'stat2':        'Bilingual Support',
    'about-cta':    'Get in Touch',
    'photo-label2': 'Professional Photo',

    /* Services */
    'services-label':    'What We Offer',
    'services-title':    'Our Services',
    'services-subtitle': 'Expert administrative and financial support to help your business run smoothly.',
    's1-title': 'Business Registration',
    's1-desc':  'Expert guidance to register your business officially.',
    's2-title': 'Invoicing Setup',
    's2-desc':  'Professional invoicing so you get paid on time.',
    's3-title': 'Accounts Receivable',
    's3-desc':  'Track money owed so nothing slips through.',
    's4-title': 'Accounts Payable',
    's4-desc':  'Outgoing payments organized and on schedule.',
    's5-title': 'Budget Spreadsheets',
    's5-desc':  'Custom spreadsheets for income, expenses, and goals.',
    's6-title': 'Bookkeeping Support',
    's6-desc':  'Records organized and ready for your accountant.',
    's7-title': 'Office Organization',
    's7-desc':  'Digital files and physical documents organized.',
    's8-title': 'Notary Services',
    's8-desc':  'Official notarization for legal documents.',
    's9-title': 'Translation Assistance',
    's9-desc':  'English-Spanish support for business documents.',

    /* How it Works */
    'how-label':    'Process',
    'how-title':    'How It Works',
    'how-subtitle': 'Getting started is simple. Three easy steps to a more organized business.',
    'step1-title':  'Contact Us',
    'step1-desc':   'Reach out by phone or fill out our contact form. We\'re here to answer your questions and discuss how we can help.',
    'step2-title':  'Discuss Your Needs',
    'step2-desc':   'We\'ll have a conversation about your business, your current challenges, and which services are the right fit for you.',
    'step3-title':  'Get Organized',
    'step3-desc':   'We get to work! Simplify your business operations, reduce stress, and focus on what you do best while we handle the rest.',

    /* Contact */
    'contact-label':    'Reach Us',
    'contact-title':    'Get In Touch',
    'contact-subtitle': 'Ready to get your business organized? Contact us today and let\'s talk about how we can help.',
    'ci-phone-label':   'Phone',
    'ci-location-label':'Location',
    'ci-lang-label':    'Languages',
    'ci-lang-value':    'English & Spanish',
    'contact-btn-call': 'Call Now: 720-948-6244',
    'form-title':            'Send a Message',
    'form-name-label':       'Name',
    'form-name-placeholder': 'Your full name',
    'form-email-label':      'Email',
    'form-email-placeholder':'your@email.com',
    'form-message-label':    'Message',
    'form-message-placeholder': 'Tell us about your business and how we can help...',
    'form-submit':   'Send Message',
    'form-success':  'Thank you! Your message has been sent. We\'ll be in touch soon.',

    /* Footer */
    'footer-rights': 'All rights reserved.',

    /* Card close button */
    'card-close': 'Close',

    /* Service detail — Business Registration */
    's1-detail-intro': 'Expert legal guidance for company formation and compliance. We assist with:',
    's1-detail-1': 'Business Registration with the Colorado Secretary of State.',
    's1-detail-2': 'EIN Application Assistance via the IRS webpage.',
    's1-detail-3': 'Business License Guidance and document preparation as needed.',
    's1-detail-4': 'Strategic advice on choosing the right business structure (LLC, Corp).',

    /* Service detail — Business Invoicing Setup */
    's2-detail-intro': 'Implementation of professional billing systems to ensure you get paid on time.',
    's2-detail-1': 'Create professional invoice templates customized for your brand.',
    's2-detail-2': 'Set up digital invoicing systems to automate your billing process.',
    's2-detail-3': 'Add your business logo and essential details for a premium look.',
    's2-detail-4': 'Guidance on tracking payments and sending invoices directly to clients.',

    /* Service detail — Accounts Receivable */
    's3-detail-intro': 'Set up systems to track and manage the money customers owe your business.',
    's3-detail-1': 'Organize customer payment records to maintain a clear history.',
    's3-detail-2': 'Monitor unpaid invoices to ensure no revenue is overlooked.',
    's3-detail-3': 'Improve cash flow tracking by identifying payment trends.',
    's3-detail-4': 'Maintain an up-to-date financial overview of your pending income.',

    /* Service detail — Accounts Payable */
    's4-detail-intro': 'Strategic organization of the bills and expenses your business must pay.',
    's4-detail-1': 'Track vendor invoices and manage payment schedules effectively.',
    's4-detail-2': 'Organize business bills to avoid late payments and penalties.',
    's4-detail-3': 'Categorize expenses to simplify tax preparation and financial reporting.',
    's4-detail-4': 'Keep a clear record of all outgoing payments for better cash flow management.',

    /* Service detail — Bookkeeping Support */
    's6-detail-intro': 'Organized and accurate financial records to keep your business on track.',
    's6-detail-1': 'Record daily transactions to maintain an up-to-date financial history.',
    's6-detail-2': 'Categorize income and expenses for clearer financial reporting.',
    's6-detail-3': 'Prepare organized records ready for your accountant or tax professional.',
    's6-detail-4': 'Identify financial trends to support smarter business decisions.',

    /* Service detail — Office Organization */
    's7-detail-intro': 'Efficient systems to bring order to your business files and documents.',
    's7-detail-1': 'Create a structured digital filing system for easy document access.',
    's7-detail-2': 'Organize physical documents and records for quick retrieval.',
    's7-detail-3': 'Implement consistent naming conventions and folder structures.',
    's7-detail-4': 'Save time and reduce stress with well-organized business workflows.',

    /* Service detail — Notary Services */
    's8-detail-intro': 'Professional notarization to authenticate your important legal documents.',
    's8-detail-1': 'Notarize contracts, affidavits, powers of attorney, and other legal documents.',
    's8-detail-2': 'Provide a secure, legally recognized notary seal and signature.',
    's8-detail-3': 'Available for individuals and businesses in the Henderson, Colorado area.',
    's8-detail-4': 'Bilingual notary services offered in both English and Spanish.',

    /* Service detail — Translation Assistance */
    's9-detail-intro': 'Accurate English-Spanish translation support for your business communications.',
    's9-detail-1': 'Translate business documents, contracts, and correspondence with precision.',
    's9-detail-2': 'Provide bilingual assistance during client meetings or consultations.',
    's9-detail-3': 'Ensure clear communication between English and Spanish-speaking parties.',
    's9-detail-4': 'Help you reach a broader, bilingual customer base with confidence.',

    /* Service — Personal Document Organization */
    's10-title': 'Personal Document Organization',
    's10-desc':  'Turn paper clutter into a simple, organized system.',
    's10-detail-intro': 'I help individuals and families turn paper clutter into a simple, organized system so you always know where your important documents are.',
    's10-detail-1': 'Sort and Categorize: We work together to organize bills, bank statements, and credit card records.',
    's10-detail-2': 'Health & Tax Readiness: Organization of medical bills, insurance documents, and tax-related paperwork.',
    's10-detail-3': 'Household Management: Systems for important notices and general household documents.',
    's10-detail-4': 'Custom Filing Systems: Creation of physical or digital filing systems to reduce stress and save time.',
    's10-detail-5': 'Goal: Ideal for preparing for tax season, managing household finances, or creating an organized home office.',
  },

  es: {
    /* Nav */
    'nav-home':     'Inicio',
    'nav-about':    'Acerca',
    'nav-services': 'Servicios',
    'nav-contact':  'Contacto',

    /* Hero */
    'hero-badge':    'Henderson, Colorado',
    'hero-title':    'Servicios Profesionales de Apoyo Empresarial',
    'hero-subtitle': 'Ayudamos a individuos y pequeños negocios a mantenerse organizados con apoyo administrativo y financiero.',
    'hero-btn-call': 'Llamar Ahora',
    'hero-btn-book': 'Reservar una Consulta',
    'hero-badge1':   'Servicios Bilingües',
    'hero-badge2':   'Enfocado en Pequeños Negocios',
    'hero-badge3':   'Servicios de Notaría',
    'photo-label':   'Foto Profesional',

    /* About */
    'about-label':  'Acerca',
    'about-title':  'Conoce a Dulce Dorado',
    'about-p1':     'Dulce Dorado es una profesional de servicios empresariales dedicada, ubicada en Henderson, Colorado, con pasión por ayudar a los pequeños negocios y emprendedores a prosperar. Comprende los retos que conlleva administrar un negocio, desde mantener las finanzas en orden hasta gestionar las tareas administrativas diarias que rápidamente pueden volverse abrumadoras.',
    'about-p2':     'Con un enfoque personalizado y práctico, Dulce ofrece una amplia gama de servicios de apoyo diseñados para brindar organización y claridad a sus operaciones comerciales. Ya sea que esté comenzando o necesite ayuda para optimizar sus procesos actuales, ella proporciona las herramientas y la orientación necesarias para que su negocio tenga éxito.',
    'stat1':        'Servicios Ofrecidos',
    'stat2':        'Apoyo Bilingüe',
    'about-cta':    'Contáctenos',
    'photo-label2': 'Foto Profesional',

    /* Services */
    'services-label':    'Lo Que Ofrecemos',
    'services-title':    'Nuestros Servicios',
    'services-subtitle': 'Apoyo administrativo y financiero integral adaptado a las necesidades de su negocio.',
    's1-title': 'Registro de Negocios',
    's1-desc':  'Orientación experta para registrar su empresa oficialmente.',
    's2-title': 'Configuración de Facturas',
    's2-desc':  'Facturación profesional para recibir pagos a tiempo.',
    's3-title': 'Cuentas por Cobrar',
    's3-desc':  'Rastree el dinero que le deben sin que nada se pierda.',
    's4-title': 'Cuentas por Pagar',
    's4-desc':  'Pagos organizados y al día con sus proveedores.',
    's5-title': 'Presupuestos Empresariales',
    's5-desc':  'Hojas de cálculo para ingresos, gastos y metas.',
    's6-title': 'Apoyo Contable',
    's6-desc':  'Registros organizados y listos para su contador.',
    's7-title': 'Organización de Oficina',
    's7-desc':  'Archivos digitales y documentos físicos organizados.',
    's8-title': 'Servicios de Notaría',
    's8-desc':  'Notarización oficial de documentos legales.',
    's9-title': 'Asistencia de Traducción',
    's9-desc':  'Apoyo inglés-español para documentos comerciales.',

    /* How it Works */
    'how-label':    'Proceso',
    'how-title':    'Cómo Funciona',
    'how-subtitle': 'Comenzar es sencillo. Tres pasos fáciles para un negocio más organizado.',
    'step1-title':  'Contáctenos',
    'step1-desc':   'Comuníquese por teléfono o complete nuestro formulario. Estamos aquí para responder sus preguntas y hablar sobre cómo podemos ayudarle.',
    'step2-title':  'Hable de Sus Necesidades',
    'step2-desc':   'Tendremos una conversación sobre su negocio, sus desafíos actuales y qué servicios son los más adecuados para usted.',
    'step3-title':  'Organícese',
    'step3-desc':   '¡Manos a la obra! Simplifique las operaciones de su negocio, reduzca el estrés y concéntrese en lo que mejor sabe hacer mientras nosotros nos encargamos del resto.',

    /* Contact */
    'contact-label':    'Contáctenos',
    'contact-title':    'Póngase en Contacto',
    'contact-subtitle': '¿Listo para organizar su negocio? Contáctenos hoy y hablemos sobre cómo podemos ayudarle.',
    'ci-phone-label':   'Teléfono',
    'ci-location-label':'Ubicación',
    'ci-lang-label':    'Idiomas',
    'ci-lang-value':    'Inglés y Español',
    'contact-btn-call': 'Llamar Ahora: 720-948-6244',
    'form-title':            'Enviar un Mensaje',
    'form-name-label':       'Nombre',
    'form-name-placeholder': 'Su nombre completo',
    'form-email-label':      'Correo Electrónico',
    'form-email-placeholder':'su@correo.com',
    'form-message-label':    'Mensaje',
    'form-message-placeholder': 'Cuéntenos sobre su negocio y cómo podemos ayudarle...',
    'form-submit':   'Enviar Mensaje',
    'form-success':  '¡Gracias! Su mensaje ha sido enviado. Nos pondremos en contacto pronto.',

    /* Footer */
    'footer-rights': 'Todos los derechos reservados.',

    /* Card close button */
    'card-close': 'Cerrar',

    /* Service detail — Registro de Negocios */
    's1-detail-intro': 'Orientación legal experta para la formación y cumplimiento de su empresa. Le asistimos con:',
    's1-detail-1': 'Registro del negocio ante la Secretaría de Estado de Colorado.',
    's1-detail-2': 'Asistencia en la solicitud de EIN a través de la página del IRS.',
    's1-detail-3': 'Orientación para licencias comerciales y preparación de documentos.',
    's1-detail-4': 'Asesoría estratégica para elegir la estructura empresarial correcta (LLC, Corp).',

    /* Service detail — Configuración de Facturas */
    's2-detail-intro': 'Implementación de sistemas de facturación profesional para garantizar que reciba sus pagos a tiempo.',
    's2-detail-1': 'Cree plantillas de facturas profesionales personalizadas para su marca.',
    's2-detail-2': 'Configure sistemas de facturación digital para automatizar su proceso de cobro.',
    's2-detail-3': 'Agregue su logotipo y datos esenciales para una presentación de calidad.',
    's2-detail-4': 'Orientación sobre seguimiento de pagos y envío de facturas directamente a sus clientes.',

    /* Service detail — Cuentas por Cobrar */
    's3-detail-intro': 'Implemente sistemas para rastrear y gestionar el dinero que sus clientes le deben.',
    's3-detail-1': 'Organice los registros de pagos de clientes para mantener un historial claro.',
    's3-detail-2': 'Monitoree facturas sin pagar para garantizar que ningún ingreso se pierda.',
    's3-detail-3': 'Mejore el seguimiento del flujo de caja identificando tendencias de pago.',
    's3-detail-4': 'Mantenga un panorama financiero actualizado de sus ingresos pendientes.',

    /* Service detail — Cuentas por Pagar */
    's4-detail-intro': 'Organización estratégica de las facturas y gastos que su negocio debe pagar.',
    's4-detail-1': 'Rastree facturas de proveedores y gestione calendarios de pago de forma eficiente.',
    's4-detail-2': 'Organice las cuentas del negocio para evitar pagos tardíos y penalizaciones.',
    's4-detail-3': 'Categorice los gastos para simplificar la preparación de impuestos e informes financieros.',
    's4-detail-4': 'Mantenga un registro claro de todos los pagos realizados para una mejor gestión del flujo de caja.',

    /* Service detail — Apoyo Contable */
    's6-detail-intro': 'Registros financieros organizados y precisos para mantener su negocio en orden.',
    's6-detail-1': 'Registre transacciones diarias para mantener un historial financiero actualizado.',
    's6-detail-2': 'Categorice ingresos y gastos para reportes financieros más claros.',
    's6-detail-3': 'Prepare registros organizados y listos para su contador o profesional de impuestos.',
    's6-detail-4': 'Identifique tendencias financieras para apoyar decisiones comerciales más inteligentes.',

    /* Service detail — Organización de Oficina */
    's7-detail-intro': 'Sistemas eficientes para poner orden en los archivos y documentos de su negocio.',
    's7-detail-1': 'Cree un sistema de archivos digitales estructurado para acceso fácil a documentos.',
    's7-detail-2': 'Organice documentos físicos y registros para recuperarlos rápidamente.',
    's7-detail-3': 'Implemente convenciones de nomenclatura y estructuras de carpetas consistentes.',
    's7-detail-4': 'Ahorre tiempo y reduzca el estrés con flujos de trabajo empresariales bien organizados.',

    /* Service detail — Servicios de Notaría */
    's8-detail-intro': 'Notarización profesional para autenticar sus documentos legales importantes.',
    's8-detail-1': 'Notarice contratos, declaraciones juradas, poderes notariales y otros documentos legales.',
    's8-detail-2': 'Proporcione un sello y firma notarial seguro y legalmente reconocido.',
    's8-detail-3': 'Disponible para individuos y empresas en el área de Henderson, Colorado.',
    's8-detail-4': 'Servicios de notaría bilingüe en inglés y español.',

    /* Service detail — Asistencia de Traducción */
    's9-detail-intro': 'Apoyo de traducción inglés-español preciso para sus comunicaciones comerciales.',
    's9-detail-1': 'Traduzca documentos comerciales, contratos y correspondencia con precisión.',
    's9-detail-2': 'Brinde asistencia bilingüe durante reuniones o consultas con clientes.',
    's9-detail-3': 'Garantice una comunicación clara entre partes de habla inglesa y española.',
    's9-detail-4': 'Ayúdele a llegar a una base de clientes bilingüe más amplia con confianza.',

    /* Servicio — Organización de Documentos Personales */
    's10-title': 'Organización de Documentos Personales',
    's10-desc':  'Convierte el desorden de papeles en un sistema simple y organizado.',
    's10-detail-intro': 'Ayudo a individuos y familias a convertir el desorden de papeles en un sistema simple y organizado para que siempre sepas dónde están tus documentos importantes.',
    's10-detail-1': 'Clasificación y Categorización: Trabajamos juntos para organizar facturas, estados de cuenta bancarios y registros de tarjetas de crédito.',
    's10-detail-2': 'Preparación para Salud e Impuestos: Organización de facturas médicas, documentos de seguro y papelería relacionada con impuestos.',
    's10-detail-3': 'Gestión del Hogar: Sistemas para avisos importantes y documentos generales del hogar.',
    's10-detail-4': 'Sistemas de Archivo Personalizados: Creación de sistemas de archivo físico o digital para reducir el estrés y ahorrar tiempo.',
    's10-detail-5': 'Objetivo: Ideal para prepararse para la temporada de impuestos, gestionar las finanzas del hogar o crear una oficina en casa organizada.',
  }
};

/* ---------- Language state ---------- */
let currentLanguage = 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang];

  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update toggle button styles (desktop + mobile)
  ['lang-en', 'lang-es', 'lang-en-m', 'lang-es-m'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const btnLang = id.startsWith('lang-en') ? 'en' : 'es';
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.style.color = '#C9A227';
    } else {
      btn.classList.remove('active');
      btn.style.color = '#6B7280';
    }
  });
}

/* ---------- Mobile Menu ---------- */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const iconMenu      = document.getElementById('icon-menu');
const iconClose     = document.getElementById('icon-close');

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    closeMobileMenu();
  } else {
    mobileMenu.classList.remove('hidden');
    iconMenu.classList.add('hidden');
    iconClose.classList.remove('hidden');
  }
});

function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  iconMenu.classList.remove('hidden');
  iconClose.classList.add('hidden');
}

/* ---------- Smooth Scroll (for anchors) ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = document.getElementById('navbar').offsetHeight;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---------- Scroll-reveal ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-square, .step-card, .stat-square, .contact-info-card').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ---------- Contact Form ---------- */
function handleFormSubmit(e) {
  e.preventDefault();

  const btn     = document.getElementById('form-submit-btn');
  const success = document.getElementById('form-success');

  // Simple feedback (no real backend — swap for your email service)
  btn.disabled = true;
  btn.style.opacity = '0.6';

  setTimeout(() => {
    document.getElementById('contact-form').reset();
    success.classList.remove('hidden');
    btn.disabled = false;
    btn.style.opacity = '1';

    // Update success message text based on current language
    success.textContent = translations[currentLanguage]['form-success'];

    // Hide after 5 seconds
    setTimeout(() => success.classList.add('hidden'), 5000);
  }, 800);
}

/* ---------- Global Subtle Parallax ---------- */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero     = document.getElementById('home');
  const howSect  = document.getElementById('how-it-works');
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));

  let ticking = false;

  function update() {
    const scrollY = window.scrollY;
    const winH    = window.innerHeight;

    /* — Hero background (image scrolls slower than page) — */
    if (hero && scrollY < hero.offsetHeight + 300) {
      hero.style.backgroundPositionY =
        'calc(50% + ' + (scrollY * 0.20).toFixed(1) + 'px)';
    }

    /* — How It Works background parallax — */
    if (howSect) {
      const r = howSect.getBoundingClientRect();
      if (r.bottom > 0 && r.top < winH) {
        const progress = (winH - r.top) / (winH + r.height); // 0→1
        const offset   = (progress - 0.5) * 80;              // ±40px
        howSect.style.backgroundPositionY =
          'calc(50% + ' + offset.toFixed(1) + 'px)';
      }
    }

    /* — Decorative element parallax (data-parallax="speed") — */
    parallaxEls.forEach(function (el) {
      const speed = parseFloat(el.getAttribute('data-parallax'));
      const r     = el.getBoundingClientRect();
      if (r.bottom > -150 && r.top < winH + 150) {
        const center = r.top + r.height / 2 - winH / 2;
        el.style.transform = 'translateY(' + (center * speed).toFixed(1) + 'px)';
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  /* Initial position on page load */
  update();
})();

/* ---------- Service Modal ---------- */
var serviceModal = document.getElementById('service-modal');

function openServiceModal(card) {
  var serviceId = card.getAttribute('data-service');
  var t = translations[currentLanguage];

  // Image
  var cardImg = card.querySelector('.card-image img');
  var modalImg = document.getElementById('modal-img');
  modalImg.src = cardImg.src;
  modalImg.alt = cardImg.alt;

  // Icon (clone inner SVG from card)
  var cardIcon = card.querySelector('.square-icon');
  var modalIcon = document.getElementById('modal-icon');
  modalIcon.innerHTML = cardIcon.innerHTML;

  // Title
  document.getElementById('modal-title').textContent = t[serviceId + '-title'] || '';

  // Intro
  document.getElementById('modal-intro').textContent = t[serviceId + '-detail-intro'] || '';

  // Bullet list
  var list = document.getElementById('modal-list');
  list.innerHTML = '';
  for (var i = 1; i <= 6; i++) {
    var key = serviceId + '-detail-' + i;
    if (t[key]) {
      var li = document.createElement('li');
      li.textContent = t[key];
      list.appendChild(li);
    }
  }

  // Show modal
  serviceModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  serviceModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on overlay click
serviceModal.addEventListener('click', function(e) {
  if (e.target === serviceModal) closeServiceModal();
});

// Close on ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeServiceModal();
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Init ---------- */
setLanguage('en');
