const translations = {
  sl: {
    navDrinks: "Drinks", navAgenda: "Agenda", navRoom: "Room", navBook: "Book",
    navDrinksMobile: "Drinks", navAgendaMobile: "Agenda", navRoomMobile: "Room", navBookMobile: "Book",
    heroLead: "Cocktail & vinyl bar za temne mize, počasne pogovore, signature pijače in noči, ki se ne začnejo z “kam gremo naprej?”.",
    heroCta: "Rezerviraj mizo",
    openLabel: "nocoj odprto", soundLabel: "sound", tableLabel: "mize", tableText: "2—6 oseb",
    manifesto1: "nizka luč", manifesto2: "kratek meni", manifesto3: "dober led", manifesto4: "počasen večer",
    roomTitle: "Bar brez svetlih miz in brez naključnega playlist hrupa.",
    roomText: "LUNA 13 je postavljen kot nočni prostor: manj dekoracije, več atmosfere. Meni je razdeljen po občutku, ne po dolgem seznamu sestavin.",
    drinksTitle: "Meni kot frekvenca.",
    drinkMood1: "fresh / citrus", drinkMood2: "smoky / deep", drinkMood3: "bitter / elegant", drinkMood4: "sweet / creamy", drinkMood5: "0.0 / fresh",
    profileLabel: "profil", serveLabel: "serve",
    agendaTitle: "Tri noči. Trije ritmi.",
    event1Title: "Aperitivo Session", event1Text: "spritz, amaro, lažji funk, prigrizki za deljenje",
    event2Title: "Vinyl After Dark", event2Text: "jazz, soul, disco edits, signature meni do pozno",
    event3Title: "Midnight Classics", event3Text: "negroni, old fashioned, martini, temnejši zvok",
    bookingTitle: "Rezerviraj mizo, ne samo sedež.",
    addressLabel: "naslov", hoursLabel: "urnik", contactLabel: "kontakt",
    hoursText: "Tor–čet 18:00–01:00<br>Pet–sob 18:00–02:00<br>Ned–pon zaprto",
    callNow: "Pokliči", emailNow: "Email", mapNow: "Zemljevid",
    footerNote: "Demo spletna stran za portfolio. Ime, naslov, telefon in podatki so izmišljeni."
  },
  en: {
    navDrinks: "Drinks", navAgenda: "Agenda", navRoom: "Room", navBook: "Book",
    navDrinksMobile: "Drinks", navAgendaMobile: "Agenda", navRoomMobile: "Room", navBookMobile: "Book",
    heroLead: "A cocktail & vinyl bar for dark tables, slow conversations, signature drinks and nights that do not start with “where next?”.",
    heroCta: "Reserve a table",
    openLabel: "open tonight", soundLabel: "sound", tableLabel: "tables", tableText: "2—6 people",
    manifesto1: "low light", manifesto2: "short menu", manifesto3: "good ice", manifesto4: "slow evening",
    roomTitle: "A bar without bright tables and random playlist noise.",
    roomText: "LUNA 13 is built as a night room: less decoration, more atmosphere. The menu is divided by feeling, not by a long list of ingredients.",
    drinksTitle: "A menu like a frequency.",
    drinkMood1: "fresh / citrus", drinkMood2: "smoky / deep", drinkMood3: "bitter / elegant", drinkMood4: "sweet / creamy", drinkMood5: "0.0 / fresh",
    profileLabel: "profile", serveLabel: "serve",
    agendaTitle: "Three nights. Three rhythms.",
    event1Title: "Aperitivo Session", event1Text: "spritz, amaro, lighter funk, bites for sharing",
    event2Title: "Vinyl After Dark", event2Text: "jazz, soul, disco edits, signature menu until late",
    event3Title: "Midnight Classics", event3Text: "negroni, old fashioned, martini, darker sound",
    bookingTitle: "Reserve a table, not just a seat.",
    addressLabel: "address", hoursLabel: "hours", contactLabel: "contact",
    hoursText: "Tue–Thu 18:00–01:00<br>Fri–Sat 18:00–02:00<br>Sun–Mon closed",
    callNow: "Call", emailNow: "Email", mapNow: "Map",
    footerNote: "Portfolio demo website. Name, address, phone and details are fictional."
  },
  it: {
    navDrinks: "Drink", navAgenda: "Agenda", navRoom: "Sala", navBook: "Prenota",
    navDrinksMobile: "Drink", navAgendaMobile: "Agenda", navRoomMobile: "Sala", navBookMobile: "Prenota",
    heroLead: "Cocktail & vinyl bar per tavoli scuri, conversazioni lente, drink signature e notti che non iniziano con “dove andiamo dopo?”.",
    heroCta: "Prenota un tavolo",
    openLabel: "aperto stasera", soundLabel: "sound", tableLabel: "tavoli", tableText: "2—6 persone",
    manifesto1: "luce bassa", manifesto2: "menu corto", manifesto3: "ghiaccio buono", manifesto4: "serata lenta",
    roomTitle: "Un bar senza tavoli luminosi e senza playlist casuali.",
    roomText: "LUNA 13 è pensato come una stanza notturna: meno decorazione, più atmosfera. Il menu è diviso per sensazione, non per una lunga lista di ingredienti.",
    drinksTitle: "Un menu come una frequenza.",
    drinkMood1: "fresh / agrumi", drinkMood2: "smoky / profondo", drinkMood3: "bitter / elegante", drinkMood4: "sweet / cremoso", drinkMood5: "0.0 / fresh",
    profileLabel: "profilo", serveLabel: "serve",
    agendaTitle: "Tre notti. Tre ritmi.",
    event1Title: "Aperitivo Session", event1Text: "spritz, amaro, funk leggero, snack da condividere",
    event2Title: "Vinyl After Dark", event2Text: "jazz, soul, disco edits, menu signature fino a tardi",
    event3Title: "Midnight Classics", event3Text: "negroni, old fashioned, martini, sound più scuro",
    bookingTitle: "Prenota un tavolo, non solo un posto.",
    addressLabel: "indirizzo", hoursLabel: "orari", contactLabel: "contatto",
    hoursText: "Mar–gio 18:00–01:00<br>Ven–sab 18:00–02:00<br>Dom–lun chiuso",
    callNow: "Chiama", emailNow: "Email", mapNow: "Mappa",
    footerNote: "Sito demo per portfolio. Nome, indirizzo, telefono e dettagli sono inventati."
  }
};

const drinkData = {
  sl: {
    spritz: { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=84", tag: "FRESH / CITRUS", name: "Lunar Spritz", desc: "gin, bezeg, limeta, prosecco, kumara", profile: "fresh / sparkling", serve: "long glass" },
    ember: { img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=84", tag: "SMOKY / DEEP", name: "Midnight Ember", desc: "mezcal, pomaranča, čokoladni bitter, dimljena sol", profile: "smoky / warm", serve: "rocks" },
    negroni: { img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1400&q=84", tag: "BITTER / ELEGANT", name: "Red Negroni", desc: "gin, vermut, amaro, rdeča pomaranča", profile: "bitter / sharp", serve: "rocks" },
    velvet: { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84", tag: "SWEET / CREAMY", name: "Velvet Afterglow", desc: "rum, kava, vanilija, kokosova krema, kakav", profile: "sweet / soft", serve: "coupe" },
    zero: { img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=84", tag: "0.0 / FRESH", name: "Nocturne Zero", desc: "limeta, yuzu, ingver, tonik, meta", profile: "fresh / alcohol-free", serve: "highball" }
  },
  en: {
    spritz: { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=84", tag: "FRESH / CITRUS", name: "Lunar Spritz", desc: "gin, elderflower, lime, prosecco, cucumber", profile: "fresh / sparkling", serve: "long glass" },
    ember: { img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=84", tag: "SMOKY / DEEP", name: "Midnight Ember", desc: "mezcal, orange, chocolate bitters, smoked salt", profile: "smoky / warm", serve: "rocks" },
    negroni: { img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1400&q=84", tag: "BITTER / ELEGANT", name: "Red Negroni", desc: "gin, vermouth, amaro, blood orange", profile: "bitter / sharp", serve: "rocks" },
    velvet: { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84", tag: "SWEET / CREAMY", name: "Velvet Afterglow", desc: "rum, coffee, vanilla, coconut cream, cocoa", profile: "sweet / soft", serve: "coupe" },
    zero: { img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=84", tag: "0.0 / FRESH", name: "Nocturne Zero", desc: "lime, yuzu, ginger, tonic, mint", profile: "fresh / alcohol-free", serve: "highball" }
  },
  it: {
    spritz: { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1400&q=84", tag: "FRESH / AGRUMI", name: "Lunar Spritz", desc: "gin, sambuco, lime, prosecco, cetriolo", profile: "fresh / frizzante", serve: "long glass" },
    ember: { img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1400&q=84", tag: "SMOKY / PROFONDO", name: "Midnight Ember", desc: "mezcal, arancia, bitter al cioccolato, sale affumicato", profile: "smoky / caldo", serve: "rocks" },
    negroni: { img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1400&q=84", tag: "BITTER / ELEGANTE", name: "Red Negroni", desc: "gin, vermut, amaro, arancia rossa", profile: "bitter / secco", serve: "rocks" },
    velvet: { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=84", tag: "SWEET / CREMOSO", name: "Velvet Afterglow", desc: "rum, caffè, vaniglia, crema di cocco, cacao", profile: "sweet / morbido", serve: "coupe" },
    zero: { img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=84", tag: "0.0 / FRESH", name: "Nocturne Zero", desc: "lime, yuzu, zenzero, tonica, menta", profile: "fresh / analcolico", serve: "highball" }
  }
};

let currentLang = "sl";
let currentDrink = "spritz";

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");
navToggle.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  document.body.classList.toggle("menu-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});
mobileNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const translatable = document.querySelectorAll("[data-i18n]");
const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(lang) {
  currentLang = lang;
  const dictionary = translations[lang] || translations.sl;
  translatable.forEach(el => {
    const key = el.dataset.i18n;
    if (dictionary[key]) {
      if (key === "hoursText") el.innerHTML = dictionary[key];
      else el.textContent = dictionary[key];
    }
  });
  langButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
  document.documentElement.lang = lang;
  localStorage.setItem("luna13-poster-lang", lang);
  setDrink(currentDrink);
}

langButtons.forEach(btn => btn.addEventListener("click", () => setLanguage(btn.dataset.lang)));

const rows = document.querySelectorAll(".drink-row");
const drinkImage = document.getElementById("drinkImage");
const drinkTag = document.getElementById("drinkTag");
const drinkName = document.getElementById("drinkName");
const drinkDesc = document.getElementById("drinkDesc");
const drinkProfile = document.getElementById("drinkProfile");
const drinkServe = document.getElementById("drinkServe");

function setDrink(key) {
  currentDrink = key;
  const data = (drinkData[currentLang] || drinkData.sl)[key];
  if (!data) return;
  drinkImage.src = data.img;
  drinkTag.textContent = data.tag;
  drinkName.textContent = data.name;
  drinkDesc.textContent = data.desc;
  drinkProfile.textContent = data.profile;
  drinkServe.textContent = data.serve;
  rows.forEach(row => row.classList.toggle("active", row.dataset.drink === key));
}

rows.forEach(row => row.addEventListener("click", () => setDrink(row.dataset.drink)));

const manifesto = document.querySelector(".manifesto-line");
manifesto.innerHTML += manifesto.innerHTML;

const revealTargets = document.querySelectorAll(".story-text, .story-image, .drinks-head, .drink-row, .drink-detail, .agenda-stack article, .booking-title, .booking-grid");
revealTargets.forEach(el => el.classList.add("reveal"));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
revealTargets.forEach(el => observer.observe(el));

const savedLang = localStorage.getItem("luna13-poster-lang");
if (savedLang && translations[savedLang]) setLanguage(savedLang);
else setDrink("spritz");
