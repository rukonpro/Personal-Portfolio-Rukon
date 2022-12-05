import React from 'react';
import NotFoundImg from "./img/output-onlinegiftools.gif";
import "./NotfoundPage.css";
const NotFoundPage = () => {
    return (
        <div className='text-red-500 defaultBg' style={{ height: "70vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <div>
                <img src={NotFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;