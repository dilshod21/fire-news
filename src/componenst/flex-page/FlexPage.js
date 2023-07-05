import './flexPage.css';
import VideoCardRow from "../video-card-row/VideoCardRow";

function FlexPage({word, icon, data}) {
    return (
        <div>
            <div className="d-container">
                <br/><br/>
                <h2 className="heading">{word} <i className={icon && icon}></i></h2>
                <div className="border-bottom"></div>
                <br/><br/>

                <VideoCardRow data={data}/>

            </div>

        </div>
    );
}

export default FlexPage;