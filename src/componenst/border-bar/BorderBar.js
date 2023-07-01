import './borderBar.css';

function BorderBar( { word, } ) {
    return (
        <div className="border-bar">
            <button className="bar-button">
                {word}
            </button>

            <div className="indicator-box">

                <button>
                    <i className="bi bi-arrow-left-short"></i>
                </button>

                <button>
                    <i className="bi bi-arrow-right-short"></i>
                </button>

            </div>
        </div>

    );
}

export default BorderBar;