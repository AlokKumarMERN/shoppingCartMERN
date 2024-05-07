import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-success-subtle text-center pt-3">
        <div className="container p-3">
          <div className="row  justify-content-center row-cols-2 row-cols-md-4 row-cols-sm-4 row-cols-lg-5 g-3">
            
            <div className="col">
              <h6>CUSTOMER POLICY</h6>
              <div>
                <p className="lh-1">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Return
                  </a>
                </p>
                <p className="lh-1">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Private policy
                  </a>
                </p>
                <p className="lh-1">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Track order
                  </a>
                </p>
              </div>
            </div>

            <div className="col">
              <h6>USEFUL LINKS</h6>
              <div>
                <p className="lh-1">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Blog
                  </a>
                </p>
                <p className="lh-1">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Site map
                  </a>
                </p>
                <p className="lh-1">
                  <a
                    href="#"
                    className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Location
                  </a>
                </p>
              </div>
            </div>

            <div className="col">
              <h6>USEFUL LINKS</h6>
              <p className="lh-1">
                <a
                  href="#"
                  className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Blog
                </a>
              </p>
              <p className="lh-1">
                <a
                  href="#"
                  className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Site map
                </a>
              </p>
              <p className="lh-1">
                <a
                  href="#"
                  className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Location
                </a>
              </p>
            </div>

            <div className="col">
              <h6>KEEP IN TUOCH</h6>

              <div className="footericon">
                <a
                  className="p-1 fs-2"
                  href="https://www.facebook.com/profile.php?id=100034366534250"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} className="setColor" />
                </a>

                <a
                  className="p-1 fs-2"
                  href="https://instagram.com/alokkumar6189?igshid=NGExMmI2YTkyZg=="
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} className="setColor" />
                </a>


                <a
                  className="p-1 fs-2"
                  href="https://wa.me/message/RCBLLWUNJ4XPD1"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="setColor" />
                </a>

                <br />
                <a
                  className="p-1 fs-2"
                  href="https://wa.me/message/RCBLLWUNJ4XPD1"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="setColor" />
                </a>

                <a
                  className="p-1 fs-2"
                  href="https://wa.me/message/RCBLLWUNJ4XPD1"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} className="setColor" />
                </a>
              </div>
            </div>

            <div className="col">
              <h6>REGISTORED OFFICE ADDRESS</h6>
              <p>Please visit in our official address Which is located in Gopalganj Bihar</p>
              {/* <div className="input-group mb-3">
                <Form className="w-100">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Please Enter your email"
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <textarea
                      className="form-control"
                      placeholder="Your Feedback..... "
                      aria-label="With textarea"
                    ></textarea>
                  </Form.Group>
                  <Button variant="outline-dark">Submit</Button>
                </Form> */}
              {/* </div> */}
            </div>
          </div>
            <p className="text-center">@copyright-2024/2025</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
