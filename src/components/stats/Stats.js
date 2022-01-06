import React from 'react'
import { statsData } from '../../data/statsData'
import { Description, Heading, Icon, StatsBox, StatsContainer, Title, Wrapper } from './StatsElemets'

function Stats() {
    return (
        <StatsContainer>
            <Heading data-aos="fade-up" data-aos-duration="500">Why Choose Us?</Heading>
            <Wrapper >
                {statsData.map(item => (
                    <StatsBox key={item.id} data-aos="flip-right" data-aos-duration="900">
                        <Icon color={item.color}>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </StatsBox>
                ))}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats
