(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t = "") => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // icons (inline svg, no icon font needed)
  const SOCIAL = {
    instagram: '<path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.8a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-9.6a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>',
    youtube: '<path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>',
    linkedin: '<path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/>',
    x: '<path d="M18.2 2.3h3.4l-7.4 8.4 8.7 11.5h-6.8l-5.3-7-6.1 7H1.3l7.9-9L.9 2.3h7l4.8 6.4 5.5-6.4zm-1.2 17.9h1.9L7.1 4.2H5.1L17 20.2z"/>',
    tiktok: '<path d="M19.6 6.7a4.8 4.8 0 01-3.8-4.3V2h-3.4v13.7a2.9 2.9 0 11-2-2.8V9.4a6.3 6.3 0 105.4 6.3V8.8a8.2 8.2 0 004.8 1.5V6.9l-1-.2z"/>',
    facebook: '<path d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0024 12z"/>'
  };
  const UI = {
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5v14zM4 19.5A2.5 2.5 0 006.5 22H20v-5"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v4"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>'
  };
  const svgSocial = n => `<svg viewBox="0 0 24 24" aria-hidden="true">${SOCIAL[n] || ""}</svg>`;
  const svgUI = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${UI[n] || UI.award}</svg>`;

  // text
  const [first, ...rest] = S.name.split(" ");
  const binds = {
    name: S.name, first, last: rest.join(" "), role: S.role, tagline: S.tagline, location: S.location,
    aboutTitle: S.about.title, contactIntro: S.contact.intro, contactLocation: S.contact.location
  };
  $$("[data-bind]").forEach(el => { el.textContent = binds[el.dataset.bind] ?? ""; });
  $("#year").textContent = new Date().getFullYear();

  const hero = $("#hero-img"); hero.src = S.heroImage; hero.alt = S.heroAlt;
  const about = $("#about-img"); about.src = S.about.image; about.alt = S.about.imageAlt;
  const email = $("#c-email"); email.href = `mailto:${S.contact.email}`; email.textContent = S.contact.email;
  const phone = $("#c-phone"); phone.href = `tel:${S.contact.phone.replace(/\s/g, "")}`; phone.textContent = S.contact.phone;

  // lists
  const R = {
    socials: () => S.socials.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.network)}">${svgSocial(s.network)}</a></li>`).join(""),
    stats: () => S.stats.map((s, i) => `<div class="stat reveal" style="transition-delay:${i * 90}ms"><strong data-count="${s.value}" data-suffix="${esc(s.suffix)}">0</strong><span>${esc(s.label)}</span></div>`).join(""),
    aboutParagraphs: () => S.about.paragraphs.map(p => `<p class="reveal">${esc(p)}</p>`).join(""),
    timeline: () => S.timeline.map(t => `<li class="tl-item reveal"><span class="tl-year">${esc(t.year)}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></li>`).join(""),
    achievements: () => S.achievements.map((a, i) => `<article class="award reveal" style="transition-delay:${i * 90}ms"><div class="award-icon">${svgUI(a.icon)}</div><h3>${esc(a.title)}</h3><p>${esc(a.meta)}</p></article>`).join(""),
    press: () => S.press.map(p => `<li>${esc(p)}</li>`).join(""),
    gallery: () => S.gallery.map((g, i) => `<figure class="tile reveal" tabindex="0" data-i="${i}" data-tag="${esc(g.tag)}"><img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"><figcaption><small>${esc(g.tag)}</small>${esc(g.caption)}</figcaption></figure>`).join(""),
    testimonials: () => S.testimonials.map(t => `<figure class="quote reveal"><blockquote>${esc(t.quote)}</blockquote><figcaption>— ${esc(t.author)}</figcaption></figure>`).join("")
  };
  $$("[data-list]").forEach(el => { el.innerHTML = R[el.dataset.list](); });

  // gallery filters
  const tags = ["All", ...new Set(S.gallery.map(g => g.tag))];
  const filters = $(".filters");
  filters.innerHTML = tags.map((t, i) => `<button role="tab" aria-selected="${i === 0}">${esc(t)}</button>`).join("");
  filters.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("button", filters).forEach(x => x.setAttribute("aria-selected", x === b));
    const t = b.textContent;
    $$(".tile").forEach(tile => tile.classList.toggle("hide", t !== "All" && tile.dataset.tag !== t));
  });

  // lightbox
  const lb = $("#lightbox"), lbImg = $("img", lb), lbCap = $("figcaption", lb);
  let cur = 0, lastFocus;
  const visible = () => $$(".tile:not(.hide)").map(t => +t.dataset.i);
  const show = i => { const g = S.gallery[i]; cur = i; lbImg.src = g.src.replace(/w=\d+/, "w=1800"); lbImg.alt = g.alt; lbCap.textContent = g.caption; };
  const open = i => { lastFocus = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $(".lb-close", lb).focus(); };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; lastFocus?.focus(); };
  const step = d => { const v = visible(); show(v[(v.indexOf(cur) + d + v.length) % v.length]); };
  $(".masonry").addEventListener("click", e => { const t = e.target.closest(".tile"); if (t) open(+t.dataset.i); });
  $(".masonry").addEventListener("keydown", e => { const t = e.target.closest(".tile"); if (t && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(+t.dataset.i); } });
  $(".lb-close", lb).onclick = close;
  $(".lb-prev", lb).onclick = () => step(-1);
  $(".lb-next", lb).onclick = () => step(1);
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });
  let tx = 0;
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); });

  // mobile menu
  const btn = $(".menu-btn"), menu = $("#menu");
  const setMenu = o => { btn.setAttribute("aria-expanded", o); menu.classList.toggle("open", o); document.body.style.overflow = o ? "hidden" : ""; };
  btn.onclick = () => setMenu(btn.getAttribute("aria-expanded") !== "true");
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));

  // reveal on scroll + number counters
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const count = el => {
    const end = +el.dataset.count, suf = el.dataset.suffix, t0 = performance.now(), dur = 1600;
    if (reduce) { el.textContent = end + suf; return; }
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * e) + suf;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    $$("[data-count]", en.target).forEach(count);
    io.unobserve(en.target);
  }), { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach(el => io.observe(el));

  // scroll stuff: nav, progress bar, parallax, timeline, active link
  const nav = $(".nav"), bar = $(".progress"), fill = $(".timeline-fill"), tlWrap = $(".timeline-wrap");
  const links = $$('.nav a[href^="#"]').filter(a => a.getAttribute("href").length > 1);
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
  let ticking = false;
  const onScroll = () => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 20);
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    if (!reduce) hero.style.transform = `translateY(${Math.min(y, 800) * -0.08}px)`;
    const r = tlWrap.getBoundingClientRect();
    fill.style.transform = `scaleY(${Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1)})`;
    let active = null;
    sections.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * 0.4) active = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + active));
    ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // contact form - no backend yet, just opens mail client
  $("#contact-form").addEventListener("submit", e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    location.href = `mailto:${S.contact.email}?subject=${encodeURIComponent(f.get("topic"))}&body=${encodeURIComponent(body)}`;
    $(".form-note").textContent = "Thank you! Your mail app is opening…";
    e.target.reset();
  });
})();
