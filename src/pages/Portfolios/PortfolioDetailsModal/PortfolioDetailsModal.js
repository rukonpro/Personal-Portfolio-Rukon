import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { List } from '@mui/material';
import { Carousel } from 'react-bootstrap';

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        color: '#fff',

    },
}));


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,

};

const PortfolioDetailsModal = ({ handlePortfolioModalOpen, handleClose, portfolio }) => {

    const { img_1, img_2, img_3, title, description, gitHubCode, serverCode, liveSite, list1, list2, list3 } = portfolio;
    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={handlePortfolioModalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={handlePortfolioModalOpen}>

                    <Box sx={style}>
                        <Box>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img src={img_1} alt="" />

                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img src={img_2} alt="" />

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={img_3} alt="" />

                                </Carousel.Item>
                            </Carousel>

                        </Box>
                        <Box sx={{ px: 1, pb: 1 }}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                {title}
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <Typography variant='h6' sx={{ display: 'inline' }}>Implements By:</Typography>{description}
                            </Typography>
                            {list1 && <List>1. {list1}</List>}
                            {list2 && <List>2. {list2}</List>}
                            {list3 && <List>3. {list3}</List>}

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ m: 2 }}>
                                <a href={liveSite} target="blank">
                                    <BootstrapTooltip
                                        title="Live Site"
                                        placement="top-end"
                                        arrow>
                                        <LiveTvOutlinedIcon />
                                    </BootstrapTooltip>

                                </a>
                            </Box>
                            <Box sx={{ m: 2 }}>
                                <a href={gitHubCode} target="blank">
                                    <BootstrapTooltip
                                        title="Client  Site Code"
                                        placement="top-end"
                                        arrow>
                                        <GitHubIcon />
                                    </BootstrapTooltip>
                                </a>
                            </Box>
                            {
                                serverCode &&
                                <Box sx={{ m: 2 }}>
                                    <a href={serverCode} target="blank">
                                        <BootstrapTooltip
                                            title="Server Site Code"
                                            placement="top-end"
                                            arrow>
                                            <StorageOutlinedIcon />
                                        </BootstrapTooltip>
                                    </a>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default PortfolioDetailsModal;