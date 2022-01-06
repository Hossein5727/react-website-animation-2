import React from 'react'
import { HeroContainer, HeroBg, HeroVideo, HeroContent, HeroH1, HeroP } from './HeroElements'
import Video1 from '../../assets/video/travel1.mp4'
import { Button } from '../Button'

function Hero() {
    return (
        <HeroContainer>
            <HeroBg>
                <HeroVideo src={Video1} loop autoPlay muted />
            </HeroBg>
            <HeroContent>
                <HeroH1>Unreal Destinations</HeroH1>
                <HeroP>out of this world</HeroP>
                <Button to="/" rounded primary big className='mt-8'>Travel Now</Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
