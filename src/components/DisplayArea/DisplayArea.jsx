'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from './displayArea.module.css';
import Card from '@/components/Card/Card.jsx';
import Search from '@/components/Search/Search.jsx';
import Filter from '@/components/Filter/Filter.jsx';

export default function DisplayArea({countryData = [], detailed}) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [data, setData] = useState(countryData);

    const searchFilter = (array) => {
        return array.filter(
            (country) => 
                country.name.common.toLowerCase().includes(search) &&
                country.region.toLowerCase().includes(filter)
        );
    }

    const filtered = searchFilter(data);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFilter = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        setData(countryData);
    }, [countryData]);

    if (detailed) {
        return (
            <div className={styles.displayArea} data-type='detailed'>
                <Link href={'/'} className={'btn ' + styles.btnBack}>Back</Link>
                {data?.map((country, index) => (
                    <Card key={index} data={country} detailed={detailed} />
                ))}
            </div>
        )
    }

    return (
        <div className={styles.displayArea}>
            <div className={styles.inputs}>
                <Search searchValue={search} onChange={(e) => handleSearch(e)} />
                <Filter onChange={(e) => handleFilter(e)} />
            </div>
            {filtered?.map((country, index) => (
                <Link key={index} href={`/${country.name.common}`}>
                    <Card data={country} detailed={detailed} />
                </Link>
            ))}
        </div>
    )
}