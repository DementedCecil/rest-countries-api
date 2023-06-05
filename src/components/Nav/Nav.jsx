import styles from './nav.module.css';
import Link from 'next/link';
import { FaMoon } from 'react-icons/fa';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href={'/'}>
                <h3>Where in the world?</h3>
            </Link>
            <button className='align-bottom'><FaMoon className='icon' />Dark Mode</button>
        </nav>
    )
}