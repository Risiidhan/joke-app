import styles from '../styles/Home.module.css'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const CategoryCart = ({categories}) =>{
    return(
        <Link href={`/category/${categories}`}>
        <button className={styles.categories}> <div>{categories}</div></button>
        </Link>
    )

}

export default CategoryCart;