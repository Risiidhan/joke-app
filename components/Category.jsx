import styles from '../styles/Home.module.css'
import Image from 'next/image';
import React from 'react';
import CategoryCart from './CategoryCart';


const Category = ({categories}) =>{

    return(
        <div>
            <div className={styles.poster}>
                <Image alt='logo' src={'/banner.jpg'} width={700} height={500} />
                <div>
                <p className={styles.posterHeadind}>
                    Why so <span>serious!!!</span>
                    <div>SELECT A CATEGORY AND HAVE A LAUGH</div>
                </p>
                </div>
                <div>
                    <h2 className={styles.categoryTitle}>Categories</h2>
                    <div className={styles.categoryCart}>
                    {categories.map(categories=><CategoryCart categories={categories}/>)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Category;
