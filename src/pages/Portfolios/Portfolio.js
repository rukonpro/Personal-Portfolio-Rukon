import React from 'react';
import './Portfolio.css'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PortfolioDetailsModal from './PortfolioDetailsModal/PortfolioDetailsModal';




const Portfolio = ({ portfolio }) => {
    const { img_1, title, description, aos } = portfolio;

    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Grid item xs={12} sm={12} md={4} data-aos={aos} data-aos-duration="2000">

            <Box className="portfolio-card-context-containers ">
                <img src={img_1} alt="" className="image " />

                <Box className="overlay">
                    <Box className="portfolioContent">
                        <Typography variant="p">{
                            title
                        }</Typography> <br />
                        <Typography variant="p" sx={{ color: 'yellow', fontSize: 10 }}>
                            <span className='font-bold text-green-400'>Implements By:</span> {description.slice(0, 100)}
                        </Typography>

                        <Box className='flex justify-around'>
                           <button onClick={handleOpen}>Details</button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <PortfolioDetailsModal
                handleClose={handleClose}
                open={open}
                portfolio={portfolio} >

            </PortfolioDetailsModal>
        </Grid>
    );
};

export default Portfolio;