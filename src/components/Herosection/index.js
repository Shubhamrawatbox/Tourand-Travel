import React from 'react'
import { Button } from '../ButtonElement'
import './Herosection.css'
function Herosection(){
    return(
        <>
        <div className="hero-container">
            <h1>Travel More</h1>
            <p>Plan next trip today</p>
            <div className="hero-btn">
                <Button big primary bigfont>
                    Get started
                </Button>
            </div>
        </div>
        </>
    )
}
export default Herosection