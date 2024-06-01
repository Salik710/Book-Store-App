import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    // Variables from loader data
    const { _id, bookTitle, imageURL } = useLoaderData();

    return (
        <div className='mt-10 px-4 lg:px-24'>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <img src={imageURL} alt={bookTitle} className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-2/3 lg:pl-8">
                    <h2 className="text-3xl font-bold mb-4">{bookTitle}</h2>
                    {/* Additional book details can be added here */}
                    {/* For example: Author name, price, description, etc. */}
                    {/* Replace with actual data */}
                    <p className="text-gray-700 mb-4">Author: [Author_Name]</p>
                    <p className="text-gray-700 mb-4">Price: $[Price]</p>
                    <p className="text-gray-700 mb-4">Description: [Book Description]</p>
                    {/* You can add more details as needed */}
                    <div className="mt-4">
                        {/* Add buttons or actions */}
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                            Add to Cart
                        </button>
                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
