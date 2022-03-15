
import React from 'react';
import axios from 'axios';
import styles from './style.module.css';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Link from 'next/link'
import { useState } from 'react';



const SelectedCategory = ({category}) =>{
    const[resObj, setResObj] = useState({});

    const handleClick = (e)=>{
        e.preventDefault()
        axios.get(`https://api.chucknorris.io/jokes/random`)
            .then(res=>setResObj(res));
    }

    return(
        <div>
            <Navbar className={styles.navbar}/>
            <div className={styles.container}>
            <div className={styles.containerBox}>
                <h1 className={styles.heading}>{category.categories}</h1>
                <div>
                <p className={styles.para}>{
                    Object.keys(resObj).length>=1 ? resObj.data.value : category.value
                }</p>
                </div>
                <Image src={category.icon_url} width={100} height={100} quality={100} />
                <Link href='/'>
                <a>
                <div>
                    <button className={styles.backButton} >Back</button>
                    <button className={styles.button} onClick={handleClick}>Random Joke</button>
                </div>
                </a>
            </Link>
            </div>
            </div>

        </div>
    )

}


export async function getStaticProps(context){
    const selCategory = context.params.categories;
    const res =await axios(`https://api.chucknorris.io/jokes/random?category=${selCategory}`)
    const category =res.data;

    return {
        props:{category}
    }
}

export async function getStaticPaths(){
    const res =await axios(`https://api.chucknorris.io/jokes/categories`)
    const categories =res.data;

    const paths = categories.map(categories=>({params:{categories:categories.toString()}}))
    return {
        paths, fallback: false,
    }
}

export default SelectedCategory;