'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppButton from './AppButton';
import Nav from './Nav';

export default function Header() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, [scroll]);

    return (
        <header
            id="header"
            className={`fixed-top d-flex align-items-cente ${scroll > 100 ? 'header-scrolled' : undefined
                }`}
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <a href="/"><span>Domino</span> Restaurant</a>
                </h1>
                {/* Uncomment below if you prefer to use an image logo  */}
                {/* <a href="index.html" className="logo me-auto me-lg-0">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a> */}
                <Nav />
                <AppButton name='Book a Table' />
            </div>
        </header>
    );
}
