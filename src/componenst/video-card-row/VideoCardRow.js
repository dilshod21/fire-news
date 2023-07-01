import React from 'react';
import VideoCardItem from "../video-card-item/VideoCardItem";

function VideoCardRow({ data }) {
    return (
        <div className="row">
            {
                data.map(item => (
                    <VideoCardItem
                        id={item.id}
                        img={item.img}
                        title={item.title}
                        type={item.type}
                        grade={item.grade}
                        date={item.date}
                        views={item.views}
                    />))
            }

        </div>
    );
}

export default VideoCardRow;