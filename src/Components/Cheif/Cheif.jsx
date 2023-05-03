import React, { useEffect, useState } from 'react';
import SingleCheif from '../SingleCheif/SingleCheif';

const Cheif = () => {
    const [cheifs, setCheifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/chiefs`)
            .then(res => res.json())
            .then(data => {
                setCheifs(data);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
            <h2 className='text-orange-500 text-2xl md:text-5xl text-center'>All Cheifs</h2>
            {isLoading ? (
                <div className='flex justify-center items-center py-12'>
                    <div className='animate-spin radial-progress text-orange-500' style={{"--value":90,"--size": "70px", "--thickness": "3px"}}>Loading
                        
                    </div>
                </div>
            ) : (
                <div className='grid lg:grid-cols-3 justify-items-center'>
                    {cheifs.map(cheif => <SingleCheif key={cheif.id} cheif={cheif} ></SingleCheif>)}
                </div>
            )}
        </div>
    );
};


export default Cheif;