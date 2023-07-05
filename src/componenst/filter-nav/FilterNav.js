import { Link, } from 'react-router-dom';
import './filterNav.css';

function FilterNav() {
    return (
        <div className="bottom-nav">

            <div className="bottom-nav-row">
                <Link className="link  border-right" to="/olovli">
                    <div className="bottom-nav-button text-center">
                        <p className="text-center">
                            <i className="bi bi-fire"></i>
                        </p>
                        <p className="text-center">
                            Olovli yangiliklar
                        </p>
                    </div>
                </Link>

                <Link className="link border-right" to="/eng">
                    <div className="bottom-nav-button text-center">
                        <p className="text-center">
                            <i className="bi bi-heart-fill"></i>
                        </p>
                        <p className="text-center">
                            Eng mashhur
                        </p>
                    </div>
                </Link>

                <Link className="link border-right" to="/trend">
                    <div className="bottom-nav-button text-center">
                        <p className="text-center">
                            <i className="bi bi-lightning-fill"></i>
                        </p>
                        <p className="text-center">
                            Trend yangiliklar
                        </p>
                    </div>
                </Link>

                <Link className="link" to="/views">
                    <div className="bottom-nav-button text-center text-red">
                        <p className="text-center">
                            <i className="bi bi-eye-fill"></i>
                        </p>
                        <p className="text-center">
                            Eng ko'p tomosha qilingan
                        </p>
                    </div>
                </Link>

            </div>

        </div>
    );
}

export default FilterNav;