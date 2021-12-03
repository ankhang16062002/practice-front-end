import React from 'react'
import PropTypes from 'prop-types'

const CartItem = ({data}) => {
    const {img, size, name, priceOld,  priceNew} = data

    return (
        <div className = 'cart-item'>
            <div className="cart-item__wrapper">
                <div className="cart-item__img">
                    <img src= {img} alt="" />
                </div>
                <div className="cart-item__content">
                    <div className="cart-item__content__logo">
                        <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ed0ddbec534bd9d113f6188_unisex-label.svg" alt="" />
                    </div>
                    <span className="cart-item__content__size">
                        {size}
                    </span>
                    <span className="cart-item__content__name">{name}</span>
                    <span className="cart-item__content__price--old">{priceOld}</span>
                    <span className="cart-item__content__price--new">{priceNew}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem

CartItem.propTypes = {
    data: PropTypes.object,
}
