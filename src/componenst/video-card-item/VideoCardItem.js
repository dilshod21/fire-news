import './videoCardItem.css';

function VideoCardItem({ id, img, title, date, type, grade, views }) {
    return (
        <div className="video-card" key={id}>
            <div className="card-body">
                <div className="card-img">
                    <img src={img} alt="" className="full-width"/>
                    <span className="type">{type}</span>
                </div>
                <p className="card-title">{title}</p>
                <div className="grades">
                    <p className="views">
                        <span className="icon-parent">
                            <i className="bi bi-calendar4"></i>
                        </span>
                        <span className="m-l">
                            {date}
                        </span>
                    </p>
                    <p className="date">
                        <span className="icon-parent">
                            <i className="bi bi-eye-fill"></i>
                        </span>
                        <span className="m-l">
                            {views}
                        </span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default VideoCardItem;