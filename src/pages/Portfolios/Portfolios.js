import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Portfolio from './Portfolio';



const Portfolios = () => {
    const portfolios = [
        {
            id: 1,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 2,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 3,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 4,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 5,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 6,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 7,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 8,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 9,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 10,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 11,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        },
        {
            id: 12,
            img: 'https://i.ibb.co/hVZ7L9p/Screenshot-2021-11-03-at-23-29-31-Portfolio-Rukon.png',
            title: 'Portfolio',
            description: "Note that the position of the tooltip text isn't very good. Go back to the tutorial and continue reading on how to "
        }

    ]
    return (
        <Container sx={{}}>
            <Box id="portfolio" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        portfolios.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio}></Portfolio>)
                    }


                </Grid>
            </Box>
        </Container>
    );
};

export default Portfolios;