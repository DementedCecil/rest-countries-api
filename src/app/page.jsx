import styles from './page.module.css';
import Nav from '@/components/Nav/Nav.jsx';
import Search from '@/components/Search/Search.jsx';
import Card from '@/components/Card/Card.jsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Search />
      <Card />
      <Card />
      <Card />
    </main>
  )
}