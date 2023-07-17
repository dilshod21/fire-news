import './personalPaga.css'
import NewsList from "../news-list/NewsList";
import NewsListItem from "../news-list-item/NewsListItem";

function PersonalPage({ img, title, discription, data }) {
    return (
        <div className="personal-body">
            <div className="left-box">
                <img src={img} alt="" className="video-box full-width"/>
                <h4 className="video-title">{title}</h4>
                <p className="video-discription">{discription}</p>
            </div>
            <div className="right-box">
                {
                    data.map(item => (<NewsListItem id={item.id} img={item.img} title={item.title} date={item.date} views={item.views}/>))
                }
            </div>
        </div>
    );
}

export default PersonalPage;