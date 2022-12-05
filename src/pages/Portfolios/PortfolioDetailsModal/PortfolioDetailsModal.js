import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List } from '@mui/material';
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




const PortfolioDetailsModal = ({ handleClose, open, scroll, portfolio }) => {

    const { img_1, img_2, img_3, img_4, img_5, img_6, title, description, gitHubCode, serverCode, liveSite, list1, list2, list3 } = portfolio;


    return (
        <Dialog
            open={open}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            sx={{ backgroundColor: 'transparent' }}

        >
            <DialogTitle id="scroll-dialog-title" sx={{ backgroundColor: '#004b9b', color: 'white' }}>
                {title}
            </DialogTitle>
            {/* <Fade > */}
            <DialogContent dividers={scroll === "paper"} sx={{ backgroundColor: 'rgb(3, 22, 84)', color: 'white' }}>

                <Box sx={{ mt: 1 }}>
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
                            {img_4 && <Carousel.Item>
                                <img src={img_4} alt="" />

                            </Carousel.Item>}
                            {img_5 && <Carousel.Item>
                                <img src={img_5} alt="" />

                            </Carousel.Item>}
                            {img_6 && <Carousel.Item>
                                <img src={img_6} alt="" />

                            </Carousel.Item>}
                        </Carousel>

                    </Box>
                    <Box sx={{ pb: 1, textAlign: 'justify', wordSpacing: "1px" }}>

                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <Typography variant='h6' sx={{ display: 'inline' }}>Implements By: <br /> </Typography>{description}
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
            </DialogContent>
            {/* </Fade> */}
            <DialogActions sx={{ backgroundColor: '#004b9b', color: 'white' }}>
                <Button sx={{ color: '#fff' }} onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default PortfolioDetailsModal;