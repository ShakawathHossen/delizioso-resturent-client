import React from 'react';

const AboutUs = () => {
    return (
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center">
                    <div className="md:w-1/2">
                        <img src="https://i.ibb.co/f8LCZ2W/about-1.jpg" alt="About Us Image" className="md:w-10/12 object-cover rounded-xl shadow-xl shadow-gray-500 hover:shadow-2xl hover:shadow-gray-500 duration-200" />
                    </div>
                    <div className="md:w-1/2 ">
                        <div className="my-8 lg:my-0">
                            <h2 className='text-orange-500 text-2xl md:text-5xl md:mb-6 mb-4'>About Us</h2>
                            <p className="text-gray-700 mb-4">
                            At our Italian restaurant, we strive to bring the best of Italy to your table. Our love for Italian food and culture has inspired us to create a welcoming atmosphere where you can savor the flavors of the Mediterranean. Our chefs use only the freshest and finest ingredients to create authentic Italian dishes that are bursting with flavor. From classic pasta dishes to wood-fired pizzas, our menu has something for everyone. We take pride in our warm and friendly service, ensuring that each guest feels at home from the moment they walk through our doors. Come dine with us and experience a little slice of Italy in the heart of your city.
                            </p>
                            <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default AboutUs;