import styles from './nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <h3>Where in the world?</h3>
            </Link>
            <p>Dark Mode</p>
        </nav>
    )
}