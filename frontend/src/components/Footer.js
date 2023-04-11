import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
    
    <MDBFooter fluid className="text-center text-lg-start bg-secondary ">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/FabLankaFoundation/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/fab_lanka/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/fablanka/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                FabLanka
              </h6>
              <img
                src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
                width={100}
                height={100}
                alt="Fablanka logo"
              />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="/" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/about" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Our Plan
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Technology
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/about" className="text-reset">
                  Our Team
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Constact Us
                </a>
              </p>
              <p>
                <a href="industrytec" className="text-reset">
                  Industry 4.0 Technologies
                </a>
              </p>
              {/* <p>
                <a href="#!" className="text-reset">
                  Projects
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                NO.19 Public Library complex, Makadura, Gonavila.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                fablabmakandura@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +94 31 2297029
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +94 31 2297029
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          FabLanka
        </a>
      </div>
    </MDBFooter>
    </>
  );
};
export default Footer;
