import React from 'react'

const Hero = ({children, hero}) => {
    return (
        <div>
            <header className={hero}>
                {children}
            </header>
        </div>
    )
}

export default Hero

Hero.defaultProps = {
    hero: "defaultHero"
};