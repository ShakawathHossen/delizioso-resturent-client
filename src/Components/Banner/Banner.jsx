import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center md:h-screen h-72 banner-image" style={{backgroundImage: 'url("https://i.ibb.co/ss4Bsfc/ingredients-near-pizza.jpg")'}}>
  <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <h1 className="md:w-9/12 mx-auto text-3xl md:text-5xl text-white font-bold leading-tight mb-4 line-">Buon Appetito! Experience Authentic <span className='text-orange-500 italic text-4xl md:text-6xl'>Italian</span> Cuisine </h1>
      <p className="text-xl text-white mb-8 md:w-8/12 w-10/12 mx-auto">Our chefs use only the freshest ingredients and traditional cooking techniques to create mouthwatering dishes that are sure to satisfy.</p>
      <div className="flex justify-center">
        <button className="border border-white hover:bg-white text-orange-500 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">View Menu</button>
        <button  className="border border-white hover:bg-white text-orange-500 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">Our Sheif</button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Banner;