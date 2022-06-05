import React from "react";
import Image from "../assets/Contact.jpg";
const Contact = () => {
    return (
        <section id="contact">
            <div className="container my-5 py-5 ">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                        <h2 className="display-6 text-center mb-4">
                            Have Some <b>Question?</b>
                        </h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={Image} alt="Contact" className="w-75" />
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div class="mb-3">
                                <label
                                    for="name"
                                    class="form-label">
                                    Your Name
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="name"
                                    placeholder="John Smith"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlInput1"
                                    class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleFormControlTextarea1"
                                    class="form-label">
                                    Your Message
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="5"></textarea>
                            </div>
                            <button className="btn btn-outline-primary rounded-pill px-4">Send Massage <i className="fa fa-paper-plane ms-2 "></i>  </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
