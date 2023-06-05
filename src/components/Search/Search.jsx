import styles from './search.module.css';

export default function Search({searchValue, onChange}) {
    return (
        <input type="text" name="search" id="search" className={styles.search} placeholder='&#128269; Search for a country...' value={searchValue} onChange={onChange} />
    )
}