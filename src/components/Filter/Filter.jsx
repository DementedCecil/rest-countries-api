import styles from './filter.module.css';

export default function Filter({onChange}) {
    return (
        <select className={styles.filter} name="filter" id="filter" onChange={onChange}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    )
}