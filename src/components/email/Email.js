import React from 'react'
import { EmailBg, EmailBox, EmailContainer, EmailContent, EmailDesc, EmailImage, EmailInput, EmailTitle } from './EmailElements'
import Imag1 from '../../assets/image/email.jpg'
import { Button } from '../Button'

function Email() {
    return (
        <EmailContainer>
            <EmailBg>
                <EmailImage
                    src={Imag1}
                    alt='email'
                />
            </EmailBg>
            <EmailContent>
                <div data-aos="fade-down" data-aos-duration="900">
                    <EmailTitle>Get Access To Exclusive Offers</EmailTitle>
                    <EmailDesc>Sign up for our newslatter below to get $100 off your first trip!</EmailDesc>
                </div>
                <EmailBox data-aos="fade-up" data-aos-duration="900">
                    <EmailInput
                        type="text"
                        required
                        placeholder="Enter Your name!"
                    />
                    <Button className='mt-4' forEmail rounded primary to="trip">Sign Up</Button>
                </EmailBox>
            </EmailContent>
        </EmailContainer>
    )
}

export default Email
