import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import Chart from "../Chart/Chart";


const Recipes = () => {

    const [data, setData] = useState([])

    useEffect( () => {

        fetch('recipe.json')
        .then( response => response.json())
        .then( dataInObj => setData(dataInObj))
    },[])

    // add item on cart 

    const [recipe, setRecipe] = useState([])

    const [count, setCount] = useState(1)

    function handleAddRecipe(name, preparing_time, calories){

        let newCount = count + 1

        setCount(newCount)

        const tableRow = 
        <>
        <th scope="row" className="px-2 py-4 font-medium  ">
            {count}
        </th>
        <th scope="row" className="px-3 py-4 font-medium text-wrap  ">
            {name}
        </th>
        <td className="px-3 py-4">
            {preparing_time}
        </td>
        <td className="px-3 py-4">
            {calories}
        </td>
        <td className=" py-4">
            <button className="text-[rgba(21,11,43,1)] bg-[rgba(11,229,138,1)]  font-medium rounded-full text-sm px-4 py-3 text-center">Preparing</button>
        </td>
        </>


        const newRecipe = [ ...recipe,tableRow ]

        setRecipe(newRecipe)

    }

    return (
        <>

        <section className="container mx-auto">
            <section className=" container mx-auto my-28 ">
                
                <div className=" text-center space-y-5 max-w-6xl mx-auto text-lg">
                    <h1 className="font-medium text-4xl">Our Recipes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita atque amet distinctio, molestiae tenetur modi adipisci impedit cum? Maxime ipsum nobis sed est, quia odio officiis delectus animi soluta?</p>
                </div>

            </section>

            <div className=" flex gap-12">


            <div className=" grid grid-cols-1 xl:grid-cols-2 w-[840px] gap-9 my-12">
            {
                data.map( element => <Recipe key={element.id} data={element} handleAddRecipe={handleAddRecipe} />)
            }
            </div>

            <div>
                <Chart recipe={recipe} count={count} />
            </div>

            </div>
        </section>

        </>
    );
};

export default Recipes;