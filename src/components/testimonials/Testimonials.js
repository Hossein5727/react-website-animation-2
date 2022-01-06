import React from 'react'
import { testimonialImageData } from '../../data/testimonialImageData'
import { testimonialTextData } from '../../data/testimonialTextData'
import { ColumnOne, ColumnOneData, ColumnTwo, ColumnTwoData, IconColumnOne, TestimonialContainer, TestimonialContent, TestimonialContentWrapper, TestimonialTitle1, TestimonialTitle2 } from './TestimonialsElements'

function Testimonials() {
    return (
        <TestimonialContainer>
            <TestimonialContent>
                <TestimonialTitle1 data-aos="fade-right">Testimonials</TestimonialTitle1>
                <TestimonialTitle2 data-aos="fade-right">What Pepole Are Saying!</TestimonialTitle2>
                <TestimonialContentWrapper>
                    <ColumnOne data-aos="fade-left" data-aos-duration="500">
                        {testimonialTextData.map(item => (
                            <ColumnOneData key={item.id}>
                                <IconColumnOne color={item.color}>{item.icon}</IconColumnOne>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </ColumnOneData>
                        ))}
                    </ColumnOne>
                    <ColumnTwo data-aos="fade-down" data-aos-duration="800">
                        {testimonialImageData.map(item => (
                            <ColumnTwoData key={item.id}>
                                <img
                                    src={item.img}
                                    alt='Image1'
                                    loading='lazy'
                                />
                            </ColumnTwoData>
                        ))}
                    </ColumnTwo>
                </TestimonialContentWrapper>
            </TestimonialContent>
        </TestimonialContainer>
    )
}

export default Testimonials
