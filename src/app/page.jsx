import styles from './page.module.css';
import DisplayArea from '@/components/DisplayArea/DisplayArea.jsx';

// import data from '@/data/data.json';
import { getData } from '@/data/getData';

export default async function Home() {
  const data = await getData();
  const detailed = false;

  return (
    <main className={styles.main}>
      <DisplayArea countryData={data} detailed={detailed} />
    </main>
  )
}