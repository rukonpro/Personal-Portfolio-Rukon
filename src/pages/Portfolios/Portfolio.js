import React from 'react';
import './Portfolio.css'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
import PortfolioDetailsModal from './PortfolioDetailsModal/PortfolioDetailsModal';

const Portfolio = ({ portfolio }) => {
    const { img, title, description, gitHubCode, liveSite, serverCode, aos } = portfolio;

    const [handlePortfolioModalOpen, setHandlePortfolioModalOpen] = React.useState(false);
    const handleOpenModal = () => setHandlePortfolioModalOpen(true);
    const handleClose = () => setHandlePortfolioModalOpen(false);


    return (
        <Grid item xs={12} sm={4} md={4} data-aos={aos}>

            <Box className="portfolio-card-context-containers">
                <img src={img} alt="" className="image" />
                <Box className="overlay">
                    <Box className="portfolioContent">
                        <Typography variant="p">{
                            title
                        }</Typography> <br />
                        <Typography variant="p" sx={{ color: 'yellow', fontSize: 10 }}>
                            {description.slice(0, 100)}
                        </Typography>

                        <Box>
                            <Box onClick={handleOpenModal} className="tooltipp"><DetailsOutlinedIcon sx={{ color: 'limegreen' }} />
                                <span className="tooltiptextt">Details</span>
                            </Box>

                            <Box className="tooltipp">

                                <a href={liveSite} target="_blank" rel="noopener noreferrer"> <LiveTvOutlinedIcon sx={{ color: 'limegreen' }} />
                                </a>
                                <span className="tooltiptextt">Live Site</span>

                            </Box>
                            <Box className="tooltipp">

                                <a href={gitHubCode} target="blank">
                                    <GitHubIcon sx={{ color: 'limegreen' }} />
                                </a>
                                <span className="tooltiptextt">Github Code</span>

                            </Box>




                            {
                                serverCode &&
                                <Box className="tooltipp">

                                    <a href={serverCode} target="_blank" rel="noopener noreferrer">
                                        <StorageOutlinedIcon sx={{ color: 'limegreen' }} />
                                    </a>

                                    <span className="tooltiptextt">Server</span>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
            <PortfolioDetailsModal handlePortfolioModalOpen={handlePortfolioModalOpen} handleClose={handleClose} portfolio={portfolio} ></PortfolioDetailsModal>
        </Grid>
    );
};

export default Portfolio;