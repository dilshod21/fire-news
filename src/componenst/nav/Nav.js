import { Link } from 'react-router-dom';
import logo from "../../imgs/logo.png";
import './nav.css';

function Nav() {
    return (
        <nav className="nav">
            <div className="d-container nav-in">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>

                <ul className="links-parent">
                    <Link className="li" to="/">Bosh sahifa</Link>
                    <Link className="li" to="iqtisod">Iqtisodiyot</Link>
                    <Link className="li" to="jamiyat">Jamiyat</Link>
                    <Link className="li" to="sport">Sport</Link>
                    <Link className="li" to="texno">Texnologiya</Link>
                </ul>

                <ul className="links-parent">
                    <li>
                        <i className="bi bi-search"></i>
                    </li>
                    <li>
                        <select name="" id="">
                            <option value="">UZB</option>
                            <option value="">ENG</option>
                            <option value="">RUS</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;