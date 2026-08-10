import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Digital Kvalitetsleder',
  description: 'Digital Kvalitetsleder gir små og mellomstore virksomheter tilgang til kvalitetsledelse, dokumentstyring og prosessforbedring som tjeneste.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
