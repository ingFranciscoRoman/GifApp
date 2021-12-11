import React from 'react';
import { useFetchGift } from '../hooks/useFetchGift';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGift( category );    

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className='animate__animated animate__flash' >Cargando...</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItems
                            key = { img.id } 
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
