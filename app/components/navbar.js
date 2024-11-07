'use client'

import { useEffect, useRef } from "react"

export default function Navbar () {

    // target a tag link
    const home = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)

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
        }
        
    }

    
    useEffect(()=>{
        // viewport for check: where are user and add active link to class a tag
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    switch (entry.target.id) {
                        case 'home':
                            activeLink('home');
                            break;
                        case 'about':
                            activeLink('about');
                            break;
                        case 'contact':
                            activeLink('contact');
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
        <div className="positionNavbar">
            <div className="navbar">
                <div><a className="linkNav activeLink" onClick={() => activeLink('home')} ref={home} href="#home">خـــــانه</a></div>
                <div><a className="linkNav" onClick={() => activeLink('about')} ref={about} href="#about">دربــــــــــــاره من</a></div>
                <div><a className="linkNav" onClick={() => activeLink('contact')} ref={contact} href="#contact">ارتبـــــــــاط با من</a></div>
                <div className="navFingerprint">
                    <img className="navFileFingerprint" src="./fingerPrint.svg" />
                </div>
            </div>
        </div>
    )
}