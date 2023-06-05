import styles from './card.module.css';
import Image from 'next/image';

export default function Card({data, detailed}) {
    if (detailed) {
        return (
            <div className={styles.card}>
                <Image className={styles.flag} src={data.flags.svg} height={200} width={400} alt={`Picture of ` + data.name.common} />
                <div className={styles.text}>
                    <h3>{data.name.common}</h3>
                    <div>
                        {data.name.nativeName ? (
                            <p>Native Name: {Object.values(data.name.nativeName).map(nm => (
                                <span key={nm.common}>{nm.common} </span>
                            ))}</p>
                            ) : ''
                        }
                        <p>Population: {data.population.toLocaleString()}</p>
                        <p>Region: {data.region}</p>
                        <p>Sub Region: {data.subregion}</p>
                        <p>Capital: {data.capital}</p>
                        <br />
                        <p>Top Level Domain: {data.tld[0]}</p>
                        {data.currencies ? (
                            <p>Currencies: {Object.values(data.currencies).map(curr => (
                                <span key={curr.name}>{curr.name} </span>
                            ))}</p>
                            ) : ''
                        }
                        {data.languages ? (
                            <p>Languages: {Object.values(data.languages).map(lang => (
                                <span key={lang}>{lang} </span>
                            ))}</p>
                            ) : ''
                        }
                        <br />
                        {data.borders ? (
                            <div>
                                <p>Border Countries:</p>
                                <p>{Object.values(data.borders).map(border => (
                                    <button key={border} className='btn btn-primary'>{border} </button>
                                ))}</p>
                            </div>
                            ) : ''
                        }
                    </div>
                </div>
            </div>
        )
    }
   
    return (
        <div className={styles.card}>
            <Image className={styles.flag} src={data.flags.svg} height={200} width={400} alt={`Picture of ` + data.name.common} />
            <div className={styles.text}>
                <h3>{data.name.common}</h3>
                <div>
                    <p>Population: {data.population.toLocaleString()}</p>
                    <p>Region: {data.region}</p>
                    <p>Capital: {data.capital}</p>
                </div>
            </div>
        </div>
    )
}