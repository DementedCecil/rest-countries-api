import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

// import data from '@/data/data.json';
import allCountries from '@/data/data.json';

export default function Card({data, detailed}) {
    if (detailed) {
        return (
            <div className={styles.cardDetail}>
                <Image className={styles.flagDetail} src={data.flags.svg} height={250} width={400} alt={`Picture of ` + data.name.common} />
                <div className={styles.text}>
                    <h3 className={styles.headingDetail}>{data.name.common}</h3>
                    <div className={styles.textDetail}>
                        <div>
                            {data.name.nativeName ? (
                                <p><span className={styles.bold}>Native Name:</span> {Object.values(data.name.nativeName).map((nm, index) => (
                                    <span key={index}>{nm.common} </span>
                                ))}</p>
                                ) : ''
                            }
                            <p><span className={styles.bold}>Population:</span> {data.population.toLocaleString()}</p>
                            <p><span className={styles.bold}>Region:</span> {data.region}</p>
                            <p><span className={styles.bold}>Sub-Region:</span> {data.subregion}</p>
                            <p><span className={styles.bold}>Capital:</span> {data.capital}</p>
                            <br />
                        </div>
                        <div>
                            <p><span className={styles.bold}>Top Level Domain:</span> {data.tld[0]}</p>
                            {data.currencies ? (
                                <p><span className={styles.bold}>Currencies:</span> {Object.values(data.currencies).map(curr => (
                                    <span key={curr.name}>{curr.name} </span>
                                ))}</p>
                                ) : ''
                            }
                            {data.languages ? (
                                <p><span className={styles.bold}>Languages:</span> {Object.values(data.languages).map(lang => (
                                    <span key={lang}>{lang} </span>
                                ))}</p>
                                ) : ''
                            }
                            <br />
                        </div>
                        {data.borders ? (
                            <div>
                                <h4><span className={styles.bold}>Border Countries:</span></h4>
                                <div className={styles.buttons + ' wrap'}>
                                    {data.borders.map((border) => {
                                        const country = allCountries.find((item) => item.alpha3Code === border);
                                        if (country) {
                                            return (
                                                <Link key={border} className="btn" href={`/${country.name}`}>
                                                    {country.name}
                                                </Link>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>
        )
    }
   
    return (
        <div className={styles.card}>
            <Image className={styles.flag} src={data.flags.svg} height={175} width={300} alt={`Picture of ` + data.name.common} />
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