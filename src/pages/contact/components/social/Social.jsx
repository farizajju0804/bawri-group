import "./Social.css";

const Social = () => {
  return (
    <div className="social-parent-container">
      <div className="connected-parent">
        <p className="connected-title">Stay Connected</p>
        <div className="circle">
          <p className="circle-text">
            "Lorem ipsum dolor sit amet consectetur. Sed nec facilisis at."
          </p>
          <div className="social-icons">
            <div className="social-icon-parent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="17.5"
                  fill="url(#paint0_linear_239_73)"
                />
                <path
                  d="M26.5171 25.3519L27.2945 20.4126H22.4315V17.2087C22.4315 15.8571 23.1096 14.5388 25.2877 14.5388H27.5V10.3337C27.5 10.3337 25.4931 10 23.5753 10C19.5685 10 16.9521 12.3662 16.9521 16.6481V20.4126H12.5V25.3519H16.9521V37.2931C17.8459 37.4299 18.7603 37.5 19.6918 37.5C20.6233 37.5 21.5377 37.4299 22.4315 37.2931V25.3519H26.5171Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_239_73"
                    x1="20"
                    y1="2.5"
                    x2="20"
                    y2="37.3962"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18ACFE" />
                    <stop offset="1" stopColor="#0163E0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="social-icon-parent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M14.7359 35C10.6922 35 6.92272 33.8239 3.75 31.7945C6.44374 31.9688 11.1976 31.5514 14.1545 28.731C9.70635 28.5269 7.70033 25.1154 7.43867 23.6575C7.81662 23.8032 9.61913 23.9782 10.6367 23.57C5.51987 22.287 4.73491 17.7967 4.90935 16.4262C5.86875 17.0969 7.49682 17.3301 8.13642 17.2718C3.36849 13.8603 5.08378 8.72845 5.92689 7.62044C9.34853 12.3608 14.4765 15.0232 20.8205 15.1713C20.7009 14.6467 20.6377 14.1005 20.6377 13.5396C20.6377 9.51365 23.8918 6.25 27.9059 6.25C30.0032 6.25 31.893 7.14094 33.2196 8.56605C34.6211 8.23763 36.7304 7.46883 37.7615 6.80401C37.2418 8.67013 35.6237 10.2269 34.6449 10.8038C34.6369 10.7841 34.653 10.8235 34.6449 10.8038C35.5047 10.6738 37.831 10.2267 38.75 9.60319C38.2955 10.6516 36.58 12.3947 35.1721 13.3705C35.4341 24.9226 26.5956 35 14.7359 35Z"
                  fill="#47ACDF"
                />
              </svg>
            </div>
            <div className="social-icon-parent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="social-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect
                  x="2.5"
                  y="2.5"
                  width="35"
                  height="35"
                  rx="6"
                  fill="url(#paint0_radial_239_79)"
                />
                <rect
                  x="2.5"
                  y="2.5"
                  width="35"
                  height="35"
                  rx="6"
                  fill="url(#paint1_radial_239_79)"
                />
                <rect
                  x="2.5"
                  y="2.5"
                  width="35"
                  height="35"
                  rx="6"
                  fill="url(#paint2_radial_239_79)"
                />
                <path
                  d="M28.75 13.125C28.75 14.1605 27.9105 15 26.875 15C25.8395 15 25 14.1605 25 13.125C25 12.0895 25.8395 11.25 26.875 11.25C27.9105 11.25 28.75 12.0895 28.75 13.125Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 26.25C23.4518 26.25 26.25 23.4518 26.25 20C26.25 16.5482 23.4518 13.75 20 13.75C16.5482 13.75 13.75 16.5482 13.75 20C13.75 23.4518 16.5482 26.25 20 26.25ZM20 23.75C22.0711 23.75 23.75 22.0711 23.75 20C23.75 17.9289 22.0711 16.25 20 16.25C17.9289 16.25 16.25 17.9289 16.25 20C16.25 22.0711 17.9289 23.75 20 23.75Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5 19.5C7.5 15.2996 7.5 13.1994 8.31745 11.5951C9.0365 10.1839 10.1839 9.0365 11.5951 8.31745C13.1994 7.5 15.2996 7.5 19.5 7.5H20.5C24.7004 7.5 26.8006 7.5 28.4049 8.31745C29.8161 9.0365 30.9635 10.1839 31.6825 11.5951C32.5 13.1994 32.5 15.2996 32.5 19.5V20.5C32.5 24.7004 32.5 26.8006 31.6825 28.4049C30.9635 29.8161 29.8161 30.9635 28.4049 31.6825C26.8006 32.5 24.7004 32.5 20.5 32.5H19.5C15.2996 32.5 13.1994 32.5 11.5951 31.6825C10.1839 30.9635 9.0365 29.8161 8.31745 28.4049C7.5 26.8006 7.5 24.7004 7.5 20.5V19.5ZM19.5 10H20.5C22.6414 10 24.0972 10.0019 25.2224 10.0939C26.3184 10.1834 26.879 10.3457 27.27 10.545C28.2108 11.0243 28.9757 11.7892 29.455 12.73C29.6543 13.121 29.8166 13.6816 29.9061 14.7776C29.9981 15.9028 30 17.3586 30 19.5V20.5C30 22.6414 29.9981 24.0972 29.9061 25.2224C29.8166 26.3184 29.6543 26.879 29.455 27.27C28.9757 28.2108 28.2108 28.9757 27.27 29.455C26.879 29.6543 26.3184 29.8166 25.2224 29.9061C24.0972 29.9981 22.6414 30 20.5 30H19.5C17.3586 30 15.9028 29.9981 14.7776 29.9061C13.6816 29.8166 13.121 29.6543 12.73 29.455C11.7892 28.9757 11.0243 28.2108 10.545 27.27C10.3457 26.879 10.1834 26.3184 10.0939 25.2224C10.0019 24.0972 10 22.6414 10 20.5V19.5C10 17.3586 10.0019 15.9028 10.0939 14.7776C10.1834 13.6816 10.3457 13.121 10.545 12.73C11.0243 11.7892 11.7892 11.0243 12.73 10.545C13.121 10.3457 13.6816 10.1834 14.7776 10.0939C15.9028 10.0019 17.3586 10 19.5 10Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_239_79"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15 28.75) rotate(-55.3758) scale(31.8995)"
                  >
                    <stop stopColor="#B13589" />
                    <stop offset="0.79309" stopColor="#C62F94" />
                    <stop offset="1" stopColor="#8A3AC8" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_239_79"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.75 38.75) rotate(-65.1363) scale(28.2428)"
                  >
                    <stop stopColor="#E0E8B7" />
                    <stop offset="0.444662" stopColor="#FB8A2E" />
                    <stop offset="0.71474" stopColor="#E2425C" />
                    <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_239_79"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.625002 3.75) rotate(-8.1301) scale(48.6136 10.3979)"
                  >
                    <stop offset="0.156701" stopColor="#406ADC" />
                    <stop offset="0.467799" stopColor="#6A45BE" />
                    <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="yellow-semicircle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FDDB60"
            fillOpacity="1"
            d="M0,32L120,64C240,96,480,160,720,160C960,160,1200,96,1320,64L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="subscribe-parent-container">
        <div className="subscribe-container">
          <p className="subscribe-info">Subscribe To Our Newsletter</p>
          <div className="subscribe-input-container">
            <input
              type="text"
              className="subscribe-input"
              placeholder="E-mail"
            />
            <button className="subscribe-button">Subscribe Now</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Social;
