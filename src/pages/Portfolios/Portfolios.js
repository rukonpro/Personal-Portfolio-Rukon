import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AOS from 'aos';
import Portfolio from './Portfolio';
import 'aos/dist/aos.css';

/* 





*/
const Portfolios = () => {
    AOS.init();
    const portfolios = [
        {
            id: 0,
            img_1: 'https://i.ibb.co/8dZ9dsN/screenshot-eskul-avengers-web-app-2022-04-02-22-15-06.png',
            img_2: 'https://i.ibb.co/nrPZ9By/screenshot-eskul-avengers-web-app-2022-04-02-22-16-31.png',
            img_3: 'https://i.ibb.co/RyyBWcQ/screenshot-eskul-avengers-web-app-2022-04-02-22-17-33.png',
            img_4: 'https://i.ibb.co/XjZ2D7w/screenshot-eskul-avengers-web-app-2022-04-02-22-18-03.png',
            img_5: 'https://i.ibb.co/fp76S8C/screenshot-eskul-avengers-web-app-2022-04-02-22-18-40.png',
            title: 'Eskul',
            description: "React, Mongoose, Express, Firebase,  NodeJS, Material UI, JSX, SSL Commerce, Email.Js, Firebase, Heroku",
            list1: 'School’s information-related website with dynamic functions and responsive design. Implement a dashboard for admin and users',
            list2: 'Users can also find out transport for their child based on their school location, buy books, donate money for any school, hire an online private tutor and read the books',
            list3: 'Users can contact us using the contact us form and by messenger chatting system. Ask any questions using the faq form. They can Review our website, private tutor, and books',
            gitHubCode: "https://github.com/team-avengers-endgame/Eskul-Client",
            liveSite: 'https://eskul-avengers.web.app',
            serverCode: 'https://github.com/team-avengers-endgame/Eskul-Server',
            aos: 'flip-right'
        },
        {
            id: 1,
            img_1: 'https://i.ibb.co/S3t7tx1/Screenshot-2021-11-25-at-01-12-44-Online-CLock-Shop.png',
            img_2: 'https://i.ibb.co/0c6hw44/Screenshot-2021-11-30-at-00-08-13-Online-CLock-Shop.png',
            img_3: 'https://i.ibb.co/8x21yVB/Screenshot-2021-11-30-at-00-13-02-Online-CLock-Shop.png',
            img_4: 'https://i.ibb.co/hF9vnFB/Screenshot-2022-02-02-032625.png',
            title: 'ONLINE CLOCK SHOP',
            description: "React, React-router, Node.js, Express.js, Firebase,Bootstrap, Material UI,Telwind CSS, MongoDB",
            list1: 'Users can add multiple orders,  Delete orders , place order and review,.',
            list2: 'Admin can manage all order,Add a Product,Update Product,Delete Product and set user roles.',
            list3: 'User authentication firebase login with google,Create Account and login.',
            gitHubCode: "https://github.com/RnRukon/ONLINE-CLOCK-SHOP",
            liveSite: 'https://premier-pottery-retailer.web.app/',
            serverCode: 'https://github.com/RnRukon/ONLINE-CLOCK-SHOP-Server',
            aos: 'flip-right'
        },

        {
            id: 2,
            img_1: 'https://i.ibb.co/2h4xrNw/Screenshot-2022-02-02-013311.png',
            img_2: 'https://i.ibb.co/b5Qnhp6/Screenshot-2022-02-02-013358.png',
            img_3: 'https://i.ibb.co/hYkz7dS/Screenshot-2022-02-02-013432.png',
            img_4: 'https://i.ibb.co/W6V9KG1/Screenshot-2022-02-02-013552.png',
            img_5: 'https://i.ibb.co/ctLhb31/Screenshot-2022-02-02-020936.png',
            img_6: 'https://i.ibb.co/SrmChFM/Screenshot-2022-02-02-023042.png',
            title: 'Explore Travel',
            description: "React, React-router, Node.js, Express.js, Firebase, Material UI,Telwind CSS, MongoDB",
            list1: 'Users can post of Blog, review Posted Blog, Delete Blog.',
            list2: 'Admin can manage all User Blog,Add a Blog,Update ,Delete Blog and set user roles.',
            list3: 'User authentication firebase login with google,Create Account and login.',
            liveSite: 'https://explore-travel-df23a.web.app',
            gitHubCode: 'https://github.com/RnRukon/Explore-Tarvel-Client',
            serverCode: 'https://github.com/RnRukon/Explore-Tarvel-server',
            aos: 'flip-left'
        },

        {
            id: 3,
            img_1: 'https://i.ibb.co/0G5JGkL/Screenshot-2021-11-25-at-01-43-16-React-App.png',
            img_2: 'https://i.ibb.co/2YqwmLH/Screenshot-2021-11-30-at-00-37-15-React-App.png',
            img_3: 'https://i.ibb.co/dPrP4pk/Screenshot-2021-11-30-at-00-35-32-React-App.png',
            title: 'Doctors Portal',
            description: "React, React-router, Node.js, Express.js, Firebase,Bootstrap, Material UI,Telwind CSS, MongoDB",
            list1: 'Users can add multiple orders, review orders, Delete orders and place order.',
            list2: 'Admin can manage all order,Add a Product,Update Product,Delete Product and set user roles.',
            list3: 'User authentication firebase login with google,Create Account and login.',
            liveSite: 'https://doctor-portal-b1210.web.app/',
            gitHubCode: 'https://github.com/RnRukon/Doctor-portal-cline-site',
            serverCode: 'https://github.com/RnRukon/Doctor-Portal-Server',
            aos: 'flip-left'
        },
        {
            id: 4,
            img_1: 'https://i.ibb.co/Nj7NDv5/Screenshot-2022-02-02-024345.png',
            img_2: 'https://i.ibb.co/mDHv54p/Screenshot-2022-02-02-024436.png',
            img_3: 'https://i.ibb.co/9tyJ3V9/Screenshot-2022-02-02-024657.png',
            img_4: 'https://i.ibb.co/HnH5sjK/Screenshot-2022-02-02-024850.png',
            img_5: 'https://i.ibb.co/BwNQsNW/Screenshot-2022-02-02-024913.png',
            img_6: 'https://i.ibb.co/c1yyc8d/Screenshot-2022-02-02-025244.png',
            title: 'Shop Mart',
            description: "React, React-router, Node.js, Express.js, Firebase, Material UI,Telwind CSS, MongoDB ,Chat-Engin and Email.js",
            list1: 'Users can add a orders, review orders, Delete orders, place order and Chatting another user.',
            list2: 'Admin can manage all order,Add a Product,Update Product,Delete Product and set user roles.',
            list3: 'User authentication firebase login with google,Create Account and login.',
            liveSite: 'https://shop-mart-f89cb.web.app',
            gitHubCode: 'https://github.com/RnRukon/Shop-mart-client-site-code',
            serverCode: 'https://github.com/RnRukon/Shop-mart-server-code',
            aos: 'flip-left'
        },

        {
            id: 5,
            img_1: 'https://i.ibb.co/t8LvXMd/Screenshot-2021-11-05-at-21-35-55-Express-Home-Delivery.png',
            img_2: 'https://i.ibb.co/HGhkkmg/Screenshot-2022-02-02-032955.png',
            img_3: 'https://i.ibb.co/BTxf42p/Screenshot-2021-11-30-at-00-44-29-Express-Home-Delivery.png',
            img_4: 'https://i.ibb.co/cNRsQsX/Screenshot-2021-11-30-at-01-04-08-Express-Home-Delivery.png',

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
            id: 6,
            img_1: 'https://i.ibb.co/Y3x2WqX/Screenshot-2021-11-05-at-21-16-51-Ama-john.png',
            img_2: 'https://i.ibb.co/5BgVyFz/Screenshot-2021-11-30-at-01-10-07-Ama-john.png',
            img_3: 'https://i.ibb.co/Y3x2WqX/Screenshot-2021-11-05-at-21-16-51-Ama-john.png',
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
            id: 7,
            img_1: 'https://i.ibb.co/dt6mB0Q/Screenshot-2021-11-05-at-21-42-04-PRO-Dental-CARE.png',
            img_2: 'https://i.ibb.co/JQV1zy4/Screenshot-2021-11-30-at-01-17-13-PRO-Dental-CARE.png',
            img_3: 'https://i.ibb.co/7GPfQPF/Screenshot-2021-11-30-at-01-18-31-PRO-Dental-CARE.png',
            title: 'PRO DENTAL CARE',
            description: "React, React-router, Bootstrap,Telwind CSS and MaterialUI.",
            list1: 'User authentication firebase login with google  or  Create account  and login',
            liveSite: 'https://pro-dental-care-89cbd.firebaseapp.com/',
            gitHubCode: 'https://github.com/RnRukon/PRO-Dental-CARE',
            aos: 'flip-right'
        },
        {
            id: 8,
            img_1: 'https://i.ibb.co/jZpRqwz/Screenshot-2021-11-05-at-22-18-21-Programing-Education-Academy.png',
            img_2: 'https://i.ibb.co/bHZcspZ/Screenshot-2021-11-30-at-01-22-41-Programing-Education-Academy.png',
            img_3: 'https://i.ibb.co/jWmtHPG/Screenshot-2021-11-30-at-01-24-08-Programing-Education-Academy.png',
            title: 'Programing Education Academy',
            description: "React, React-router,  Bootstrap,Telwind CSS, MaterialUI",
            liveSite: 'https://programing-education-academy.netlify.app/',
            gitHubCode: 'https://github.com/RnRukon/Programing-Education-Academy',
            aos: 'flip-left'
        },
    ];

    
    return (
        <Box id="portfolio" className="portfolio-Container  " sx={{ pt: 10 }}>

            <h1 className=" titleDesign text-center" data-aos="zoom-out-down">
                PORTFOLIO
            </h1>
            <Container className='' sx={{ py: 10 }}>

                <Box sx={{ flexGrow: 1 }}>
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