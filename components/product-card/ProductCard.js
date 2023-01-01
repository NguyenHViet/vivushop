import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SavedIcon } from '../../public/icons/SavedIcon';
import { ToBeSavedIcon } from '../../public/icons/ToBeSavedIcon';
import { StarIcon } from '../../public/icons/StarIcon';
import styles from './ProductCard.module.css';

export const ProductCard = ({item,...props}) => {
    const [isBookmark, setIsBookmark] = useState(false);

    return <div className="col l-2-4 m-4 c-6 w-[200px] h-[250px]" {...props}>
            <a href="#" className={styles.homeProductItem}>
                <div className={styles.homeProductItem__img}></div>
                <h4 className={styles.homeProductItem__name}>{item.name}</h4>
                <div className={styles.homeProductItem__price}>
                    <span className={styles.homeProductItem__priceOld}>{item.basePrice}đ</span>
                    <span className={styles.homeProductItem__priceNew}>{item.currentPrice}đ</span>
                </div>
                <div className={styles.homeProductItem__action}>
                    <span className={styles.homeProductItem__like}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsBookmark(!isBookmark);
                        }}>
                        {
                            isBookmark? (<SavedIcon className='w-[12px] h-[12px] text-red'/>):(<ToBeSavedIcon className='w-[12px] h-[12px] text-gandalf'/>)
                        }
                    </span>
                    <div className={styles.homeProductItem__rating}>                                                
                        <StarIcon className='w-[12px] h-[12px] text-yellow'/>
                        <p className='text-caption2'>{item.rating}</p>                                          
                    </div>
                    <span className={styles.homeProductItem__sold}>{item.selledCount} đã bán</span>
                </div>
                <div className={styles.homeProductItem__origin}>
                    <span className={styles.homeProductItem__brand}>{item.shop}</span>
                    <span className={styles.homeProductItem__originName}>{item.country}</span>
                </div>
                <div className={styles.homeProductItem__favourite}>
                    <i className="fas fa-check"></i>
                    <span>Yêu thích</span>                                            
                </div>
                <div className={styles.homeProductItem__safeOff}>
                    <span className={styles.homeProductItem__safeOffPercent}>{item.sale}%</span>
                    <span className={styles.homeProductItem__safeOffLabel}>GIẢM</span>
                </div>
            </a>
        </div> 
}

ProductCard.PropTypes = {
    item: PropTypes.object
}