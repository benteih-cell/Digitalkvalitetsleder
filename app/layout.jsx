import './globals.css';

export const metadata = {
  title: 'Digital Kvalitetsleder',
  description: 'Digital Kvalitetsleder gir små og mellomstore virksomheter tilgang til kvalitetsledelse, dokumentstyring og prosessforbedring som tjeneste.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
