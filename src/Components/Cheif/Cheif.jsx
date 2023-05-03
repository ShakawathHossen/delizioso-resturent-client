import React, { useEffect, useState } from 'react';
import SingleCheif from '../SingleCheif/SingleCheif';

const Cheif = () => {
    const [cheifs, setCheifs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/chiefs`)
            .then(res => res.json())
            .then(data => setCheifs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <h2 className='text-orange-500 text-2xl md:text-5xl text-center'>All Cheifs</h2>
            <div className='grid lg:grid-cols-3 justify-items-center'>
                {
                    cheifs.map(cheif => <SingleCheif key={cheif.id} cheif={cheif} ></SingleCheif>)
                }
            </div>
        </div>
    );
};

export default Cheif;