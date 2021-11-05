import React from 'react';

const Counters = () => {
    return (
        <section className="site-section section-counters text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="01" data-speed="2000">0</p>
                        <h4>Years Experience</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="20" data-speed="2000">0</p>
                        <span className="counter-plus">+</span>
                        <h4>Completed Projects</h4>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <p className="counter start" data-to="360" data-speed="2000">0</p>
                        <span className="counter-plus">+</span>
                        <h4>GitHub Contributions in the last year</h4>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Counters;