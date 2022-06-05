import React from "react";
import Image from "../assets/about.jpg";

const About = (props) => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={Image}
                                alt="about"
                                className="w-75 mt-5"
                            />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About-us</h3>
                            <h2 className="display-6 mb-2">
                                Who <b>We</b> Are
                            </h2>
                            <hr className="w-50" />
                            <p className="lead mb-4">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Alias saepe est officiis ea,
                                tenetur facere laboriosam necessitatibus
                                asperiores odio minima fugiat perspiciatis,
                                corrupti laborum qui esse aliquam totam
                                molestiae? Facere repellendus unde, adipisci
                                quia rerum asperiores. Nisi assumenda magni
                                blanditiis voluptas voluptatem consectetur
                                possimus obcaecati debitis optio, minus dolore
                                quis!
                            </p>
                            <button className="btn btn-primary rounded-pill px-4 py-2"> Get  Started</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2"> Get  Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
