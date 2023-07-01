import './filterNav.css';

function FilterNav() {
    return (
        <div className="bottom-nav">

            <div className="bottom-nav-row">
                <div className="bottom-nav-button text-center border-right">
                    <p className="text-center">
                        <i className="bi bi-fire"></i>
                    </p>
                    <p className="text-center">
                        Olovli yangiliklar
                    </p>
                </div>

                <div className="bottom-nav-button text-center border-right">
                    <p className="text-center">
                        <i className="bi bi-heart-fill"></i>
                    </p>
                    <p className="text-center">
                        Eng mashhur
                    </p>
                </div>

                <div className="bottom-nav-button text-center border-right">
                    <p className="text-center">
                        <i className="bi bi-lightning-fill"></i>
                    </p>
                    <p className="text-center">
                        Trend yangiliklar
                    </p>
                </div>

                <div className="bottom-nav-button text-center text-red">
                    <p className="text-center">
                        <i className="bi bi-eye-fill"></i>
                    </p>
                    <p className="text-center">
                        Eng ko'p tomosha qilingan
                    </p>
                </div>
            </div>

        </div>
    );
}

export default FilterNav;