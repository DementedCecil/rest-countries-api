'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Toggle() {
    const { theme, setTheme } = useTheme("light");
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button className='align-bottom' onClick={() => {setTheme(theme === "light" ? "dark" : "light")}}>{theme === "light" ? <span><FaMoon className='icon' /> Dark Mode</span> : <span><FaSun className='icon' /> Light Mode</span>}</button>
    )
}