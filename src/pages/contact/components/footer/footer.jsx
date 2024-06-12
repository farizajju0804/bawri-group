import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent-container">
      <div className="footer-content-div">
        <div className="footer-links-div">
          <div className="footer-links-left-div">
            <a className="footer-link" href="#">
              Our Companies
            </a>
            <a className="footer-link" href="#">
              Our Story
            </a>
            <a className="footer-link" href="#">
              About Us
            </a>
            <a className="footer-link" href="#">
              Contact Us
            </a>
          </div>
          <div className="footer-links-right-div">
            <a className="footer-link" href="#">
              Terms of Service
            </a>
            <a className="footer-link" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
        <hr className="hr"/>
        <div className="footer-company-container">
          <p className="footer-name">Bawri Group</p>
          <p className="footer-copyright">© 2023 Bawri Group. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
