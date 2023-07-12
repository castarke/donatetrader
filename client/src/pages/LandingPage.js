import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div>
            <div className='About'>
                <p>
                Welcome to DonateTrader, the ultimate marketplace for users to donate and trade their items, 
                revolutionizing the way people exchange goods. Our platform is designed to foster a vibrant 
                community where individuals can connect, barter, and give back in a meaningful way. 
                At DonateTrader, we believe in the power of sharing and sustainability, empowering users to find 
                new homes for their unwanted items while reducing waste and promoting a circular economy. Whether 
                you're looking to declutter your space, discover unique treasures, or contribute to a worthy cause, 
                our user-friendly interface and secure platform make it easy to connect with like-minded individuals 
                who share your passions. Join our growing community today and experience the joy of giving and 
                receiving through the art of bartering at DonateTrader.
                </p>
            </div>
            {/* <div className='Steps'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div> */}
            <div className='SignUp'>
                <Link to="/login">
                    <Button variant="contained" color="primary">
                        SignUp
                    </Button>
                </Link>
            </div>
            <div className='LogIn'>
                <Link to="/signup">
                    <Button variant="contained" color="primary">
                        LogIn
                    </Button>
                </Link>
            </div>
        </div>
    )
}