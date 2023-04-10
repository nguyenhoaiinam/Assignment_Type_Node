import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <section id="services" className="services">
            <div className="container">
                <h1 className="section-heading"><span>Our </span>Services</h1>
                <p>We provide high standar clean website for your business solutions</p>
                <div className="card-wrapper">
                    <div className="card">
                        <img src="./images/brush.svg" alt="" />
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/code.svg" alt="" />
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/bag.svg" alt="" />
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/desktop.svg" alt="" />
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/media.svg" alt="" />
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/phone.svg" alt="" />
                        <h2>Graphic Design</h2>
                        <p>There are many variations of passages of but the majority have suffered alteration in some
                            form.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Services;
