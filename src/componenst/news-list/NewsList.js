import React from 'react';
import NewsListItem from "../news-list-item/NewsListItem";
import BorderBar from "../border-bar/BorderBar";

function NewsList({ data, word, }) {
    return (
        <div className="news-box">
            <BorderBar word={word} />
            {
                data.map(item => (
                    <NewsListItem
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        date={item.date}
                        views={item.views}
                    />))
            }
        </div>
    );
}

export default NewsList;