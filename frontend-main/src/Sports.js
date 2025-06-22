import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sports = () => {
    const [sportsData, setSportsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSportsData = async () => {
            try {
                const response = await axios.get('http://localhost:5005/api/sports');
                setSportsData(response.data);
            } catch (error) {
                setError('Error fetching data');
                console.error('Error fetching sports data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSportsData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Sports</h1>
            {sportsData.length > 0 ? (
                sportsData.map(sport => (
                    <div key={sport._id}>
                        <h3>{sport.name}</h3>
                        <p>{sport.description}</p>
                        <img src={sport.url} alt={sport.name} style={{ width: '200px', height: 'auto' }} />
                        <p>Published at: {new Date(sport.publishedAt).toLocaleString()}</p>
                    </div>
                ))
            ) : (
                <p>No sports data available.</p>
            )}
        </div>
    );
};

export default Sports;
