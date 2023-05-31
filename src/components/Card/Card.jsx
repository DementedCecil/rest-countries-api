import styles from './card.module.css';

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.flag}>

            </div>
            <div className={styles.text}>
                <h3>Country Name</h3>
                <div>
                    <p>Population: Value</p>
                    <p>Region: Value</p>
                    <p>Capital: Value</p>
                </div>
            </div>
        </div>
    )
}