import React from 'react';
import './Counter.css'
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
const Counters = () => {

    useCountUp({ ref: 'counter', end: 10, duration: 2 });

    return (
        <div className="counter">
            {<div className="container ">

                <div className="row flex justify-center">
                    <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12">
                        <div className="employees">
                            <p className="counter-count">
                                <CountUp
                                    start={100}
                                    end={1}
                                    duration={5}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                            </p>
                            <p className="employee-p">Years Experience</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="customer">
                            <p className="counter-count">
                                <CountUp
                                    start={0}
                                    end={20}
                                    duration={5}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                            </p>
                            <p className="customer-p">Completed Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <div className="design">
                            <p className="counter-count">
                                <CountUp
                                    start={0}
                                    end={98}
                                    duration={5}
                                >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+
                            </p>





                            <p className="design-p">GitHub Contributions in the last year</p>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>


    );
};

export default Counters;