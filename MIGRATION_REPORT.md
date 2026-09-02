# Gatsby to Astro migration report

## Summary

Il sito personale e il blog sono stati migrati da Gatsby 3 ad Astro 5 mantenendo output statico, contenuti, URL pubblici, metadati SEO, dominio personalizzato, immagini responsive, stile e comportamento dell'interfaccia. La migrazione non include redesign, pubblicazione o modifiche editoriali, salvo la correzione di un collegamento interno già non valido.

L'output di produzione è ora `dist/`. Il build genera 25 pagine di route e 26 file HTML di ingresso perché la pagina 404 viene prodotta sia come `404.html` sia come `404/index.html`, come nel sito precedente.

## Previous architecture

- Gatsby 3 con React 17 e TypeScript.
- Route statiche in `src/pages` e route blog create in `gatsby-node.js`.
- Contenuti Markdown in `src/data`, caricati con `gatsby-source-filesystem`, `gatsby-transformer-remark` e query GraphQL.
- Elaborazione immagini tramite Gatsby Image e Sharp.
- SEO tramite React Helmet e dati Gatsby.
- Styled Components, `tailwind.macro`, Tailwind CSS 2, Framer Motion e Font Awesome.
- Build in `public/` e pubblicazione manuale con `gh-pages`.

## New architecture

- Astro 5 in modalità `output: 'static'` con TypeScript.
- File routing Astro in `src/pages` e route dinamica statica `src/pages/blog/[slug].astro`.
- Layout documento e SEO centralizzati in `src/layouts/BaseLayout.astro`.
- Loader tipizzato in `src/lib/content.ts`, basato su filesystem, `gray-matter`, MarkdownIt e Prism.
- Componenti React esistenti mantenuti come isole `client:load` per preservare rendering, animazioni e menu mobile.
- Styled Components raccolto durante SSR; le regole della macro Tailwind legacy sono materializzate localmente senza dipendenze Tailwind/Babel a runtime o build time.
- Immagini Gatsby già ottimizzate conservate in `static/static` e riutilizzate con `picture`, `srcset` e `sizes`.
- Build in `dist/`, con post-build per compatibilità 404 e sitemap.

## Migration decisions

La strategia è stata deliberatamente conservativa. I componenti visuali React non sono stati riscritti quando questo avrebbe aumentato il rischio di differenze visive. Astro gestisce shell HTML, route, SEO, contenuti e generazione statica; React continua a gestire l'interfaccia già collaudata.

Le varianti immagine prodotte dal precedente build sono state preservate anziché ricomprimerle. Questo mantiene gli stessi file selezionati dal browser e le stesse geometrie responsive. Anche il comportamento legacy di arrotondamento delle immagini Markdown è riprodotto.

## Gatsby -> Astro mapping

| Gatsby | Astro / sostituzione |
| --- | --- |
| `gatsby-plugin-sitemap` | `@astrojs/sitemap` più alias `sitemap.xml` nel post-build |
| `gatsby-plugin-typescript` | TypeScript nativo di Astro e `astro check` |
| `gatsby-plugin-react-helmet` | `<head>` di `BaseLayout.astro` |
| `gatsby-image`, `gatsby-plugin-image`, Sharp | asset ottimizzati preservati, `picture`, `srcset` e manifest locale |
| `gatsby-source-filesystem` | lettura filesystem in `src/lib/content.ts` |
| `gatsby-transformer-remark` | `gray-matter` e MarkdownIt |
| `gatsby-remark-images` | manifest responsive costruito dalle varianti preservate |
| `gatsby-remark-prismjs` | Prism durante il rendering Markdown |
| `gatsby-remark-emojis` | asset emoji locali preservati |
| `gatsby-plugin-manifest` | `static/manifest.webmanifest` e icone statiche |
| `gatsby-plugin-remove-serviceworker` | nessun service worker registrato |
| `gatsby-plugin-styled-components` | raccolta SSR Styled Components e trasformazione Babel |
| `gatsby-plugin-postcss`, Tailwind, PurgeCSS | reset/typografia congelati in CSS locale e utility Styled Components in `src/lib/tw.ts` |
| `gatsby-plugin-sharp`, `gatsby-transformer-sharp` | nessuna elaborazione runtime; output Sharp storico conservato |

## Routes

Route statiche preservate:

- `/`
- `/blog/`
- `/resume/`
- `/contact/`
- `/404/`

Route blog preservate:

- `/blog/aws-amplify-dynamodb-total-count-graphql-queries/`
- `/blog/best-programming-resources-of-2017/`
- `/blog/building-secure-software-with-a-card-game/`
- `/blog/cyber-resilience-act-ten-common-misconceptions-about-cra-compliance/`
- `/blog/exploring-cve-2025-29927-a-hands-on-look-at-authorization-bypass-in-nextjs-middleware/`
- `/blog/functional-programming-and-category-theory/`
- `/blog/guide-to-understanding-eu-cybersecurity-standards-and-policy-essential-resources/`
- `/blog/how-to-conditionally-render-html-with-scala-and-lift/`
- `/blog/how-to-connect-multiple-docker-containers/`
- `/blog/how-to-write-secure-code/`
- `/blog/human-friendly-errors-for-scala/`
- `/blog/isomorphic-web-applications-with-scala-and-scalajs/`
- `/blog/javascript-malware-by-a-beaufiful-girl/`
- `/blog/lift-framework-rest-apis-authentication-with-jwt/`
- `/blog/owasp-resources-you-should-know/`
- `/blog/scala-simplify-code-with-lifecycle-callbacks-model/`
- `/blog/secure-by-design-hamster-wheel-of-pain/`
- `/blog/secure-coding-for-embedded-systems-udacity/`
- `/blog/security-standards-you-should-know/`
- `/blog/type-classes-in-scala-a-practical-example/`

La sitemap contiene le 24 route indicizzabili ed esclude intenzionalmente `/404/`.

## Data layer

I file Markdown e il frontmatter restano in `src/data` senza migrazione editoriale. Il loader esegue scansione ricorsiva, parsing del frontmatter, ordinamento, formattazione date, generazione excerpt, rendering Markdown, syntax highlighting, emoji legacy e sostituzione delle immagini responsive.

## GraphQL removed

Tutte le query GraphQL Gatsby e il relativo livello dati sono stati rimossi. I dati passano ora come props tipizzate dai loader Astro ai componenti React. Non esiste schema GraphQL da mantenere o rigenerare.

## React components retained

Sono stati mantenuti i componenti visuali e interattivi, inclusi Header, MainNav, Logo, Layout, Hero, Services, Posts, Experience, Education, ContactInfo, Skills, Newsletter, Testimonials, Footer, BlogPost e i componenti UI condivisi. Framer Motion e il menu mobile continuano a funzionare sul client.

## Components converted to Astro

Sono stati convertiti in Astro la shell documento (`BaseLayout.astro`), le route statiche e la route blog dinamica. Le precedenti pagine Gatsby sono ora wrapper React sotto `src/react-pages`, montati dalle route Astro.

## Gatsby plugins

I plugin Gatsby non sono più dipendenze del progetto. Ogni responsabilità necessaria è stata mappata su Astro o su implementazione locale; configurazioni `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js`, `gatsby-ssr.js` e i template Gatsby non sono più richiesti. Anche Tailwind, PostCSS, Autoprefixer, `tailwind.macro` e la trasformazione Babel legacy sono stati rimossi dopo avere materializzato i loro output effettivamente utilizzati.

## Images

Le varianti PNG, JPEG e WebP già prodotte da Gatsby/Sharp sono conservate sotto `static/static`. Il codice ricostruisce `srcset` e `sizes` dai file disponibili, mantiene il logo responsive, le cover del blog e le immagini inline degli articoli. Gli asset emoji, favicon, icone e manifest restano locali.

## SEO

Titolo, description, Open Graph, Twitter Card, immagini social, favicon, manifest, theme color e JSON-LD sono prodotti da `BaseLayout.astro`. Per gli articoli sono mantenuti `BlogPosting`, breadcrumb, autore, publisher, date e URL canonici usati nello structured data precedente. Il verifier confronta inoltre titolo e metadati descrittivi con il build Gatsby di riferimento quando questo viene fornito.

## Analytics and integrations

Nel progetto Gatsby non erano presenti analytics, pixel di tracking, CMS, API esterne, redirect applicativi o variabili di integrazione. Non ne sono stati aggiunti durante la migrazione.

## Visual parity

La parità è stata verificata contro un build Gatsby di riferimento sugli stessi viewport. Sono stati confrontati home page, griglia blog, articolo con blocchi di codice, articolo con immagini inline, layout desktop e mobile, menu mobile, altezze documento, geometrie principali, font, colori e asset selezionati. I controlli mobile non mostrano overflow orizzontale e la console non riporta errori o warning.

## Known differences

- Il markup di bootstrap e gli hash degli asset JavaScript/CSS sono necessariamente diversi perché il runtime è Astro anziché Gatsby.
- È stato corretto un collegamento interno preesistente in `functional-programming-and-category-theory`: ora punta a `/blog/type-classes-in-scala-a-practical-example/` invece della route inesistente senza prefisso `/blog`.
- Non risultano differenze intenzionali di contenuto, URL pubblico, SEO, stile o comportamento.

## Post-migration improvements

- Eliminazione del runtime Gatsby e di GraphQL.
- Dipendenze e CSS di produzione sensibilmente ridotti.
- Loader contenuti diretto e tipizzato.
- Verifica automatica di route, metadata, sitemap, dominio personalizzato e link/asset locali.
- Contratto esplicito per `404.html`, `/404/` e `sitemap.xml`.
- Comandi di sviluppo e build documentati e coerenti con Astro.

## Dependency baseline

Le dipendenze dirette sono state aggiornate il 2 settembre 2026. Le major principali sono Astro 7.2.10, `@astrojs/react` 6.0.5, React 19.2.8, Styled Components 6.5.3, Framer Motion 13.1.1 e Font Awesome 7.3.1. TypeScript è fissato alla versione 6.0.3, l'ultima compatibile con `astro check`: TypeScript 7 non espone ancora l'API programmatica richiesta dal language server Astro.

## Environment variables

Non sono richieste variabili d'ambiente per sviluppo, build, verifica o deploy. `ASTRO_TELEMETRY_DISABLED=1` può essere usata localmente per disabilitare la telemetria CLI, ma non è un requisito dell'applicazione.

## Build

Comandi principali:

```shell
npm run check
npm run build
npm run verify
npm test
```

Il build statico viene scritto in `dist/`. `scripts/postbuild.mjs` crea gli alias di compatibilità; `scripts/verify-build.mjs` valida l'output finale.

## Deployment

`npm run deploy` esegue un nuovo build e pubblica `dist/` sul branch `gh-pages`. L'opzione `--nojekyll` crea `.nojekyll` nel branch pubblicato, evitando che GitHub Pages escluda la directory `_astro/`. `static/CNAME` mantiene `www.riccardosirigu.com`. La migrazione non ha eseguito alcuna pubblicazione e non modifica il modello di deploy manuale esistente.
