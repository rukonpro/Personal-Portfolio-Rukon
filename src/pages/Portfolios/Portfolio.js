import React from 'react';
import './Portfolio.css'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';

const Portfolio = ({ portfolio }) => {
    const { img, title, description } = portfolio;

    return (
        <Grid item xs={12} sm={4} md={4} >

            <Box className="portfolio-card-context-containers">
                <img src={img} alt="" className="image" />
                <Box className="overlay">
                    <Box className="portfolioContent">
                        <Typography variant="h6">{
                            title
                        }</Typography>
                        <Typography variant="p" sx={{ color: 'yellow', fontSize: 10 }}>
                            {description}
                        </Typography>

                        <Box>
                            <Box className="tooltipp"><DetailsOutlinedIcon sx={{ color: 'limegreen' }} />
                                <span className="tooltiptextt">Details</span>
                            </Box>
                            <Box className="tooltipp"><CodeOutlinedIcon sx={{ color: 'limegreen' }} />
                                <span className="tooltiptextt">Github Code</span>
                            </Box>
                            <Box className="tooltipp"><LiveTvOutlinedIcon sx={{ color: 'limegreen' }} />
                                <span className="tooltiptextt">Live Site</span>
                            </Box>
                            <Box className="tooltipp"><StorageOutlinedIcon sx={{ color: 'limegreen' }} />
                                <span className="tooltiptextt">Server</span>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default Portfolio;