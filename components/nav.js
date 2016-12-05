import React from 'react';
import Link from 'next/link';

export default () => (
    <div>
        <Link href="/">Home</Link>
        {' '}
        <Link href="/about">About</Link>
    </div>
)