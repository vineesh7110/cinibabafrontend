import React from 'react';
import styles from './RootLayout.module.css'
import { Link, Outlet } from "react-router-dom";
function rootLayout(props){
    return(
        <>
        <header className={styles.Header}>
            <span>cinibaba</span>
            <nav>
                <ul className={styles.NavList}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                    <Link to={'/movies'}>movies</Link>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        <footer className={styles.footer}>
            <span> copyright cinibaba </span>
            <span>Developed by Vineesh</span>
        </footer>
        </>
    )
}

export default rootLayout;