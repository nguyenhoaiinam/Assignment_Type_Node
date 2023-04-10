import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div>
            <header>
                <div className="container">
                    <nav id="main-nav" className="flex items-center justify-between">
                        <div className="left flex items-center">
                            <div className="branding">
                                <img src="assets/img/testimonial-2.jpg" />
                            </div>
                            <div>
                                <a href="#">Home</a>
                                <a href="#about">About</a>
                                <a href="#services">Services</a>
                                <a href="#work">Work</a>
                                <a href="#blog">Blog</a>
                            </div>
                        </div>
                        <div className="right">
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </nav>
                    <div className="hero flex items-center justify-between">
                        <div className="left flex-1 flex justify-center">
                            <img src="./images/man.png" alt="" />
                        </div>
                        <div className="right flex-1">
                            <h6>Johnathan Vics</h6>
                            <h1>I’m a Web <span>Designer</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco
                                laboris
                                nisi ut aliquip ex ea commodo consequat</p>
                            <div>
                                <button className="btn btn-secondary">DOWNLOAD CV</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
