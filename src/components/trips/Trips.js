import React from 'react'
import { tripsData } from '../../data/tripsData'
import { Button } from '../Button'
import { TripsCardItem, TripsContainer, TripsImg, TripsLocation, TripsLocationContainer, TripsTitle, TripsTitleContainer, TripsWrapper } from './TripsElements'

function Trips() {
    return (
        <>
            <TripsTitleContainer data-aos="fade-up" data-aos-duration="500">TRIPS</TripsTitleContainer>
            <TripsContainer>
                <TripsWrapper>
                    {tripsData.map(item => (
                        <TripsCardItem key={item.id} data-aos-duration="1000" data-aos="zoom-in" >
                            <TripsImg loading='lazy' src={item.img} />
                            <TripsLocationContainer>
                                <TripsLocation />
                                <TripsTitle>{item.name}</TripsTitle>
                            </TripsLocationContainer>
                            <Button primary rounded forCard to="/trips">View Destination</Button>
                        </TripsCardItem>
                    ))}
                </TripsWrapper>
            </TripsContainer>
        </>
    )
}

export default Trips
