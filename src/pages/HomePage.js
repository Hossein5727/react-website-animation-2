import React from 'react'
import Email from '../components/email/Email'
import Hero from '../components/hero/Hero'
import Stats from '../components/stats/Stats'
import Testimonials from '../components/testimonials/Testimonials'
import Trips from '../components/trips/Trips'

function HomePage() {
    return (
        <>
            <Hero />
            <Trips />
            <Testimonials />
            <Stats />
            <Email />
        </>
    )
}

export default HomePage
