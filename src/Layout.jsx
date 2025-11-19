import React from 'react';
import { Navbar } from './containers/navbar/navbar.jsx';
import { Footer } from './containers/footer/footer.jsx';
import './App.scss';
import './i18n.js';

function Layout({ children }) {
    return (
        <div className="app">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;