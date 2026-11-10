# Ava Lindqvist - personal site

Concept for a personal / portfolio website: story, timeline, achievements, photo gallery, contact.

**Live:** https://dev-pqn.github.io/ava-lindqvist/

Ava is a made-up persona, awards and publications are placeholders. Photos are from [Unsplash](https://unsplash.com/license).

## Stack

Plain HTML, CSS and vanilla JS. No framework, no build step - open `index.html` or serve the folder with anything static (GitHub Pages, Netlify, Vercel...).

Fonts: Fraunces + Inter from Google Fonts.

## What's inside

- mobile-first layout
- scroll reveal, counters, timeline progress, small parallax on the hero
- masonry gallery with filters + lightbox (keyboard, swipe)
- contact block with socials and a form (currently `mailto:`, easy to swap for Formspree or similar)
- SEO basics: meta/OG tags, JSON-LD Person, alt texts, sitemap, robots
- `prefers-reduced-motion` respected

## Editing content

Everything the owner would want to change is in `content.js` - name, texts, timeline, awards, gallery, contact info, social links. No need to touch HTML.

Gallery tags turn into filter buttons automatically. For local photos drop them into `images/` and use `src: "images/photo.jpg"`.

Page title and meta description are in the `<head>` of `index.html`. Colors and fonts are CSS variables at the top of `styles.css`.

## Files

```
index.html    markup, meta
styles.css    styles
main.js       rendering + interactions
content.js    content
```

## Run locally

```
python -m http.server
```

then open http://localhost:8000
