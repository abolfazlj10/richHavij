'use client'

import { useEffect, useRef } from "react"

export default function Navbar () {

    // target a tag link
    const home = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)
    const homeMobile = useRef(null)
    const contactMobile = useRef(null)

    // remove class from rest of a tag
    const removeClassName = (elem) => {
        const classes = elem.className
        const indexOfClass = classes.indexOf('activeLink')
        if(indexOfClass != -1)
            elem.className = classes.slice(0,indexOfClass)
    }

    // add class to a tag and remove class from rest of tag
    const activeLink = (inp) => {
        if(inp == 'home'){
            home.current.className += ' activeLink'
            removeClassName(about.current)
            removeClassName(contact.current)
        }else if(inp == 'about'){
            about.current.className += ' activeLink'
            removeClassName(home.current)
            removeClassName(contact.current)
        }else if(inp == 'contact'){
            contact.current.className += ' activeLink'
            removeClassName(home.current)
            removeClassName(about.current)
        }else if(inp == 'homeMobile'){
            homeMobile.current.className += ' activeLink'
            removeClassName(contactMobile.current)
        }else if(inp == 'contactMobile'){
            contactMobile.current.className += ' activeLink'
            removeClassName(homeMobile.current)
        }
    }
    const fingerPrintLink = () => {
        removeClassName(homeMobile.current)
        removeClassName(contactMobile.current)
    }

    
    useEffect(()=>{
        // viewport for check: where are user and add active link to class a tag
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    switch (entry.target.id) {
                        case 'home':
                            activeLink('home');
                            activeLink('homeMobile');
                            break;
                        case 'about':
                            activeLink('about');
                            fingerPrintLink()
                            break;
                        case 'contact':
                            activeLink('contact');
                            activeLink('contactMobile');
                            break;
                        default:
                            break;
                    }
                }
            })
        }, {threshold: 0.5});


        ['home','about','contact'].forEach((screen)=>{
            observer.observe(document.getElementById(screen))
        })

        return () => observer.disconnect()
    },[])

    
    return(
        <>
            <div className="positionNavbar max-[750px]:hidden">
                <div className="navbar maxWidth">
                    <div><a className="linkNav activeLink" onClick={() => activeLink('home')} ref={home} href="#home">خـــــانه</a></div>
                    <div><a className="linkNav" onClick={() => activeLink('about')} ref={about} href="#about">دربــــــــــــاره من</a></div>
                    <div><a className="linkNav" onClick={() => activeLink('contact')} ref={contact} href="#contact">ارتبـــــــــاط با من</a></div>
                    <div className="navFingerprint">
                        <img className="navFileFingerprint" src="./fingerprint.svg" />
                    </div>
                </div>
            </div>
            <div className="positionNavbarMobile min-[750px]:hidden">
                <div className="navbarMobile maxWidth">
                    <div><a className="linkNav activeLink" onClick={() => activeLink('homeMobile')} ref={homeMobile} href="#home">خـــانه</a></div>
                    <a href="#about" onClick={fingerPrintLink} className="navFingerprint"><img className="navFileFingerprint" src="./fingerprint.svg" /></a>
                    <div><a className="linkNav" onClick={() => activeLink('contactMobile')} ref={contactMobile} href="#contact">ارتباط با من</a></div>
                </div>
            </div>
        </>
    )
}