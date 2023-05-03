import React, { useEffect, useState } from 'react';
import SingleCheif from '../SingleCheif/SingleCheif';

const Cheif = () => {
    const [cheifs,setCheifs]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/chiefs`)
        .then(res=>res.json())
        .then(data=>setCheifs(data))
        .catch(error=>console.log(error))
    },[])

    return (
        <div className='my-16 md:w-10/12 w-11/12 mx-auto'>
            <h1>All Cheifs</h1>
           <div className='grid lg:grid-cols-3 gap-4 justify-items-center'>
           {
                cheifs.map(cheif=> <SingleCheif key={cheif.id} cheif={cheif} ></SingleCheif>)
            }
           </div>
        </div>
    );
};

export default Cheif;