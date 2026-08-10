# Digital Kvalitetsleder

Dette er et Next.js-prosjekt klart for Vercel.

Prosjektet bruker vanlig CSS i stedet for Tailwind. Det betyr at Tailwind/PostCSS-feilen i Vercel unngås.

## Publisering på Vercel

1. Pakk ut ZIP-filen.
2. Last opp prosjektmappen til GitHub.
3. Gå til Vercel og velg **Add New Project**.
4. Importer GitHub-repositoriet.
5. Vercel skal automatisk oppdage Next.js.
6. Trykk **Deploy**.

## Test lokalt

```bash
npm install
npm run dev
```

## Produksjonsbygg lokalt

```bash
npm run build
```

## Endre kontaktinformasjon

Åpne `app/page.jsx` og endre objektet `contact` øverst i filen.
