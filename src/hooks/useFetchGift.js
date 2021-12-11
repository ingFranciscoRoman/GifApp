import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";


export const useFetchGift = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /** agrego este hook para que se dispare 
     * solo cuando cambie el estado de la categoria */
    useEffect( () => { 
        getGifs( category )
            .then(imgs => { 
                setState({
                    data: imgs,
                    loading: false
                }); 
            })

    }, [category]);

    return state;
}

