import React from 'react'
import Move from './Move'

const Footer = () => {

    return (
        <div className = 'wrapper'>
            <div className="footer">
                <div className="footer__message">
                    <div className="footer__message__icon">
                        <p>SUBSCRIBE TO NEWSLETTER</p>
                        <div className="footer__message__icon__img">
                            <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d2dc19a2be6baa7f9e25b8c_newsletter-face.svg" alt="" />
                        </div>
                    </div>
                    <form className = "footer__message__submit">
                        <label htmlFor="input-text">SUBSRIBE TO OUR NEWSLETTER</label>
                        <div className="footer__message__submit__input">
                            <input type="text" id = "input-text" placeholder = "email address" />
                            <button>submit</button>
                        </div>
                    </form>
                </div>
                <div className="footer__text">
                    <div className="footer__text__item">
                        <div className="footer__text__item__top">
                            <span>info</span>
                            <div className="footer__text__item__top__list">
                                <div>
                                    <span>faq</span>
                                    <span>faq</span>
                                </div>
                                <div>
                                    <span>returns</span>
                                    <span>returns</span>
                                </div>
                                <div>
                                    <span>contact</span>
                                    <span>contact</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer__text__item__bottom">
                            credits
                        </div>
                    </div>
                    <div className="footer__text__item">
                        <div className="footer__text__item__top">
                            <span>policy</span>
                            <div className="footer__text__item__top__list">
                                <div>
                                    <span>terms</span>
                                    <span>terms</span>
                                </div>
                                <div>
                                    <span>privacy</span>
                                    <span>privacy</span>
                                </div>
                                <div>
                                    <span>cookie</span>
                                    <span>cookie</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer__text__item__bottom">
                            © 2020 déplacé maison.
                        </div>
                    </div>
                    <div className="footer__text__item">
                        <div className="footer__text__item__icon">
                           <Move text = "" />
                        </div>
                        <div className="footer__text__item__social">
                            <span><img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d303c388e44eb6941b16af5_facebook.svg" alt="" /></span>
                            <span><img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d303c3985ef61f5a55c8a45_instagram.svg" alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
