// src/components/SportsNewsSection.jsx

import React from "react";
import "./SportsNewsSection.css"; // Optional CSS file for styling

const SportsNewsSection = () => {
    return (
        <div className="sports-news-section">
            <h2>Latest Sports News</h2>

            <div className="news-item">
                <img src="https://www.telegraph.co.uk/content/dam/sport/2018/02/06/TELEMMGLPICT000070908286_trans_NvBQzQNjv4BqaRL1kC4G7DT9ZsZm6Pe3PehAFAI_f6ud569StXyOKH0.jpeg?imwidth=680" alt="Climate Change Effects on Football" />
                <h3>How Climate Change Affects Football</h3>
                <p>Date: 05/01/2024</p>
                <p>Summary: An exploration of the impact of climate change on the game, including changes in playing conditions and player performance.</p>
            </div>

            <div className="news-item">
                <img src="https://path_to_valid_image.com" alt="Football and Social Change" />
                <h3>Football and Social Change</h3>
                <p>Date: 06/01/2024</p>
                <p>Summary: Examining how football acts as a catalyst for social change and community development.</p>
            </div>

            <div className="news-item">
                <img src="https://media.licdn.com/dms/image/v2/D5612AQHfOLsCbnTacA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721193012997?e=2147483647&v=beta&t=Pe4ae2C7xSMbDkMj7D-rY2lUEwqL0pO-12gRX9_z6K0" alt="The Economics of Football" />
                <h3>The Economics of Football</h3>
                <p>Date: 06/01/2024</p>
                <p>Summary: A look into the financial aspects of football and how it shapes the sport.</p>
            </div>

            {/* Add more news items in the same format */}
        </div>
    );
};

export default SportsNewsSection;
