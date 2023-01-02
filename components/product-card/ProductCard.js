import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StarIcon } from '../../public/icons/StarIcon';
import styles from './ProductCard.module.css';
import Image from 'next/image';

export const ProductCard = ({item,...props}) => {

    return <div className="col l-2-4 m-4 c-6 w-[200px] h-[250px]" {...props}>
            <a href="#" className={styles.homeProductItem}>
                <div className={styles.homeProductItem__img}>
                    <Image src={item.imgSrc} width={200} height={200} alt={item.name}/>
                </div>
                <h4 className={styles.homeProductItem__name}>{item.name}</h4>
                <div className={styles.homeProductItem__price}>
                    <span className={styles.homeProductItem__priceOld}>{item.basePrice}đ</span>
                    <span className={styles.homeProductItem__priceNew}>{item.currentPrice}đ</span>
                </div>
                <div className={styles.homeProductItem__action}>
                    <div className={styles.homeProductItem__rating}>                                                
                        <StarIcon className='w-[18px] h-[18px] text-yellow'/>
                        <p className='text-caption2 text-[16px] text-yellow'>{item.rating}</p>                                     
                    </div>
                    <span className={styles.homeProductItem__sold}>{item.selledCount} đã bán</span>
                </div>
                <div className={styles.homeProductItem__origin}>
                    <span className={styles.homeProductItem__brand}>{item.shop}</span>
                    <span className={styles.homeProductItem__originName}>{item.country}</span>
                </div>
                <div className={styles.homeProductItem__favourite}>
                    <span>Yêu thích</span>                                            
                </div>
                <div className={styles.homeProductItem__saleOff}>
                    <span className={styles.homeProductItem__saleOffPercent}>{item.sale}%</span>
                    <span className={styles.homeProductItem__saleOffLabel}>GIẢM</span>
                </div>
            </a>
        </div> 
}

ProductCard.PropTypes = {
    item: PropTypes.object
}