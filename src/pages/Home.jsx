import React, { useEffect, useState, useRef } from 'react'
import Cover from '../components/Cover'
import CartItem from '../components/CartItem'
import { dataCart } from '../assets/data';
import Move from '../components/Move';

import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
    
    const [load, setLoad] = useState(false)
    const [active, setActive] = useState(false)

    const contentFooter = useRef(null)
    const contentFooterTexItemTop = useRef(null)
    const contentFooterTexItemBottom = useRef(null)

    const paraRefTop = useRef(null)
    const paraRefBottom = useRef(null)

    const contentIntroduce = useRef(null)
    const contentCart = useRef(null)
    
    //solve load page
    useEffect(() => {
        window.addEventListener('load',() => {
            setTimeout(() => {
                window.scroll(0, 0)
            }, 200)
        })
    }, [])

    //set Timeout effect
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoad(true)
        }, 1900)

        return () => {
            clearTimeout(timeOut)
        }
    }, [load])

    //setTimeOut active text content footer
    useEffect(() => {
        const repeat = setInterval(() => {
            contentFooter.current.classList.toggle('active')
            contentFooterTexItemTop.current.classList.toggle('active')
            contentFooterTexItemBottom.current.classList.toggle('active')

            paraRefTop.current.classList.toggle('active')
            paraRefBottom.current.classList.toggle('active')
        }, 3000)

        return () => {
            clearInterval(repeat)
        }
    }, [])

    //slove active when scroll introduct
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY + window.innerHeight >= contentIntroduce.current.offsetTop + 150) {
                contentIntroduce.current.classList.add('active')
            }

            if(window.scrollY + window.innerHeight >= contentCart.current.offsetTop + 150) {
                contentCart.current.classList.add('active')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className = {`home ${load ? 'active' : ''}`}>
            {/* load effect  */}
            <div className="load-effect">
                <div className="load-effect__top">
                    <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d07c48bb025bb521d3f63e9_logomark.svg" alt="" />
                </div>
                <div className= {`load-effect__percent ${load ? '' : 'active'}`}>
                    <div className="load-effect__percent__item">30%</div>
                    <div className="load-effect__percent__item">68%</div>
                    <div className="load-effect__percent__item">87%</div>
                    <div className="load-effect__percent__item">100%</div>
                </div>
                <div className="load-effect__bottom">
                    © 2020 DéPlacè maison.
                    <br/>
                    all rights reserved.
                </div>
            </div>

            <div className="home__content">
                {/* heading_content  */}
                <div className="container">
                   <div className="home__content__heading">
                       <div className="home__content__heading__title">
                           <div className="home__content__heading__title__first">
                                <h1>spring,</h1>
                           </div>
                           <div className="home__content__heading__title__wrap">
                               <h1>summer</h1>
                               <h2>
                                   <span>coll.</span>
                                   <span>2021</span>
                               </h2>
                           </div>
                       </div>
                       <div className="home__content__heading__image">
                           <div className="home__content__heading__image__wrap">
                                <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede27e188219c6c4ab2af6b_man-default-p-500.jpeg" alt="" />
                                <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5ede29ef88219c8178b2be22_women-default-p-500.jpeg" alt="" />
                                <div className="home__content__heading__image__match">
                                    <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d09026ed5102a6910070111_scotch-tape.svg" alt="" />
                                </div>
                           </div>
                       </div>
                       <Move text = {'explore'}/>
                    </div> 
                </div>

                {/* banner  */}
                <div className="home__content__banner">
                    <div className="home__content__banner__item">
                        <h1>
                            &nbsp;&nbsp;deplace shop&nbsp;&nbsp;  
                            <span>.</span>
                            &nbsp;&nbsp;do not scroll&nbsp;&nbsp;· 
                        </h1>
                    </div>
                    <div className="home__content__banner__item">
                        <h1>
                            &nbsp;&nbsp;deplace shop&nbsp;&nbsp;  
                            <span>.</span>
                            &nbsp;&nbsp;do not scroll&nbsp;&nbsp;· 
                        </h1>
                    </div>
                    <div className="home__content__banner__item">
                        <h1>
                            &nbsp;&nbsp;deplace shop&nbsp;&nbsp;  
                            <span>.</span>
                            &nbsp;&nbsp;do not scroll&nbsp;&nbsp;· 
                        </h1>
                    </div>
                    <div className="home__content__banner__item">
                        <h1>
                            &nbsp;&nbsp;deplace shop&nbsp;&nbsp;  
                            <span>.</span>
                            &nbsp;&nbsp;do not scroll&nbsp;&nbsp;· 
                        </h1>
                    </div>
                    <div className="home__content__banner__item">
                        <h1>
                            &nbsp;&nbsp;deplace shop&nbsp;&nbsp;  
                            <span>.</span>
                            &nbsp;&nbsp;do not scroll&nbsp;&nbsp;· 
                        </h1>
                    </div>
                    <div className="home__content__banner__item">
                        <h1>
                            &nbsp;&nbsp;deplace shop&nbsp;&nbsp;  
                            <span>.</span>
                            &nbsp;&nbsp;do not scroll&nbsp;&nbsp;· 
                        </h1>
                    </div>
                </div>

                {/* introduct */}
                <div className="container">
                    <div className="home__content__introduce" ref = {contentIntroduce}> 
                        <div className="home__content__introduce__questions">
                            <span>who we are</span>
                            <p>An independent <span>brand</span> of</p>
                        </div>
                        <p>urban trekking shoes and accessories</p>
                        <p>that comes from a convergence of </p>
                        <p>arts and personalities.</p>
                    </div>
                </div>

                {/* list cart  */}
                <div className="home__content__cart" ref = {contentCart}>
                    <div className="home__content__cart__slide">
                        <Swiper 
                            spaceBetween={40}
                            slidesPerView= {'auto'}
                            grabCursor = {true}
                            speed = {500}
                        >
                            <SwiperSlide />
                            {
                                dataCart.map((item, index) => (
                                    <SwiperSlide key = {index}>
                                        <CartItem data = {item}/>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className="home__content__cart__move">

                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <Move text = 'shop all'/>
                    <div className="home__content__footer" ref = {contentFooter}>
                        <div className="home__content__footer__img">
                            <img src="https://global-uploads.webflow.com/5c9c9c646cf0969b319f264f/5d0b92e20369a4438cd54272_virgolette.svg" alt="" />
                            <div className="home__content__footer__img__text">
                                <h3
                                    ref = {contentFooterTexItemTop}
                                    className = "active"
                                >
                                    WiLLiAm GIbSoN
                                </h3>
                                <h3
                                    ref = {contentFooterTexItemBottom}
                                    className = ""
                                >        
                                JAmiE K. CoHen
                                </h3>
                            </div>
                        </div>
                        <div className="home__content__footer__para__wrapper">
                            <div className="home__content__footer__para">
                                <h4 
                                    className = "active"
                                    ref = {paraRefTop}
                                >
                                    Good things come to those who wait – Déplacé Maison 
                                    is what has been missing in the modern fashion industry 
                                    for years. Buy a shoe of high quality and design it finally 
                                    happened.  
                                </h4>
                                <h4
                                    className = ""
                                    ref = {paraRefBottom}
                                >
                                    Déplacé Maison is a convincer for anticipation. The urban trekking
                                as nevers seen before. An exceptional product that has no equal 
                                alongside a great team represent the brand professionally.   
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* tooggle btn < tablet  */}
            <div className= {`home__toggle__btn ${active ? 'active' : ''}`} onClick = {() => setActive(!active)}>
                <div className="home__toggle__btn__top"></div>
                <div className="home__toggle__btn__center"></div>
                <div className="home__toggle__btn__bottom"></div>
            </div>
            {/* cover  */}
            <Cover active = {active}/>
        </div>
    )
}

export default Home
