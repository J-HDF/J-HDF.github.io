/* Accessible navigation, Italian / English copy and publication search. No dependencies. */
(() => {
  'use strict';
  const it = {
    originalArchive: '',
    supPara1: 'ha conseguito il dottorato alla TU Wien nel 2026 con una tesi su problemi variazionali non locali e sulle loro applicazioni al micromagnetismo.',
    supPara2: 'ha conseguito il dottorato alla TU Wien con la tesi “Modern phenomena in micromagnetics from a variational point of view”, sull’omogeneizzazione a valori in varietà nel micromagnetismo.',
    supLinkNews: 'Comunicato della TU Wien', supLinkPage: 'Pagina personale',
    fundNow: 'In corso',
    fundFra: 'Co-proponente, insieme a Bianca Stroffolini e Giovanni Scilla · finanziamento di Ateneo per la ricerca (FRA) dell’Università di Napoli Federico II.',
    navActivities: 'Attività',
    highlightSup: 'Co-supervisione di due dottorandi alla TU Wien',
    highlightSupDesc: 'Insieme a Elisa Davoli · Rossella Giorgio e Leon Happ.',
    evSiam: 'Minisimposio nell’ambito della SIAM Conference on Mathematical Aspects of Materials Science (17–28 maggio 2021) · co-organizzato con C. Muratov e V. Slastikov.',
    evEsi: 'Workshop presso l’Erwin Schrödinger Institute, Vienna (2–6 dicembre 2019) · co-organizzato con M. Ruggeri, V. Slastikov e A. Zarnescu · finanziamento di 14.400 €.',
    evLinkEsi: 'Pagina ESI',
    evLinkWs: 'Sito del workshop',
    moreTalks: 'Altri seminari su invito',
    fundFwf: 'Responsabile scientifico e Principal Investigator · Austrian Science Fund (FWF) · bando competitivo con revisione tra pari · concluso a ottobre 2025.',
    fundPrin: 'Membro del progetto · Ministero dell’Università e della Ricerca (MUR) · grant 2022HKBF5C.',
    fundSfb: 'Membro del progetto · Programma di ricerca speciale dell’Austrian Science Fund (FWF).',
    fundFmjh: 'Fondation Mathématique Jacques Hadamard · Labex LMH (ANR-11-LABX-0056-LMH) · due anni, selezione competitiva con revisione tra pari.',
    honHim: 'Partecipante su invito e finanziato, trimestre tematico “Mathematics for Complex Materials”',
    honHab: 'Abilitazione e titolo di Privatdozent, TU Wien',
    honHabDesc: 'Tesi “Variational Methods in the Study of Ferromagnetic Materials”, discussa il 23 novembre 2020.',
    honMpi: 'Ospite su invito, Max Planck Institute for Mathematics in the Sciences',
    honMpiDesc: 'Lipsia, Germania.',
    honIni: 'Partecipante su invito e finanziato, programma “The Mathematical Design of New Materials”',
    honIniDesc: 'Isaac Newton Institute, University of Cambridge · 21 aprile – 14 giugno 2019.',
    honCite: 'Alumni member, Cité Internationale Universitaire de Paris',
    honCiteDesc: 'Eletto per concorso sulla base dei titoli.',
    honPhd: 'Primo classificato, Dottorato in Matematica per le Scienze dell’Ingegneria (XXV ciclo)',
    svcEd: 'Academic Editor, Journal of Function Spaces',
    svcEdDesc: 'Membro del comitato editoriale (Hindawi).',
    svcAnr: 'Esperto scientifico, Agence Nationale de la Recherche (ANR)',
    svcAnrDesc: 'Selezionato per la valutazione del bando Generic Call 2021.',
    svcReferee: 'REVISORE PER',
    mediaKind: 'Articolo su rivista · Heureka 4/2020',
    mediaBy: 'di Uschi Sorz',
    mediaDesc: 'Un articolo sul settimanale austriaco Falter sulla mia ricerca sugli skyrmioni magnetici e su come la matematica possa aiutare a prevederne stabilità e dinamica in vista di una futura memorizzazione dei dati a basso consumo energetico.',
    mediaCta: 'Leggi l’articolo (in tedesco)',
    supIntro: 'Alla TU Wien ho co-supervisionato due dottorandi insieme a ',
    supIntro2: ', responsabile del gruppo di Calcolo delle Variazioni Multiscala. Entrambi hanno partecipato al progetto FWF “Analysis and Modeling of Magnetic Skyrmions”.',
    actEyebrow: 'OLTRE LE PUBBLICAZIONI',
    navActivities2: 'Attività',
    actLead: 'Supervisione, stampa, eventi organizzati, seminari su invito, finanziamenti e attività al servizio della comunità scientifica.',
    supLabel: 'SUPERVISIONE',
    supTitle: 'Dottorandi',
    mediaLabel: 'NEI MEDIA',
    mediaTitle: 'Stampa e divulgazione',
    evLabel: 'ORGANIZZAZIONE',
    evTitle: 'Eventi organizzati',
    talkLabel: 'SEMINARI SU INVITO',
    talkTitle: 'Interventi su invito selezionati',
    fundLabel: 'FINANZIAMENTI',
    fundTitle: 'Progetti e borse',
    honLabel: 'ALTRE ATTIVITÀ',
    honTitle: 'Soggiorni di ricerca e titoli',
    svcLabel: 'SERVIZIO',
    svcTitle: 'Attività editoriale e di revisione',
    magneticFigCaption: 'Configurazioni e strutture magnetiche',
    figureExplore: 'Approfondisci la ricerca',
    highlightsLabel: 'ATTIVITÀ SCIENTIFICA',
    highlightsHeading: 'Attività selezionate',
    highlight2026: 'Nuovi lavori sulla regolarità ellittica e sui modelli variazionali',
    highlight2026Desc: 'I preprint più recenti sono disponibili nella sezione Pubblicazioni.',
    highlight2025: 'Relatore invitato · Isaac Newton Institute, Cambridge',
    highlight2025Desc: 'Recent challenges in the mathematical design of new materials.',
    highlight2022: 'Analysis and Modeling of Magnetic Skyrmions',
    highlight2022Desc: 'Progetto di ricerca FWF P34609 · Responsabile scientifico (concluso a ottobre 2025).',
    researchFigureCaption: 'Configurazioni magnetiche — illustrazione tratta dalla mia pagina accademica originale.',
    teachingArchiveLabel: 'Un’immagine dall’archivio didattico',
    institutionsLabel: 'PRECEDENTI ISTITUZIONI DI RICERCA',
    navHome: 'Profilo', navResearch: 'Ricerca', navPublications: 'Pubblicazioni',
    navTeaching: 'Didattica', navCV: 'CV', navContact: 'Contatti',
    identityRole: 'Professore di Analisi Matematica',
    identityAffiliation: 'Dipartimento di Matematica e Applicazioni',
    onlineProfiles: 'PROFILI ACCADEMICI', uniLabel: 'UNIVERSITÀ DEGLI STUDI DI NAPOLI FEDERICO II', uniFull: 'Università degli Studi di Napoli Federico II', location: 'NAPOLI, ITALIA', locationShort: 'NAPOLI · ITALIA',
    eyebrowHome: 'PROFILO ACCADEMICO',
    homeTitle1: 'Analisi matematica', homeTitle2: 'e le sue applicazioni.',
    homeLead: 'La mia ricerca utilizza metodi variazionali per studiare problemi matematici che nascono nella meccanica del continuo e nella scienza dei materiali.',
    homeBio: 'Mi interesso in particolare di skyrmioni magnetici, cristalli liquidi e strutture sottili, nonché di equazioni alle derivate parziali non lineari e disuguaglianze funzionali.',
    moreResearch: 'Esplora la ricerca', careerLink: 'Percorso accademico',
    graphicLabel: 'AMBITO DI RICERCA', graphicTitle: 'Skyrmioni magnetici',
    fact1: 'Calcolo delle variazioni', fact2: 'Equazioni alle derivate parziali', fact3: 'Matematica dei materiali',
    latestLabel: 'ULTIMI LAVORI', latestTitle: 'Pubblicazioni recenti', allPublications: 'Tutte le pubblicazioni',
    teachingLabel: 'DIDATTICA', homeCoursesTitle: 'Anno accademico in corso', moreTeaching: 'Tutti i corsi',
    curCourse1: 'Analisi Matematica I', curSchool1: 'Ingegneria Elettrica e Informatica',
    curCourse2: 'Analisi Matematica II', curSchool2: 'Ingegneria Civile e Ambientale',
    researchEyebrow: 'AMBITI DI RICERCA',
    researchLead: 'La mia attività di ricerca si colloca all’intersezione tra analisi matematica rigorosa e modellizzazione dei fenomeni fisici, con particolare attenzione alla meccanica del continuo e alla scienza dei materiali.',
    featureEyebrow: 'UN TEMA DI RICERCA',
    skyrmionTitle: 'La matematica degli skyrmioni magnetici',
    skyrmionText: 'Studio modelli variazionali per le configurazioni magnetiche, le interazioni chirali, i film sottili e la geometria dei minimizzatori dell’energia, con approcci analitici e numerici.',
    featurePaper: 'Articolo correlato su ResearchGate',
    topic1Title: 'Micromagnetismo e configurazioni magnetiche',
    topic1Desc: 'Stati di equilibrio, skyrmioni, interazioni magnetostatiche non locali, interazione di Dzyaloshinskii–Moriya e modelli ridotti per strutture magnetiche sottili.',
    topic2Title: 'Equazioni alle derivate parziali e disuguaglianze',
    topic2Desc: 'Regolarità di sistemi ellittici non lineari, mappe armoniche, simmetria dei minimizzatori e disuguaglianze funzionali negli spazi classici e a esponente variabile.',
    topic3Title: 'Modelli variazionali non locali e materia soffice',
    topic3Desc: 'Limiti dal non locale al locale, calcolo delle variazioni per i cristalli liquidi, riduzione dimensionale e questioni analitiche nella meccanica del continuo.',
    projectLabel: 'PROGETTO DI RICERCA',
    projectTitle: 'Analysis and Modeling of Magnetic Skyrmions',
    projectText: 'Progetto FWF P34609 (2022–2025) · Responsabile scientifico. Ricerca su skyrmioni magnetici, micromagnetismo e metodi variazionali.',
    pubsEyebrow: 'PRODUZIONE SCIENTIFICA',
    pubsLead: 'Bibliografia completa tratta dal mio elenco delle pubblicazioni, con i nuovi lavori del 2026. Filtra per anno o categoria, oppure cerca per titolo, autore e argomento. I titoli rimandano alle relative schede ResearchGate quando disponibili.',
    bibAllCount: 'voci', bibArticlesCount: 'articoli su rivista', bibPreprintsCount: 'preprint', bibOtherCount: 'altri lavori',
    kindAll: 'Tutte le categorie', kindArticles: 'Articoli su rivista', kindPreprints: 'Preprint', kindOther: 'Altri lavori',
    bibSource: 'Bibliografia tratta dall’elenco dell’autore (45 voci), integrata con tre preprint successivi del 2026. Dati editoriali e correzioni dei DOI verificati con gli editori e gli archivi istituzionali.',
    filterAll: 'Tutti', filterEarlier: 'Precedenti',
    pubEmpty: 'Nessuna pubblicazione trovata.', pubReset: 'Azzera i filtri',
    completeList: 'Profilo completo su ResearchGate',
    teachingEyebrow: 'ATTIVITÀ DIDATTICA',
    teachingLead: 'Insegnamenti attuali e precedenti presso l’Università degli Studi di Napoli Federico II e la TU Wien. Per programmi e comunicazioni ufficiali, consulta il portale docenti.',
    thisYear: 'INSEGNAMENTI ATTUALI', uninaCourses: 'Università degli Studi di Napoli Federico II',
    facultyPortal: 'Portale docenti',
    curSchool1Long: 'Ingegneria Elettrica e Informatica (DM3) · Università degli Studi di Napoli Federico II',
    curSchool2Long: 'Ingegneria Civile e Ambientale (D38) · Università degli Studi di Napoli Federico II',
    teachingSource: 'Gli insegnamenti attuali sono tratti dall’elenco istituzionale per l’anno accademico 2026/27.',
    previousTeaching: 'DIDATTICA PRECEDENTE', naplesPrevious: 'Napoli',
    naplesMath1: 'Analisi Matematica I',
    naples2025a: 'Ingegneria Civile, Edile e Ambientale · 9 CFU',
    naples2025b: 'Ingegneria Elettrica, Navale e Ambientale · 9 CFU',
    naples2024: 'Corsi di Ingegneria (Civile, Edile, Ambientale, Elettrica e Navale)',
    naples2021: 'Ingegneria Civile, Edile e Ambientale · 9 CFU',
    viennaTeaching: 'DIDATTICA A VIENNA',
    viennaDist: 'Teoria delle Distribuzioni',
    viennaDistDesc: 'Studenti magistrali e di dottorato in Matematica Tecnica · 3 ECTS',
    viennaProg: 'Programmazione Scientifica in Matematica',
    viennaProgDesc: 'Corso magistrale in Mathematical Modelling in Engineering · 3 ECTS',
    cvEyebrow: 'PERCORSO ACCADEMICO', cvTitle: 'Curriculum',
    cvLead: 'Esperienze di ricerca e incarichi universitari in Italia, Austria, Spagna, Francia e Regno Unito.',
    experience: 'ESPERIENZE', careerTitle: 'Incarichi accademici',
    careerRoleCurrent: 'Professore di Analisi Matematica',
    careerRoleResearcher: 'Ricercatore in Analisi Matematica',
    careerNaples: 'Università degli Studi di Napoli Federico II',
    careerVienna: 'University Assistant / Privatdozent',
    careerBilbao: 'Visiting Fellow',
    careerParis: 'Assegnista di ricerca (FMJH)',
    careerBristol: 'Assegnista di ricerca post-dottorato',
    qualifications: 'ABILITAZIONI', selectedQualifications: 'Abilitazioni selezionate',
    qualificationASN: 'Abilitazione Scientifica Nazionale alla prima fascia in Analisi Matematica',
    qualificationHabil: 'Abilitazione in Matematica Applicata / Privatdozent',
    cvInstitutional: 'Per ulteriori informazioni professionali, consulta il profilo istituzionale.',
    contactEyebrow: 'RECAPITI',
    contactLead: 'Per corrispondenza accademica, collaborazioni scientifiche e informazioni sui corsi puoi utilizzare il contatto universitario o i miei profili professionali.',
    universityContact: 'CONTATTO UNIVERSITARIO', contactHeading: 'Scrivimi',
    contactPrivacy: 'Per limitare la raccolta automatizzata dell’indirizzo, l’email viene mostrata solo su richiesta.',
    revealEmail: 'Mostra indirizzo email',
    privacyNote: 'Questa misura scoraggia i sistemi di raccolta più semplici, ma non garantisce una protezione completa.',
    contactProfiles: 'PROFILI PROFESSIONALI',
    footerIndependent: 'Sito accademico personale',
  };

  const translatable = Array.from(document.querySelectorAll('[data-t]')).map(el => ({
    el, key:el.dataset.t, en:el.textContent
  }));
  const translatedInputs = [...document.querySelectorAll('[data-placeholder-t]')].map(el => ({el, en:el.placeholder}));
  const pages = [...document.querySelectorAll('.view')];
  const navLinks = [...document.querySelectorAll('[data-page-link]')];
  const validPages = new Set(pages.map(page => page.id));
  const pageTitles = {home:'Giovanni Di Fratta', research:'Research', publications:'Publications',activities:'Activities',teaching:'Teaching',cv:'CV',contact:'Contact'};
  const pageTitlesIT = {home:'Giovanni Di Fratta',research:'Ricerca',publications:'Pubblicazioni',activities:'Attività',teaching:'Didattica',cv:'CV',contact:'Contatti'};
  let language = 'en';
  let selectedYear = 'all';
  let selectedKind = 'all';
  let currentPage = 'home';

  const yearFilters = [...document.querySelectorAll('[data-year-filter]')];
  const kindFilters = [...document.querySelectorAll('[data-kind-filter]')];
  const pubs = [...document.querySelectorAll('#publication-list .pub-item')];
  const search = document.getElementById('pub-search');
  const pubCount = document.getElementById('pub-count');
  const pubEmpty = document.getElementById('pub-empty');

  function updatePubs(){
    const q=search.value.trim().toLocaleLowerCase(language);
    let visible=0;
    for(const pub of pubs){
      const year=pub.dataset.year;
      const yearMatches=selectedYear==='all'||(selectedYear==='earlier'?Number(year)<2024:year===selectedYear);
      const kindMatches=selectedKind==='all'||pub.dataset.kind===selectedKind;
      const text=(pub.textContent+' '+(pub.dataset.topic||'')).toLocaleLowerCase(language);
      const matched=yearMatches&&kindMatches&&(!q||text.includes(q));
      pub.hidden=!matched;
      if(matched) visible++;
    }
    pubEmpty.hidden=visible!==0;
    pubCount.textContent=language==='it'
      ? `${visible} ${visible===1?'voce visualizzata':'voci visualizzate'} su ${pubs.length}`
      : `${visible} of ${pubs.length} ${visible===1?'entry':'entries'} shown`;
  }
  function selectYear(year){
    selectedYear=year;
    yearFilters.forEach(button=>{
      const active=button.dataset.yearFilter===year;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    updatePubs();
  }
  yearFilters.forEach(button=>button.addEventListener('click',()=>selectYear(button.dataset.yearFilter)));
  function selectKind(kind){
    selectedKind=kind;
    kindFilters.forEach(button=>{
      const active=button.dataset.kindFilter===kind;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    updatePubs();
  }
  kindFilters.forEach(button=>button.addEventListener('click',()=>selectKind(button.dataset.kindFilter)));
  search.addEventListener('input',updatePubs);
  document.getElementById('pub-reset').addEventListener('click',()=>{
    search.value='';selectKind('all');selectYear('all');search.focus();
  });

  function setLanguage(lang){
    language=lang==='it'?'it':'en';
    document.documentElement.lang=language;
    translatable.forEach(({el,key,en})=>el.textContent=language==='it'&&Object.hasOwn(it,key)?it[key]:en);
    translatedInputs.forEach(({el,en})=>el.placeholder=language==='it'?'Cerca per titolo, autore, argomento…':en);
    document.querySelectorAll('[data-kind-label]').forEach(el=>{
      const labels={article:language==='it'?'Articolo':'Journal article',preprint:'Preprint',other:language==='it'?'Altro lavoro':'Other work'};
      el.textContent=labels[el.dataset.kindLabel]||'';
    });
    const kindGroup=document.querySelector('.pub-kind-controls');
    if(kindGroup)kindGroup.setAttribute('aria-label',language==='it'?'Filtra per tipologia':'Filter publications by category');
    document.querySelectorAll('[data-lang]').forEach(button=>{
      const active=button.dataset.lang===language;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    });
    document.querySelector('meta[name="description"]').content=language==='it'
      ? 'Giovanni Di Fratta, Professore di Analisi Matematica alla Federico II di Napoli. Ricerca, pubblicazioni, didattica e curriculum.'
      : 'Giovanni Di Fratta, Professor of Mathematical Analysis at the University of Naples Federico II. Research, publications, teaching and CV.';
    document.title=(language==='it'?pageTitlesIT[currentPage]:pageTitles[currentPage])+' — Giovanni Di Fratta';
    try {localStorage.setItem('gdf-modern-lang',language)} catch(_){/* browser privacy settings */}
    updatePubs();
    if(window.__ui) window.__ui.refreshSlider();
  }
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));

  function setPage(id,scrollToTop=false){
    const pageId=validPages.has(id)?id:'home';
    currentPage=pageId;
    pages.forEach(page=>{
      const active=page.id===pageId;
      page.classList.toggle('is-current',active);
      page.setAttribute('aria-hidden',String(!active));
    });
    navLinks.forEach(a=>{
      const active=a.dataset.pageLink===pageId;
      a.classList.toggle('is-active',active);
      if(a.classList.contains('nav-link')){
        if(active) a.setAttribute('aria-current','page');
        else a.removeAttribute('aria-current');
      }
    });
    document.title=(language==='it'?pageTitlesIT[pageId]:pageTitles[pageId])+' — Giovanni Di Fratta';
    if(scrollToTop) window.scrollTo({top:0,behavior:'auto'});
    if(window.__ui) window.__ui.afterPage(pageId);
  }
  function getCurrentHash(){
    return decodeURIComponent(window.location.hash.slice(1)||'home');
  }
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[data-page-link]');
    if(!link)return;
    const id=link.dataset.pageLink;
    if(!validPages.has(id))return;
    event.preventDefault();
    if(window.location.hash!=='#'+id) history.pushState({},'','#'+id);
    setPage(id,true);
    if(link.dataset.pubQuery!==undefined){selectKind('all');selectYear('all');search.value=link.dataset.pubQuery;updatePubs();}
    document.getElementById('main').focus({preventScroll:true});
  });
  window.addEventListener('popstate',()=>setPage(getCurrentHash(),true));
  window.addEventListener('hashchange',()=>setPage(getCurrentHash(),true));
  document.body.classList.add('js-enabled');
  window.addEventListener('load',()=>{ if(window.location.hash) window.scrollTo(0,0); });
  setPage(getCurrentHash(),true);
  let stored='en';
  try{stored=localStorage.getItem('gdf-modern-lang')||'en'}catch(_){/* optional */}
  setLanguage(stored);
  document.getElementById('year').textContent=new Date().getFullYear();


  /* ---------- Refinements: sliding nav marker, scroll progress, reveals, back-to-top ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sideNav = document.querySelector('.sidebar-nav');
  const slider = sideNav && sideNav.querySelector('.nav-slider');
  const topbar = document.querySelector('.topbar');
  const toTop = document.getElementById('to-top');
  const activeNav = () => sideNav && sideNav.querySelector('.nav-link.is-active');

  let sliderPlaced = false;
  function moveSlider(el, instant){
    if(!slider || !el) return;
    if(!sliderPlaced){ instant = true; sliderPlaced = true; }
    if(instant) slider.style.transition = 'none';
    slider.style.setProperty('--y', el.offsetTop + 'px');
    slider.style.setProperty('--h', el.offsetHeight + 'px');
    slider.classList.add('ready');
    slider.classList.toggle('ghost', el !== activeNav());
    if(instant){ void slider.offsetWidth; slider.style.transition = ''; }
  }
  const refreshSlider = () => moveSlider(activeNav(), true);
  if(sideNav){
    sideNav.addEventListener('pointerover', e => {
      if(e.pointerType === 'touch') return;
      const a = e.target.closest('.nav-link'); if(a) moveSlider(a);
    });
    sideNav.addEventListener('pointerleave', () => moveSlider(activeNav()));
    sideNav.addEventListener('focusin', e => { const a = e.target.closest('.nav-link'); if(a) moveSlider(a); });
    sideNav.addEventListener('focusout', () => moveSlider(activeNav()));
    window.addEventListener('resize', refreshSlider);
    window.addEventListener('load', refreshSlider);
  }

  let ticking = false;
  function onScroll(){
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    topbar.style.setProperty('--p', p.toFixed(4));
    topbar.classList.toggle('scrolled', window.scrollY > 8);
    if(toTop) toTop.classList.toggle('show', window.scrollY > 700);
  }
  window.addEventListener('scroll', () => { if(!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, {passive:true});
  onScroll();
  if(toTop) toTop.addEventListener('click', () => window.scrollTo({top:0, behavior: reduceMotion ? 'auto' : 'smooth'}));

  const revealSel = '.person-card,.press-card,.pub-item,.highlight-row,.topic-row,.course-entry,.career-entry,.institution-mark,.block-heading,.heritage-feature,.research-original-image,.aside-note,.contact-quiet>div,.mini-courses>div,.teaching-banner,.pub-archive-visual';
  let io = null;
  if('IntersectionObserver' in window && !reduceMotion){
    io = new IntersectionObserver(entries => {
      const shown = entries.filter(e => e.isIntersecting).sort((a,b) => (a.target.compareDocumentPosition(b.target) & 4) ? -1 : 1);
      shown.forEach((e,i) => {
        const el = e.target;
        io.unobserve(el);
        el.style.transitionDelay = Math.min(i,6)*50 + 'ms';
        el.classList.add('in');
        setTimeout(() => { el.classList.remove('reveal','in'); el.style.transitionDelay = ''; }, 950 + i*50);
      });
    }, {threshold:.08, rootMargin:'0px 0px -4% 0px'});
  }
  function armReveals(root){
    if(!io) return;
    root.querySelectorAll(revealSel).forEach(el => { el.classList.add('reveal'); io.observe(el); });
  }

  document.querySelectorAll('.heritage-feature,.research-original-image,.aside-note').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  window.__ui = {
    refreshSlider,
    afterPage(id){
      requestAnimationFrame(() => {
        moveSlider(activeNav());
        const page = document.getElementById(id);
        if(page) armReveals(page);
        onScroll();
      });
    }
  };
  window.__ui.afterPage(currentPage);

  // Construct address *only on click*. Avoid placing a raw address or mailto link in HTML.
  const reveal=document.getElementById('reveal-mail');
  reveal.addEventListener('click',()=>{
    const codes=[103,105,111,118,97,110,110,105,46,100,105,102,114,97,116,116,97,64,117,110,105,110,97,46,105,116];
    const address=String.fromCharCode(...codes);
    const link=document.createElement('a');
    link.href='mailto:'+address;
    link.textContent=address;
    link.rel='nofollow';
    document.getElementById('revealed-mail').replaceChildren(link);
    reveal.hidden=true;
    link.focus();
  });
})();
