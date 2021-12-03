import React, { useEffect, useRef } from 'react'

const Menu = () => {
    const menu = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer')
            if( (document.body.clientHeight - 2 * window.innerHeight ) - window.scrollY <= footer.clientHeight) { 
                menu.current.classList.add('hide')
            } else {
                menu.current.classList.remove('hide')
            }    
        }

        setTimeout(() => {
            window.addEventListener('scroll', handleScroll)
        }, 500)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className = 'menu' ref =  {menu}>
           <div className="container">
                <ul className = "nav">
                    <li>
                        <a href = "https//khang.com">shop</a>
                        <a href = "https//khang.com">shop</a>
                    </li>
                    <li>
                        <a href = "https//khang.com">collections</a>
                        <a href = "https//khang.com">collections</a>
                    </li>
                    <li>
                        <a href = "https//khang.com">contact</a>
                        <a href = "https//khang.com">contact</a>
                    </li>
                </ul>
           </div>
        </div>
    )
}

export default Menu
