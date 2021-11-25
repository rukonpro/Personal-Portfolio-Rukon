import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import AOS from 'aos';
import Portfolio from './Portfolio';
import 'aos/dist/aos.css';


const Portfolios = () => {
    AOS.init();
    const portfolios = [
        {
            id: 0,
            img: 'https://i.ibb.co/S3t7tx1/Screenshot-2021-11-25-at-01-12-44-Online-CLock-Shop.png',
            title: 'ONLINE CLOCK SHOP',
            description: "React, React-router, Node.js, Express.js, Firebase,Bootstrap, Material UI,Telwind CSS, MongoDB",
            list1: 'Users can add multiple orders,  Delete orders , place order and review,.',
            list2: 'Admin can manage all order,Add a Product,Update Product,Delete Product and set user rules.',
            list3: 'User authentication firebase login with google,Create Account and login.',
            gitHubCode: "https://github.com/RnRukon/ONLINE-CLOCK-SHOP",
            liveSite: 'https://premier-pottery-retailer.web.app/',
            serverCode: 'https://github.com/RnRukon/ONLINE-CLOCK-SHOP-Server',
            aos: 'flip-right'
        },

        {
            id: 1,
            img: 'https://i.ibb.co/0G5JGkL/Screenshot-2021-11-25-at-01-43-16-React-App.png',
            title: 'Doctors Portal',
            description: "React, React-router, Node.js, Express.js, Firebase,Bootstrap, Material UI,Telwind CSS, MongoDB",
            list1: 'Users can add multiple orders, review orders, Delete orders and place order.',
            list2: 'Admin can manage all order,Add a Product,Update Product,Delete Product and set user rules.',
            list3: 'User authentication firebase login with google,Create Account and login.',
            liveSite: 'https://doctor-portal-b1210.web.app/',
            gitHubCode: 'https://github.com/RnRukon/Doctor-portal-cline-site',
            serverCode: 'https://github.com/RnRukon/Doctor-Portal-Server',
            aos: 'flip-left'
        },

        {
            id: 2,
            img: 'https://i.ibb.co/t8LvXMd/Screenshot-2021-11-05-at-21-35-55-Express-Home-Delivery.png',
            title: 'Express Home Delivery',
            description: "React, React-router, React-hook-form, Node.js,Express.js, Firebase, Bootstrap,Telwind CSS, MaterialUI, MongoDB.",
            list1: ' Users can Order services and Order review,remove orders',
            list2: ' Admin can ,manage all order,Add a Service ,Update Service',
            list3: 'User authentication firebase login with google  or  Create account  and login',
            liveSite: 'https://express-home-delivery-ebb81.web.app/',
            gitHubCode: 'https://github.com/RnRukon/Express-Home-Delivery',
            serverCode: 'https://github.com/RnRukon/Express-Home-Delivery-Server',
            aos: 'flip-right'


        },
        {
            id: 3,
            img: 'https://i.ibb.co/Y3x2WqX/Screenshot-2021-11-05-at-21-16-51-Ama-john.png',
            title: 'Ama john',
            description: "React, React-router, React-hook-form, Node.js,Express.js, Firebase, Bootstrap,Telwind CSS, MaterialUI, MongoDB.",
            list1: ' Users can Order services and Order review,remove orders',
            list2: 'User authentication firebase login with google  or  Create account  and login',
            liveSite: 'https://ema-jhon-fb925.firebaseapp.com/',
            gitHubCode: 'https://github.com/RnRukon/Ema-Jhon-Shop/tree/master/src',
            serverCode: 'https://github.com/RnRukon/Ema-Jhon-server',
            aos: 'flip-left'
        },
        {
            id: 4,
            img: 'https://i.ibb.co/dt6mB0Q/Screenshot-2021-11-05-at-21-42-04-PRO-Dental-CARE.png',
            title: 'PRO DENTAL CARE',
            description: "React, React-router, Bootstrap,Telwind CSS and MaterialUI.",
            list1: 'User authentication firebase login with google  or  Create account  and login',
            liveSite: 'https://pro-dental-care-89cbd.firebaseapp.com/',
            gitHubCode: 'https://github.com/RnRukon/PRO-Dental-CARE',
            aos: 'flip-right'
        },
        {
            id: 5,
            img: 'https://i.ibb.co/jZpRqwz/Screenshot-2021-11-05-at-22-18-21-Programing-Education-Academy.png',
            title: 'Programing Education Academy',
            description: "React, React-router,  Bootstrap,Telwind CSS, MaterialUI,",
            liveSite: 'https://programing-education-academy.netlify.app/',
            gitHubCode: 'https://github.com/RnRukon/Programing-Education-Academy',
            aos: 'flip-left'
        },





    ]
    return (
        <Box className="portfolio-Container py-11">
            <Container>
                <Typography variant='h4' className=" text-5xl fw-bold text-center pb-11 text-pink-400" data-aos="zoom-out-down">
                    PORTFOLIO
                </Typography>
                <Box id="portfolio" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            portfolios.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio}></Portfolio>)
                        }

                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Portfolios;