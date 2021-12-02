import React from 'react';
import './Portfolio.css'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
import PortfolioDetailsModal from './PortfolioDetailsModal/PortfolioDetailsModal';


import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',

    },
}));


const Portfolio = ({ portfolio }) => {
    const { img_1, title, description, gitHubCode, liveSite, serverCode, aos } = portfolio;

    const [handlePortfolioModalOpen, setHandlePortfolioModalOpen] = React.useState(false);
    const handleOpenModal = () => setHandlePortfolioModalOpen(true);
    const handleClose = () => setHandlePortfolioModalOpen(false);


    return (
        <Grid item xs={12} sm={4} md={4} data-aos={aos}>

            <Box className="portfolio-card-context-containers">
                <img src={img_1} alt="" className="image" />

                <Box className="overlay">
                    <Box className="portfolioContent">
                        <Typography variant="p">{
                            title
                        }</Typography> <br />
                        <Typography variant="p" sx={{ color: 'yellow', fontSize: 10 }}>
                            <span className='font-bold text-green-400'>Implements By:</span> {description.slice(0, 100)}
                        </Typography>

                        <Box className='flex justify-around'>
                            <Box onClick={handleOpenModal} >
                                <BootstrapTooltip
                                    title="Details"
                                    placement="top-end"
                                    arrow>
                                    <DetailsOutlinedIcon sx={{ color: 'limegreen' }} />
                                </BootstrapTooltip>
                            </Box>

                            <Box >

                                <a href={liveSite} target="_blank" rel="noopener noreferrer">
                                    <BootstrapTooltip
                                        title="Live Site"
                                        placement="top-end"
                                        arrow>
                                        <LiveTvOutlinedIcon sx={{ color: 'limegreen' }} />
                                    </BootstrapTooltip>

                                </a>
                            </Box>
                            <Box>

                                <a href={gitHubCode} target="blank">
                                    <BootstrapTooltip
                                        title="Client Site Code"
                                        placement="top-end"
                                        arrow>
                                        <GitHubIcon sx={{ color: 'limegreen' }} />
                                    </BootstrapTooltip>
                                </a>


                            </Box>




                            {
                                serverCode &&
                                <Box>

                                    <a href={serverCode} target="_blank" rel="noopener noreferrer">
                                        <BootstrapTooltip
                                            title="Server site Code"
                                            placement="top-end"
                                            arrow>
                                            <StorageOutlinedIcon sx={{ color: 'limegreen' }} />
                                        </BootstrapTooltip>

                                    </a>


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