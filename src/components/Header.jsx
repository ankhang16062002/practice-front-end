import React from 'react'

const Header = () => {
    return (
        <div className = "header">
            <div className="container">
                <div className="header__logo">
                    <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10db9372c981e229f12d3d_de-logotype-vert.svg" alt="" />
                    <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10db9372c981e229f12d3d_de-logotype-vert.svg" alt="" />
                </div>
                <div className="header__title">
                    <span>INK MODE</span>
                </div>
                <div className="header__cart">
                    <div className="header__cart__wrapper">
                        <div className="header__cart__item">cart</div>
                        <div className="header__cart__item">cart</div>
                    </div>
                    <div className="header__cart__quantity">0</div>
                </div>
            </div>
        </div>
    )
}

export default Header
