import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {

    //no meter if en los hooks
    const [categories, setcategories] = useState([ 'Dragon Ball']);

    console.log(categories)
    const onAddCategory = (newCategory) => {

        //evitar MUTACIONES
        //var nuevo = 'Valorant';

        //categories = categories.push(nuevo);
        //categories.push('Valorant')
        console.log(newCategory)
        if (categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories]);
        //setcategories( cat=> [...cat, 'Valorant'])


    }
    //     console.log(categories)

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                onNewCategory={onAddCategory}

            />

            {
                categories.map((category) =>
                (
                    <GifGrid key={category}
                        category={category} />

                )

                )
            }




        </>
    )
}
