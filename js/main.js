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
    'services-subtitle': 'Comprehensive administrative and financial support tailored to your business needs.',
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

document.querySelectorAll('.service-circle, .step-card, .stat-circle, .contact-info-card').forEach(el => {
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

/* ---------- Subtle Parallax (hero background) ---------- */
(function () {
  const hero = document.getElementById('home');
  if (!hero) return;
  // Skip on touch devices for performance
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        const scrolled = window.scrollY;
        if (scrolled < hero.offsetHeight + 80) {
          hero.style.backgroundPositionY = 'calc(50% + ' + (scrolled * 0.22) + 'px)';
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Init ---------- */
setLanguage('en');
