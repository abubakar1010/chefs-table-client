import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = () => {

    const [data, setData] = useState([])

    useEffect( () => {

        fetch('recipe.json')
        .then( response => response.json())
        .then( dataInObj => setData(dataInObj))
    },[])

    return (
        <>

        <section className="container mx-auto">
            <section className=" container mx-auto my-28 ">
                
                <div className=" text-center space-y-5 max-w-6xl mx-auto text-lg">
                    <h1 className="font-medium text-4xl">Our Recipes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita atque amet distinctio, molestiae tenetur modi adipisci impedit cum? Maxime ipsum nobis sed est, quia odio officiis delectus animi soluta?</p>
                </div>

            </section>

            <section className=" grid grid-cols-1 xl:grid-cols-2 w-[840px] gap-9 my-12">
            {
                data.map( element => <Recipe key={element.id} data={element} />)
            }
            </section>
        </section>

        </>
    );
};

export default Recipes;