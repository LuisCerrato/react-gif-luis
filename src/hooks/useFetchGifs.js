import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs = ( category ) => {
 
    const [images, setImagenes] = useState([]);
    const [isLoading, setIsloading] = useState( true );


    

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImagenes(newImages);
        setIsloading( false );
        
    }

    useEffect(() => {

        getImages();

    }, []) 


    return {
        images,
        isLoading
    }
}
