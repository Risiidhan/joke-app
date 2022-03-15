import styles from '../styles/Home.module.css'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'


const Navbar = () =>{
    return(
        <div className={styles.navbarlogo}>
            <Link href='/'>
                <a>
                    <Image alt='logo' src={'/logo.png'} width={50} height={50}  className={styles.logo}/>
                    <p className={styles.navbarlogoPara}>Chuck Norris Jokes</p>
                </a>
            </Link>
        </div>
    )

}

export default Navbar;