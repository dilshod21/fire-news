import {Link} from 'react-router-dom';
import logo from "../../imgs/logo.png";

function Footer() {
    return (
        <>
            <button className="more">
                <i className="bi bi-arrow-clockwise"></i>
                Ko'proq yangilik
            </button>

            <div className="email-box m-auto">
                <p className="text-center">
                    Eng so'nggi yangiliklar, mashhur yangiliklar
                    va eksklyuziv yangiliklarni olish uchun bizning
                    axborot byulletenimizga obuna bo'ling.
                </p>
                <br/><br/>
                <div className="d-f">
                    <input type="email" placeholder="Elektron pochtangizni kiriting"/>
                    <button type="submit">Yuborish</button>
                </div>
            </div>

            <div className="footer mt-5">
                <div className="d-container">
                    <div className="footer-row">
                        <div className="footer-one">

                            <div className="footer-one-child">
                                <div className="footer-logo">
                                    <img src={logo} alt="" className="logotip"/>
                                </div>
                                <p className="footer-p">
                                    FIRE.news Web-Site OAV sifatida 2029 yil
                                    26 oktyabr kuni Administratsiyasi huzuridagi
                                    Axborot va om maviy kommunikatsiyalar
                                    agentligidan raqam bilan ro‘yxatga olingan.
                                </p>
                                <br/>
                                <p className="footer-p y-center">
                          <span className="footer-icon">
                              <i className="bi bi-house-door"></i>
                          </span>
                                    15 Cliff St, New York NY 10038, USA
                                </p>
                                <p  className="footer-p2 y-center">
                          <span className="footer-icon">
                              <i className="bi bi-telephone-fill"></i>
                          </span>
                                    +91 234 567 8765
                                </p>
                                <p className="footer-p">
                              <span className="footer-icon">
                                  <i className="bi bi-envelope-open"></i>
                              </span>
                                    FireNews@gmail.com
                                </p>
                            </div>

                            <div className="footer-one-child">
                                <br/><br/>
                                <Link to="/aloqa" className="footer-p2">
                                    Aloqa
                                </Link>
                                <p className="footer-p">
                                    Reklama
                                </p>
                                <p className="footer-p">
                                    FireNews jamosi
                                </p>
                            </div>

                        </div>

                        <div className="footer-end">
                            <div className="footer-end-box">
                                <div className="messenger-buttons d-f">
                                    <button className="circle-button">
                                        <i className="bi bi-telegram"></i>
                                    </button>
                                    <button className="circle-button">
                                        <i className="bi bi-twitter"></i>
                                    </button>
                                    <button className="circle-button">
                                        <i className="bi bi-instagram"></i>
                                    </button>
                                    <button className="circle-button">
                                        <i className="bi bi-facebook"></i>
                                    </button>
                                </div>

                                <div className="download-box ">
                                    <div className="downloaders">
                                        <button className="downloading">
                                            <i className="bi bi-google-play"></i>
                                            GooglePlay
                                        </button>
                                        <button className="downloading">
                                            <i className="bi bi-apple"></i>
                                            AppStore
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;