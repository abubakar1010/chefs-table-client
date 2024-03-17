import { useState } from "react";
import { useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import CalculateTable from "../CalculateTable/CalculateTable";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {


    // fetch data implementation process start here 

    const [data, setData] = useState([])

    useEffect( () => {

        fetch('recipe.json')
        .then( response => response.json())
        .then( dataInObj => setData(dataInObj))
    },[])


    // UpdateItem cooking data here 

    const [item, setItem] = useState([])

    const handleUpdateItems = (name,preparing_time,calories) => {


        const filterDuplicateItem = item.filter( element => element.name === name)

        if(filterDuplicateItem.length !== 0){
            
            toast.warn(
            "Oops! You can only select one item at a time. Please choose a different item. Thank you!");
            return
        }


    const newItemDetails = {name,preparing_time,calories}

    const selectedItem = [...item,newItemDetails];

    setItem(selectedItem)


    }


    return (
        <>

        <section className="container mx-auto">
            <div className=" container mx-auto my-28 ">
                
                <div className=" text-center space-y-5 max-w-6xl mx-auto text-lg">
                    <h1 className="font-medium text-4xl  tracking-widest">Our Recipes</h1>
                    <p className="px-24">Our ever-changing menu is inspired by the seasons and celebrates the best local produce with a selection of classics and internationally inspired dishes.</p>
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
        <ToastContainer />

        </>
    );
};

export default Recipes;