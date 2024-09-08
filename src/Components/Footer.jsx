const Footer = () => {
  return (
    <>
      <div className="footer-top p-6  items-center justify-between bg-black bg-opacity-60">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="footer-logo items-center justify-between">
                  <img src="./src/assets/image/logo-white-text.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore{" "}
                    <br /> magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation.
                  </p>
                  <div className="widget-icon">
                    <a href="#">
                      <i className="fa fa-facebook"> </i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-vimeo-square"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer p-6  items-center justify-between bg-black bg-opacity-60">
        <aside>
          <img src="./src/assets/image/logo P.jpeg" alt="Pabna" width={50} />
          <p>
            Padna Industries Ltd.
            <br />
            Providing reliable since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="footer-bottom-area items-center justify-between bg-black p-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="copyright">
                <p>
                  Copyright ©{" "}
                  <a className="text-red-800" href="#">
                    BasicTheme
                  </a>
                  . All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="payment-img">
                <img src="./src/assets/image/payment.png" alt="payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
