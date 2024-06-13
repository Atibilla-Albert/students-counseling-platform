import React from 'react';
import '../styles/videos.css';

const videos = [
    { id: 'wnHW6o8WMas&pp', title: 'Never Give Up!' },
    { id: 'K8S8OvPhMDg&pp', title: 'Stay Motivated!' },
    { id: 'H7HmzwI67ec', title: 'Keep Pushing Forward!' },
];

const Videos = () => {
    return (
        <div>
            <h1>Motivational Videos</h1>
            <div className="video-list">
                {videos.map(video => (
                    <div key={video.id} className="video-item">
                        <h2>{video.title}</h2>
                        <div className="video-wrapper">
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={video.title}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videos;
