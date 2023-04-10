import React from "react";
import {FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
        <section id="about" className="about">
            <div className="container flex items-center about-inner-wrap">
                <div className="flex-1">
                    <img className="about-me-img" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000" alt="" />
                </div>
                <div className="flex-1 right">
                    <h1>About <span>Me</span></h1>
                    <h3>Hello! i’m Hoai Nam.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                        labore et
                        dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.

                        Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat</p>
                    <div className="social">
                        <a href=""><FacebookOutlined /></a>
                        <a href=""><InstagramOutlined /></a>
                        <a href=""><LinkedinOutlined /></a>
                        <a href=""><GithubOutlined /></a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default AboutPage;
