import React from 'react'
import classes from './Hero.module.css'

function Hero() {
  return (
    <>
        <div className={classes.container}>
            <div className={classes.col}>
                <p>SO , YOU WANT TO TRAVEL TO</p>
                <span>SPACE</span>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p>
            </div>
            <div className={classes.col}>
                <div className={classes.circle}>EXPLORE</div>
            </div>
        </div>
    </>
  )
}

export default Hero