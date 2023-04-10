import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div>
      <section id="blog" className="blog">
            <div className="container">
                <h1 className="section-heading"><span>Our</span> Blog</h1>
                <p>We provide high standar clean website for your business solutions</p>

                <div className="card-wrapper">
                    <div className="card">
                        <div className="img-wrapper">
                            <img src="./images/article-ph-1.png" alt="" />
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Occusamus et iusto odio</h1>
                            </a>
                            <span>May 12, 2017</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-wrapper">
                            <img src="./images/article-ph-1.png" alt="" />
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Occusamus et iusto odio</h1>
                            </a>
                            <span>May 12, 2017</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-wrapper">
                            <img src="./images/article-ph-1.png" alt="" />
                        </div>
                        <div className="card-content">
                            <a href="#">
                                <h1>Occusamus et iusto odio</h1>
                            </a>
                            <span>May 12, 2017</span>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt
                                mollit anim id est laborum.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Blog;
