import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div className="container mx-auto px-4 mpy-16">
            <h2 className='text-orange-500 text-2xl md:text-5xl md:mb-6 mb-6 text-center'>Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <img src="https://i.ibb.co/S0dF6qB/gallery-1.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/S3vzRDV/gallery-3.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/mqRnbxt/gallery-4.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/gVBhSQx/gallery-5.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/BZ8M2wJ/gallery-6.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/mHL9b2Y/gallery-2.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/2vX8YZB/gallery-8.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://i.ibb.co/zhw1SKR/gallery-7.jpg" alt="Food 1" className="w-full h-full rounded-2xl shadow-2xl shadow-gray-400 object-cover  hover:filter-none transition duration-500 ease-in-out" />
                        <div className="absolute rounded-2xl inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-900 bg-opacity-50 transition duration-500 ease-in-out">
                            <h3 className="text-white text-xl font-bold">Food 1</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;