import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SavedIcon } from '../../food-delivery/food-delivery/assets/icons/SavedIcon';
import { StarIcon } from '../../food-delivery/food-delivery/assets/icons/StarIcon';
import { ToBeSavedIcon } from '../../food-delivery/food-delivery/assets/icons/ToBeSavedIcon';

export const ProductCard = ({item,...props}) => {
    const [isBookmark, setIsBookmark] = useState(false);

    return <div class="col l-2-4 m-4 c-6" {...props}>
            <a href="#" class="home-product-item">
                <div class="home-product-item__img"></div>
                <h4 class="home-product-item_name">{item.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">{item.basePrice}đ</span>
                    <span class="home-product-item__price-new">{item.currentPrice}đ</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked"
                        onClick={() => {
                            setIsBookmark(!isBookmark);
                        }}>
                        {
                            isBookmark? (<SavedIcon className='w-[12px] h-[12px] text-red'/>):(<ToBeSavedIcon className='w-[12px] h-[12px] text-gandalf'/>)
                        }
                    </span>
                    <div class="home-product-item__rating">                                                
                        <StarIcon className='w-[12px] h-[12px] text-yellow'/>
                        <p className='text-caption2'>{item.rating}</p>                                          
                    </div>
                    <span class="home-product-item__sold">{item.selledCount} đã bán</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">{item.shop}</span>
                    <span class="home-product-item__origin-name">{item.country}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu thích</span>                                            
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">{item.sale}%</span>
                    <span class="home-product-item__sale-off-label">GIẢM</span>
                </div>
            </a>
        </div> 
}

ProductCard.PropTypes = {
    item: PropTypes.object
}