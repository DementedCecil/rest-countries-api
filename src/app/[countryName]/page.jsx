'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DisplayArea from '@/components/DisplayArea/DisplayArea.jsx';
import { getCountry } from '@/data/getData';

export default function CountryPage() {
    const pathname = usePathname();
    const [countryData, setCountryData] = useState(null);
    const detailed = true;
    
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getCountry(pathname);
                setCountryData(data);
            } catch (error) {
                console.error('Error fetching country data.');
            }
        }

        fetchData();
    }, [pathname]);

    return (
        <div>
            {countryData && <DisplayArea countryData={countryData} detailed={detailed} />}
        </div>
    )
}