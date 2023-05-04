import React, { useEffect, useState } from 'react';
import SingleCheif from '../SingleCheif/SingleCheif';
import { useLoaderData } from 'react-router-dom';

const Cheif = () => {
    const cheifs = useLoaderData();
    if (cheifs.loading) {
        return<div className='flex justify-center items-center py-12'>
        <div className='radial-progress text-orange-500' style={{"--value":100,"--size": "50px", "--thickness": "5px"}}>    
        </div>
        <div className='animate-spin radial-progress absolute text-white' style={{"--value":15,"--size": "50px", "--thickness": "5px"}}>
            
        </div>
    </div>;
    }
    return (
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <h2 className='text-orange-500 text-2xl md:text-5xl text-center'>All Cheifs</h2>
            <div className='grid lg:grid-cols-3 justify-items-center'>
                {cheifs.map(cheif => <SingleCheif key={cheif.id} cheif={cheif} ></SingleCheif>)}
            </div>
        </div>
    );
};


export default Cheif;