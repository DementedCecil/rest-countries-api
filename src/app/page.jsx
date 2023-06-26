'use client';

import styles from './page.module.css';
import { ThemeProvider } from 'next-themes';
import DisplayArea from '@/components/DisplayArea/DisplayArea.jsx';

// import data from '@/data/data.json';
import { getData } from '@/data/getData';

export default async function Home() {
  const data = await getData();
  const detailed = false;

  return (
    <ThemeProvider>
      <main className={styles.main}>
        <DisplayArea countryData={data} detailed={detailed} />
      </main>
    </ThemeProvider>
  )
}