import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start" style={{backgroundColor: "#929fba"}}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">MARGSHALA</h6>
                <p>
                Decisions made at a young age often define the trajectory of our lives. If you are a youth from Uttarakhand who has been thinking of starting your own business, Margshala is just the program for you!
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a href="#!" className="text-dark">Find your interest</a></p>
                <p><a href="#!" className="text-dark">Khojshala</a></p>
                <p><a href="#!" className="text-dark">Swarojgaar</a></p>
                <p><a href="#!" className="text-dark"></a>Fellowship</p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Delhi, India</p>
                <p><i className="fas fa-envelope mr-3"></i>info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                <div className="social-icons">
                  <a href="#!" className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} role="button"><i className="fab fa-facebook-f"></i></a>
                  <a href="#!" className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} role="button"><i className="fab fa-twitter"></i></a>
                  <a href="#!" className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} role="button"><i className="fab fa-google"></i></a>
                  <a href="#!" className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} role="button"><i className="fab fa-instagram"></i></a>
                  <a href="#!" className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} role="button"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#!" className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} role="button"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center p-3 footer-bottom">
          © 2020 Copyright: <a className="text-dark" href="https://margshala.com/en/homepage/">margshala.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
