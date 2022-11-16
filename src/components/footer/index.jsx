import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom'

import img1 from '../../assets/images/background/bg-ft.png'
import img2 from '../../assets/images/background/bg-ft2.png'


function Footer(props) {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer id="footer">
            <div className="footer-main">
                {/* <img src={img1} alt="" className="bg1" /> */}
                {/* <img src={img2} alt="" className="bg2" /> */}
                <div className="container">
                    <ul className="widget-social">
                    <li>
                            <a target="_blank" href='https://twitter.com/skullverseNFT'>
                                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.173 4.01621C22.2015 3.3728 22.971 2.35967 23.338 1.16598C22.3715 1.76605 21.3141 2.18875 20.2115 2.41581C18.6828 0.723595 16.2607 0.311787 14.2986 1.41049C12.3365 2.5092 11.3202 4.84642 11.8176 7.11616C7.85881 6.90819 4.17053 4.95138 1.67052 1.73267C0.365817 4.08755 1.03255 7.09789 3.19419 8.61211C2.41252 8.58582 1.64818 8.36436 0.964911 7.96619C0.964911 7.9878 0.964911 8.00941 0.964911 8.03102C0.965363 10.484 2.6175 12.597 4.91519 13.0832C4.19015 13.2896 3.42963 13.32 2.69165 13.172C3.33783 15.2698 5.18545 16.7069 7.29133 16.7498C5.54718 18.1823 3.39322 18.9591 1.17602 18.9553C0.783024 18.9559 0.390336 18.9322 0 18.8845C2.25152 20.3985 4.87202 21.2021 7.54833 21.1992C11.2717 21.226 14.85 19.6899 17.4828 16.9347C20.1156 14.1795 21.5832 10.4349 21.5573 6.53868C21.5573 6.31536 21.5523 6.09325 21.5424 5.87234C22.5067 5.1431 23.3389 4.2397 24 3.20461C23.1017 3.62129 22.1487 3.89486 21.173 4.01621Z" fill="white"/>
                                </svg>                            
                            </a>
                        </li>
                   
                       
                        <li>
                            <a target="_blank" href="https://discord.gg/yZWb6cNwfY">
                                <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.4083 2.56088C22.9162 0.555449 18.9738 0.215503 18.805 0.203274C18.5434 0.181264 18.2939 0.328003 18.1863 0.570123C18.1765 0.584796 18.0909 0.782894 17.9955 1.09105C19.6439 1.36985 21.6689 1.92991 23.5007 3.06713C23.7942 3.24811 23.8847 3.63452 23.7037 3.928C23.5838 4.12121 23.3809 4.22637 23.1705 4.22637C23.058 4.22637 22.9431 4.19458 22.8404 4.13099C19.6904 2.17692 15.7578 2.07909 14.9996 2.07909C14.2415 2.07909 10.3064 2.17692 7.15885 4.13099C6.86537 4.31442 6.47896 4.22393 6.29798 3.93045C6.11456 3.63452 6.20504 3.25056 6.49852 3.06713C8.33032 1.93235 10.3553 1.36985 12.0037 1.09349C11.9083 0.782895 11.8227 0.587242 11.8154 0.570123C11.7053 0.328003 11.4583 0.176373 11.1942 0.203274C11.0254 0.215503 7.08303 0.555448 4.55668 2.58779C3.23847 3.80817 0.599609 10.9397 0.599609 17.1052C0.599609 17.2152 0.628957 17.3204 0.682762 17.4158C2.50233 20.6147 7.46945 21.4511 8.60178 21.4878C8.60668 21.4878 8.61401 21.4878 8.62135 21.4878C8.82189 21.4878 9.01021 21.3924 9.1276 21.231L10.2722 19.656C7.1833 18.8587 5.60586 17.5038 5.51537 17.4231C5.25613 17.1957 5.23167 16.7995 5.46157 16.5402C5.68901 16.281 6.08521 16.2565 6.34445 16.484C6.38113 16.5182 9.28657 18.9834 14.9996 18.9834C20.7224 18.9834 23.6279 16.5084 23.6572 16.484C23.9165 16.259 24.3102 16.281 24.5401 16.5427C24.7675 16.8019 24.7431 17.1957 24.4838 17.4231C24.3934 17.5038 22.8159 18.8587 19.7271 19.656L20.8716 21.231C20.989 21.3924 21.1773 21.4878 21.3779 21.4878C21.3852 21.4878 21.3925 21.4878 21.3974 21.4878C22.5298 21.4511 27.4969 20.6147 29.3165 17.4158C29.3703 17.3204 29.3996 17.2152 29.3996 17.1052C29.3996 10.9397 26.7607 3.80817 25.4083 2.56088ZM10.93 14.6008C9.71945 14.6008 8.73874 13.4807 8.73874 12.0965C8.73874 10.7122 9.71945 9.59213 10.93 9.59213C12.1406 9.59213 13.1213 10.7122 13.1213 12.0965C13.1213 13.4807 12.1406 14.6008 10.93 14.6008ZM19.0692 14.6008C17.8586 14.6008 16.8779 13.4807 16.8779 12.0965C16.8779 10.7122 17.8586 9.59213 19.0692 9.59213C20.2798 9.59213 21.2605 10.7122 21.2605 12.0965C21.2605 13.4807 20.2798 14.6008 19.0692 14.6008Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <h5 className="heading">don’t miss out, join now for early access</h5>
                    {/* <p>Maecenas sit pretium, cras in. In quisque sem id eget. In vel gravida ut </p> */}
                    <form action="#" id="subscribe-form">
                        <input type="email" placeholder="Enter your email address" required="" id="subscribe-email" />
                        <button className="tf-button-st2 btn-effect" type="submit" id="subscribe-button"> <span className="effect">Subscribe</span></button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="wrap-fx">
                        <div className="Copyright">
                            <p>SKULLVERSE 2022- ALL rights reserved</p>
                        </div>
                        <ul className="list">
                            <li>
                                <Link to="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to="#">Cookies</Link>
                            </li>
                            <li>
                                <Link to="#">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

            {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
        </footer>
    );
}

export default Footer;