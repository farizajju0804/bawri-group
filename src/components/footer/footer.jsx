import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent-container">
      <div className="footer-content-div">
        <div className="footer-links-div">
          <div className="footer-links-left-div poppins-regular">
            {/* <a className="footer-link" href="/profit">
              Our Companies
            </a> */}
            <a className="footer-link" href="/our-story">
              Our Story
            </a>
            <a className="footer-link" href="/about">
              About Us
            </a>
            <a className="footer-link" href="/contact">
              Contact Us
            </a>
          </div>
          <div className="footer-links-right-div">
            <a className="footer-link" href="/terms">
              Legal Disclaimer
            </a>
            <a className="footer-link" href="/privacy">
              Privacy Policy
            </a>
          </div>
        </div>
        <hr className="hr"/>
        <div className="footer-company-container poppins-regular">
        <a className="footer-link" href="/">
          <p className="footer-name">Bawri Group</p>
          </a>
          <p className="footer-copyright poppins-regular">© 2024 Bawri Group. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
