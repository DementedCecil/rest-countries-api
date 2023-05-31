import styles from './search.module.css';

export default function Search() {
    return (
        <input type="text" name="search" id="search" className={styles.search} placeholder='Search for a country...' />
    )
}