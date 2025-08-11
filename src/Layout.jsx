import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet /> {/* This will render the specific page component */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;