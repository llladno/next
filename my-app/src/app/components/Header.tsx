import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <strong>Header</strong>
            <nav>
                <Link href='/'>Глваная</Link>
                <Link href='/about'>о нас</Link>
            </nav>
        </header>
    );
};

export default Header;