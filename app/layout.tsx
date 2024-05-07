import type { Metadata } from 'next';
import './ui/globals.css';
import { hauora } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Dyshez',
  description: 'Prueba técnica Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hauora.variable} font-poppins min-h-dvh`}>
        {children}
      </body>
    </html>
  );
}
