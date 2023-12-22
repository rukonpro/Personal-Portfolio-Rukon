import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AOS from 'aos';
import Portfolio from './Portfolio';
import 'aos/dist/aos.css';
import  ContentSEO from  "../../img/content-SEO.png"
import  YoutubePromotion from  "../../img/You-tube-marketing-or-promotion.jpg"
import  FacebookAdsCampaign from  "../../img/facebook-ads-campaign.jpg"
import  TargetedValidEmail from  "../../img/Targeted-valid-email.jpeg"
import  FacebookOrganic from  "../../img/Facebook-organic-follow.jpg"
import  YoutubeSEO from  "../../img/Youtube SEO jpg"
import  Upwork from  "../../img/Upwork.png"
import  Fiver from  "../../img/fiverr-300x158.png"
import  SEOClerks from  "../../img/Seoclerks-1.png"
const Portfolios = () => {
    AOS.init();
    const portfolios = [
        {
            id: 0,
            img_1:ContentSEO,
            img_2:ContentSEO,
            img_3:ContentSEO,
            title: 'Website content SEO',
            description: "Boost your online presence with our SEO-optimized website content services.",
            list1: 'Elevate your brand with engaging and keyword-rich content that attracts and retains visitors. ',
            list2: 'Our expert writers craft compelling narratives tailored to enhance your search engine rankings.',
            list3: 'Drive traffic, build credibility, and achieve digital success with our top-notch SEO content solutions.',
            aos: 'flip-right'
        },
        {
            id: 1,
            img_1: YoutubePromotion,
            img_2: YoutubePromotion,
            img_3: YoutubePromotion,
            title: 'Youtube Promotion',
            description: "🚀 Elevate your online experience! Explore captivating content on our YouTube channel.",
            list1: 'From informative tutorials to entertaining vlogs, we\'ve got it all.',
            list2: 'Subscribe now for a front-row seat to creativity, knowledge, and fun! 🌟 Don\'t miss out – join our community today! 🔔 #Subscribe #YouTubeJourney',
            aos: 'flip-right'
        },

        {
            id: 2,
            img_1: FacebookAdsCampaign,
            img_2: FacebookAdsCampaign,
            img_3: FacebookAdsCampaign,
            title: 'Facebook Ads Campaign',
            description: "Create targeted Facebook Ads to boost your brand. ",
            list1: 'Define your audience, set a budget, and craft compelling ad copy and visuals. ',
            list2: 'Monitor performance with analytics, optimize for results, and refine based on insights. ',
            list3: ' Maximize reach, engagement, and conversions with strategic Facebook Ads campaigns. Boost your business today!',
            aos: 'flip-left'
        },

        {
            id: 3,
            img_1: TargetedValidEmail,
            img_2: TargetedValidEmail,
            img_3: TargetedValidEmail,
            title: 'Targeted Valid Email',
            description: "Create targeted and valid email lists for effective outreach with our specialized service.",
            list1: 'Create targeted and valid email lists for effective outreach with our specialized service. We meticulously curate email addresses based on your criteria, ensuring precision in targeting your audience. ',
            list2: 'Maximize engagement and elevate your communication strategy with verified contacts, tailored to meet your specific business objectives.',
            aos: 'flip-left'
        },
        {
            id: 4,
            img_1: FacebookOrganic,
            img_2: FacebookOrganic,
            img_3: FacebookOrganic,
            title: 'Facebook Organic follower ',
            description: "Facebook organic followers are users who voluntarily choose to follow a profile without any paid promotions or advertising.",
            list1: 'Facebook organic followers are users who voluntarily choose to follow a profile without any paid promotions or advertising. ',
            list2: 'These followers are attracted to the content and engagement of a page, building a genuine and unpaid audience. ',
            list3: 'Organic growth relies on compelling posts and interactions to naturally attract and retain followers.',
            aos: 'flip-left'
        },
        {
            id: 5,
            img_1: YoutubeSEO,
            img_2: YoutubeSEO,
            img_3: YoutubeSEO,
            title: 'Youtube SEO',
            description: "Unlock the secrets of effective YouTube SEO with our expert guide! Learn key strategies to boost visibility and engagement. ",
            list1: 'Unlock the secrets of effective YouTube SEO with our expert guide! Learn key strategies to boost visibility and engagement. ',
            list2: 'From optimizing titles to leveraging tags, we have got you covered. Stay ahead in the YouTube' +
                ' game and maximize your videos reach.',
            list3: 'Watch now for essential tips and take your content to new heights! 🚀 #YouTubeSEO #VideoMarketing #OptimizationTips',
            aos: 'flip-right'
        },

    ];


    return (
        <Box id="portfolio" className="portfolio-Container  " sx={{ pt: 10 }}>


            <Container className='' sx={{ py: 10 }}>
                <h1 className='pb-3' data-aos="zoom-out-down">
                    Portfolio
                </h1>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3, }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            portfolios.map(portfolio => <Portfolio key={portfolio.id} portfolio={portfolio}></Portfolio>)
                        }

                    </Grid>
                </Box>


                <div className="mt-4">
                    <h1 className="text-4xl py-3 text-center">Market place</h1>
                    <div className="flex justify-between gap-4 ">

                        <div>
                            <a href="https://www.upwork.com/freelancers/~01da8db4825831adc8">
                                <img className="w-full" src={Upwork} alt=""/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.fiverr.com/pro_mehedi25">
                                <img className="w-full" src={Fiver} alt=""/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.seoclerk.com/user/Promehedi25">
                                <img className="w-full" src={SEOClerks} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>


        </Box>
    );
};

export default Portfolios;