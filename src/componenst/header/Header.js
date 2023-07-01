import './header.css'
import headerImg from "../../imgs/header.png";

function Header() {
    return (
        <div className="header full-widht">
            <img src={headerImg} alt="" className="full-width"/>
        </div>
    );
}

export default Header;