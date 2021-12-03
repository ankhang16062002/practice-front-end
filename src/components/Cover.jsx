import React from 'react'

const Cover = ({active}) => {
    return (
        <div className = {`cover ${active ? 'active' : ''}`}>
            <div className="container">
                <div className="cover__top">
                    <div className="cover__top__logo">
                        <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d10f270fdbb4861e57bff12_de-logotype-white.svg" alt="" />
                    </div>
                    <div className="cover__top__cart">
                        <span>cart</span>
                        <span>0</span>
                    </div>
                </div>
                <div className="cover__tabs">
                    <div className="cover__tabs__text">
                        <span>tabs</span>
                    </div>
                    <div className="cover__tabs__move"></div>
                </div>
                <div className="wrapper">
                    <ul className = "nav">
                        <li>
                            <a href = "https//khang.com">shop</a>
                        </li>
                        <li>
                            <a href = "https//khang.com">collections</a>
                        </li>
                        <li>
                            <a href = "https//khang.com">about</a>
                        </li>
                    </ul>
                    <ul className="policy">
                        <li><a href="https/ankhang.com">faq</a></li>
                        <li><a href="https/ankhang.com">returns</a></li>
                        <li><a href="https/ankhang.com">terms</a></li>
                        <li><a href="https/ankhang.com">privacy</a></li>
                    </ul>
                    <ul className = "social">
                        <li><img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d122534758a06139328508a_facebook.svg" alt="" /></li>
                        <li><img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d122534ba030ff03c0d3799_instagram.svg" alt="" /></li>
                        <li>
                            <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d1226865cf15439bcd94ea3_arrow-up.svg" alt="" />
                            <span>ink mode</span>
                        </li>
                    </ul>
                </div>
                <div className="cover__footer">
                        <span>Inquiries  ⟶</span>
                        <span> info@deplacemaison.com</span>
                </div>
            </div>
        </div>
    )
}

export default Cover
