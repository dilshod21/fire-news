import './form.css';
import Footer from "../footer/Footer";
import {useState} from "react";


function Form( {} ) {
    return (
        <div>
            <div className="container">

                <h2 className="my-5">Taxririyat bilan bog'lanish</h2>

                <div className="row">
                    <div className="col-lg-4 d-f">
                        <button className="circle">
                            <i className="bi bi-buildings"></i>
                        </button>
                        <span className="circle-text">
                            <h4>Taxririyat manzili</h4>
                            <p className="text-muted">15 Cliff St, New York NY 10038,USA</p>
                        </span>
                    </div>

                    <div className="col-lg-4 d-f">
                        <button className="circle">
                            <i className="bi bi-envelope-at"></i>
                        </button>
                        <span className="circle-text">
                            <h4>Elektron manzil</h4>
                            <p className="text-muted">FireNews@gmail.com</p>
                        </span>
                    </div>

                    <div className="col-lg-4 d-f">
                        <button className="circle">
                            <i className="bi bi-headset"></i>
                        </button>
                        <span className="circle-text text-red">
                            <h4>Telefon</h4>
                            <a href="tel:998912345678765" className="text-red">+91 234 567 8765</a>
                        </span>
                    </div>

                </div>

                <form action="" className="row my-5">
                    <div className="col-xl-4">
                        <h4>Ism</h4>
                        <input className="mt-3 my-input" type="text" placeholder="   ismingiz"/>
                    </div>

                    <div className="col-xl-4">
                        <h4>Pochta</h4>
                        <input className="mt-3 full-width my-input" type="text" placeholder="   E-pochta manzilini kraiting"/>
                    </div>

                    <div className="col-xl-4">
                        <h4>Telefon raqam</h4>
                        <input className="mt-3 my-input" type="number" placeholder="   Telefon raqamingizni kiriting"/>
                    </div>

                    <div className="col-12">
                        <h4 className="mt-5">Xabar</h4>
                        <textarea name="commit" cols="50" rows="10" className="for-commits mt-3"></textarea>
                    </div>

                    <button className="submiter">
                        <span className="submiter-text">Yuborish</span>
                        <i className="bi bi-send-fill"></i>
                    </button>

                    <button className="submiter background-red">
                        <span className="submiter-text">Yuborish</span>
                        <i className="bi bi-send-fill"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Form;