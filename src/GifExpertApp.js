import React, { useState } from 'react'
import { AddCategorys } from './components/AddCategorys';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);
    //prueba
    // const handdler = () =>{
    //     // setCategories([...categories, "Super Campeones"]);
    //     setCategories(cats=>[...categories, "Super Campeones"]);
    // }

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategorys setCategories={setCategories} />
          <hr />

            <ol>
                {
                  categories.map(category =>
                        <GifGrid key = { category } category = { category }/> 
                    )
                }
            </ol>
        </>
    )
}
