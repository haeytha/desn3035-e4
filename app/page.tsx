import React from "react";

export default function Page() {
    return <>

        <div className="container py-4">
            <div className="row">

                <div className="col-12 mb-4">
                    <h1>Elevate Your Coffee Experience</h1>
                    <p className="small m-0">
                        Dive into the world of artisanal coffee roasting
                    </p>
                </div>

                <div className="col-3">
                    <div className="list-group">
                        <a href="home.html" className="list-group-item list-group-item-action">
                            Home
                        </a>
                        <a href="about.html" className="list-group-item list-group-item-action">
                            About Us
                        </a>
                        <a href="contact.html" className="list-group-item list-group-item-action">
                            Contact Us
                        </a>
                    </div>
                    <p className="small text-danger text-center mt-3 text-warning">
                        Coffee: the magic potion that turns morning mayhem into midday clarity.
                    </p>
                </div>

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Welcome</h1>
                    <p>
                        Explore our meticulously sourced beans, learn about our roasting process, and discover unique flavor profiles. Join us on a journey from farm to cup, and experience the true essence of coffee like never before!
                    </p>
                </div>

            </div>
        </div>
</>
  }