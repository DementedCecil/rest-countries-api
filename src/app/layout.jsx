import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import Nav from '@/components/Nav/Nav.jsx';
import { themeSwitcher } from './themeSwitcher';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '600', '800']
});

export const metadata = {
  title: 'Where in the world?',
  description: 'Country data',
  icons: {
    icon: ['/favicon.svg'],
    apple: ['/favicon.svg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className + ` themeSwitcher`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}