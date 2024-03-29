import styles from './nav.module.css';
import Link from 'next/link';
import Toggle from '@/components/Toggle/Toggle.jsx';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <h3>Where in the world?</h3>
            </Link>
            <Toggle />
        </nav>
    )
}