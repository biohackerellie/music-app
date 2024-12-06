import Player from '@/components/player';
import { MusicPlayerProvider } from '@/lib/context';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ellie Kerns Music',
  description: 'Music Player By Ellie Kerns',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MusicPlayerProvider>
          {children}
          <Player />
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
