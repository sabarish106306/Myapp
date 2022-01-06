import React, { useState } from 'react'
import "./headerr.css"
import img from "../../asset/img/logo.png"

function Header() {
     const [show,setshow]=useState(false)

     const handleshow=()=>{
         setshow(!show)
     }

    return (
        <div className='header_container' >
            <div className='head' >
            <h1 onClick={handleshow} className='h1' >Heading</h1>
            </div>
            {
                show?<div className='logo' >
                <img src={img} className='img' />
                </div>:null
            }
        </div>
    )
}

export default Header
