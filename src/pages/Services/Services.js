import React from 'react';
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import MarketingImg from "../../img/MarketingImg.png"
import SEOPhoto from  "../../img/SEO-img.png"
import SocialMedia from  "../../img/social-media-marketing.png"
import EmailMarketing from  "../../img/Email-Marketing-removebg-preview.png"

const Services = () => {
    AOS.init();
    return (
        <div id="services"
            className='container'
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">

            <div className=' mb-10'>
                <h1 className=' pt-32 ' data-aos="zoom-out-down">what can i do</h1>
            </div>
            <div >
                <div >
                    <div className="flex justify-center h-72">
                        <img data-aos="flip-right"
                             data-aos-duration="3000"
                             src={MarketingImg} alt=""/>
                    </div>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-4  ' style={{
                    margin: '0px', padding: '20px' +
                        ' 10px'
                }}>

                    <div className='my-2 container border rounded' data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000"
                         data-aos-anchor-placement="top-bottom">
                        <div className=' p-3'>
                            <div className='col-12'>
                                <img className='services-img img-fluid ' src={SEOPhoto} alt=""/>
                            </div>
                            <div className='col-12'>
                                <div>
                                    <h1 className='font-bold text-3xl text-purple-300 py-3 '>Search engine
                                        Optimization</h1>
                                </div>
                                <div>
                                    <p>Keyword Research,One page SEO, Off page SEO,Website Backlink,Content SEO. </p>
                                    <p>
                                        Master digital success with our concise services: Keyword Research, One Page
                                        SEO, Off-Page SEO, Website Backlink, and Content SEO. Elevate your online
                                        presence with targeted strategies tailored to optimize your website's
                                        performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='my-2 container border rounded' data-aos="flip-right"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000">
                        <div>
                            <div className=' '>
                                <img className='services-img img-fluid ' src={SocialMedia} alt=""/>
                            </div>
                            <div>
                                <div>
                                    <h1 className='font-bold text-3xl text-green-300 py-3 '>Social meida Markeding &
                                        promotion </h1>
                                </div>
                                <div>
                                    <p>Facebook Marketing,Instagram Marketing,Twitter Marketing,Linkdin
                                        Marketing,Qware. </p>
                                    <p>Supercharge your brand with our Social Media Marketing & Promotion services!
                                        Elevate your online presence, engage your audience, and drive results. From
                                        strategic campaigns to compelling content, we'll boost your brand visibility
                                        across social platforms. Let's amplify your reach and impact together.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-2 container border rounded' data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000">
                        <div className=" p-3">
                            <div className=''>
                                <img className='services-img img-fluid' src={EmailMarketing} alt=""/>
                            </div>
                            <div>
                                <div>
                                    <h1 className='font-bold text-3xl text-yellow-300'>Email Marketing</h1>
                                </div>
                                <div>
                                    <p>Niche Location targeted email collection, MailChimp Email collection, Check
                                        collected valid email,Email template create and send, Klaviyo email marketing
                                        , </p>
                                    <p>Elevate your marketing game with our Email Marketing solutions. Drive engagement,
                                        nurture leads, and boost conversions through targeted campaigns. From
                                        captivating content to strategic automation, we optimize your email outreach for
                                        maximum impact. Let's build meaningful connections and drive results
                                        together. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="flip-left"
                         data-aos-easing="ease-out-cubic"
                         data-aos-duration="2000">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;