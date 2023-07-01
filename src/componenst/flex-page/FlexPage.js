import './flexPage.css';
import VideoCardRow from "../video-card-row/VideoCardRow";

function FlexPage({word, data}) {
    return (
        <div>
            <div className="d-container">
                <br/><br/>
                <h2 className="heading">{word}</h2>
                <div className="border-bottom"></div>
                <br/><br/>

                <VideoCardRow data={data}/>

            </div>

        </div>
    );
}

export default FlexPage;