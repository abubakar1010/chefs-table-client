import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import CalculateTable from "../CalculateTable/CalculateTable";


const Recipes = () => {

    const [data, setData] = useState([])

    useEffect( () => {

        fetch('recipe.json')
        .then( response => response.json())
        .then( dataInObj => setData(dataInObj))
    },[])


    // const [serialOfItem, setSerialOfItem] = useState(1)

    const [item, setItem] = useState([])
    // const [currentlyCookingItem, setCurrentlyCookingItem] = useState([])

    const handleUpdateItems = (name,preparing_time,calories) => {

        // const newSerial = serialOfItem + 1
        // setSerialOfItem(newSerial)
        // console.log(serialOfItem);
    //     const tableRow = <tr className="bg-[#28282808] border-b pb-4 ">


    //     <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8 ">
    //         {serialOfItem}
    //     </td>
    //     <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-28 ">
    //         {name}
    //     </td>
    //     <td className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8">
    //         {preparing_time}
    //     </td>
    //     <td className="pl-5 py-4 font-medium text-[#282828B2] text-wrap w-8">
    //         {calories}
    //     </td>
    //     <td className="pl-4 py-4 font-medium text-[#282828B2] text-wrap w-8">
    //     <button className='text-[rgba(21,11,43,1)] bg-[rgba(11,229,138,1)]  font-medium rounded-xl text-lg px-2 py-3 text-center ' onClick={ () => handleCooking(name,preparing_time,calories)}>Preparing</button>
    //     </td>
        
    // </tr>

    const newItemDetails = {name,preparing_time,calories}

    const selectedItem = [...item,newItemDetails];

    setItem(selectedItem)

    console.log(item);

    }

    // const handleCooking = (name,preparing_time,calories) => {

    // //     const row = <tr className="bg-[#28282808] border-b pb-4 ">


    // //     <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8 ">
    // //         {serialOfItem}
    // //     </td>
    // //     <td scope="row" className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-28 ">
    // //         {name}
    // //     </td>
    // //     <td className="px-2 py-4 font-medium text-[#282828B2] text-wrap w-8">
    // //         {preparing_time}
    // //     </td>
    // //     <td className="pl-5 py-4 font-medium text-[#282828B2] text-wrap w-8">
    // //         {calories}
    // //     </td>
        
    // // </tr>

    // const selected = [...(JSON.parse(JSON.stringify(currentlyCookingItem))),row];
    

    // setCurrentlyCookingItem(selected)
    // console.log(currentlyCookingItem);

    // }


    // console.log(currentlyCookingItem);


    return (
        <>

        <section className="container mx-auto">
            <div className=" container mx-auto my-28 ">
                
                <div className=" text-center space-y-5 max-w-6xl mx-auto text-lg">
                    <h1 className="font-medium text-4xl">Our Recipes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione expedita atque amet distinctio, molestiae tenetur modi adipisci impedit cum? Maxime ipsum nobis sed est, quia odio officiis delectus animi soluta?</p>
                </div>

            </div>

            <div className=" flex gap-12">

            <div className=" grid grid-cols-1 xl:grid-cols-2 w-[840px] gap-9 my-12">
            {
                data.map( element => <Recipe key={element.id} data={element} handleUpdateItems={handleUpdateItems} />)
            }
            </div>

            <div>
                <CalculateTable item={item}  />
            </div>

            </div>
        </section>

        </>
    );
};

export default Recipes;