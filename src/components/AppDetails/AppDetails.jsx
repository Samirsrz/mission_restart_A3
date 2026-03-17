import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';

const AppDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const app = data.find(a => a.id === parseInt(id));
    const [installed, setInstalled] = useState(false);

    if (!app) return <div>App not found!</div>;

    const { title, image, downloads, ratingAvg, reviews, description, size, companyName, ratings } = app;

    const handleInstall = () => {
        setInstalled(true);
        toast.success('App Installed Successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <Toaster position="top-right" />
            <div className="flex gap-8 items-start pb-8 border-b">
                <img src={image} alt={title} className="w-40 h-40 rounded-2xl object-cover bg-gray-200" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-sm text-gray-500">Developed by <span className="text-green-500 font-medium">{companyName}</span></p>

                    <div className="flex gap-10 mt-4">
                        <div>
                            <p className="text-sm text-gray-500">Downloads</p>
                            <p className="text-2xl font-bold">{downloads}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Average Ratings</p>
                            <p className="text-2xl font-bold">{ratingAvg}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Reviews</p>
                            <p className="text-2xl font-bold">{reviews}</p>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={installed}
                        className={`mt-4 px-6 py-2 rounded-lg font-semibold w-fit transition
                            ${installed ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 text-white cursor-pointer'}`}
                    >
                        {installed ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>

            <div className="py-8 border-b">
                <h2 className="text-xl font-bold mb-6">Ratings</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        layout="vertical"
                        data={[...ratings].reverse()}
                        margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" width={50} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="py-8">
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;