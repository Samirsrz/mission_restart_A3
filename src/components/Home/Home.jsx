import React from 'react';
import Banner from '../Header/Banner';
import Trendin from '../TrendingSection/Trendin';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
     <div>
        <Banner />
        <Trendin data={data} />
     </div>
    );
};

export default Home;