import {Link} from 'react-router-dom';
import './newsListItem.css';

function NewsListItem({ id, img, title, date, views, }) {
    return (
        <Link to={`/${id}`} className="news-list full-width d-f" key={id}>
            <img src={img} alt="" className="news-list-img"/>
            <div className="news-text">
                <p className="title">{title}</p>
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
        </Link>
    );
}

export default NewsListItem;